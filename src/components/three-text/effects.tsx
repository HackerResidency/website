import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js'

import { WaterPass } from './shaders/water-pass'
import { state } from './state'

export function Effects() {
  const composerRef = useRef<EffectComposer | null>(null)
  const waterRef = useRef<WaterPass | null>(null)
  const { gl, size, camera, scene } = useThree()

  useEffect(() => {
    const composer = new EffectComposer(gl)
    const waterPass = new WaterPass()

    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(waterPass)
    composer.addPass(new ShaderPass(GammaCorrectionShader))
    composer.setSize(size.width, size.height)

    composerRef.current = composer
    waterRef.current = waterPass

    return () => {
      composer.dispose()
      composerRef.current = null
      waterRef.current = null
    }
  }, [gl, scene, camera])

  useEffect(() => {
    composerRef.current?.setSize(size.width, size.height)
  }, [size])

  const lastRef = useRef(state.top)
  const indexRef = useRef(0)
  const valuesRef = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  useFrame(() => {
    const composer = composerRef.current
    const water = waterRef.current
    if (!composer) return

    const { top } = state
    valuesRef.current[indexRef.current] = Math.abs(top - lastRef.current)
    const normalize =
      valuesRef.current.reduce((a, b) => a + b) / valuesRef.current.length
    if (water) {
      water.factor = THREE.MathUtils.lerp(water.factor, normalize / 20, 0.1)
    }
    lastRef.current = top
    indexRef.current = (indexRef.current + 1) % 10
    gl.autoClear = true
    composer.render()
  }, 1)

  return null
}

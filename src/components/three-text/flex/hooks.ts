import type Yoga from '@react-pdf/yoga'
import { useCallback, useContext, useMemo } from 'react'
import { type Mesh, Vector3 } from 'three'

import type { BoxContextValue, FlexContextValue } from './types'
import { BoxContext, FlexContext } from './context'

function useFlexContext<T extends { notInitialized?: boolean }>(
  context: React.Context<T>
): T {
  const value = useContext(context)
  if (value.notInitialized) {
    console.warn(
      'You must place this hook/component under a <Flex/> component!'
    )
  }
  return value
}

export function useReflow(): () => void {
  const { requestReflow } = useFlexContext<FlexContextValue>(FlexContext)
  return requestReflow
}

export function useFlexSize(): readonly [number, number, boolean | undefined] {
  const {
    size: [width, height],
    centerAnchor
  } = useFlexContext<BoxContextValue>(BoxContext)
  return useMemo(
    () => [width, height, centerAnchor] as const,
    [width, height, centerAnchor]
  )
}

export function useFlexNode(): Yoga.YogaNode | null {
  const { node } = useFlexContext<BoxContextValue>(BoxContext)
  return node
}

export function useSetSize(): (width: number, height: number) => void {
  const { requestReflow, scaleFactor } =
    useFlexContext<FlexContextValue>(FlexContext)
  const node = useFlexNode()
  return useCallback(
    (width: number, height: number) => {
      if (node == null) {
        throw new Error('yoga node is null. sync size is impossible')
      }
      node.setWidth(width * scaleFactor)
      node.setHeight(height * scaleFactor)
      requestReflow()
    },
    [node, requestReflow, scaleFactor]
  )
}

const _scaleVec = new Vector3()

export function useSyncGeometrySize(): (mesh: Mesh) => void {
  const setSize = useSetSize()
  return useCallback(
    (mesh: Mesh) => {
      mesh.updateMatrixWorld()
      _scaleVec.setFromMatrixScale(mesh.matrixWorld)
      if (
        Math.abs(_scaleVec.x - _scaleVec.y) > 0.001 ||
        Math.abs(_scaleVec.y - _scaleVec.z) > 0.001
      ) {
        throw new Error('object was not scaled uniformly')
      }
      const scale = _scaleVec.x
      mesh.geometry.computeBoundingBox()
      const bb = mesh.geometry.boundingBox!
      setSize((bb.max.x - bb.min.x) * scale, (bb.max.y - bb.min.y) * scale)
    },
    [setSize]
  )
}

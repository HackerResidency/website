import Yoga from '@react-pdf/yoga'
import * as THREE from 'three'

import type { Axis, FlexPlane, R3FlexProps } from './types'

function capitalize(str: string): string {
  return str[0]!.toUpperCase() + str.slice(1)
}

function toYogaEnum(str: string): string {
  return str.toUpperCase().replace('-', '_')
}

/**
 * Apply R3Flex props to a yoga node, handling both string enums and
 * numeric values (scaled by scaleFactor for dimensional props).
 */
export function applyYogaProps(
  node: Yoga.YogaNode,
  props: R3FlexProps,
  scaleFactor: number
): void {
  for (const key of Object.keys(props)) {
    const value = (props as Record<string, unknown>)[key]

    if (typeof value === 'string') {
      switch (key) {
        case 'flexDir':
        case 'dir':
        case 'flexDirection':
          node.setFlexDirection(
            (Yoga as Record<string, any>)[`FLEX_DIRECTION_${toYogaEnum(value)}`]
          )
          continue
        case 'align':
          node.setAlignItems(
            (Yoga as Record<string, any>)[`ALIGN_${toYogaEnum(value)}`]
          )
          node.setAlignContent(
            (Yoga as Record<string, any>)[`ALIGN_${toYogaEnum(value)}`]
          )
          continue
        case 'alignContent':
          node.setAlignContent(
            (Yoga as Record<string, any>)[`ALIGN_${toYogaEnum(value)}`]
          )
          continue
        case 'alignItems':
          node.setAlignItems(
            (Yoga as Record<string, any>)[`ALIGN_${toYogaEnum(value)}`]
          )
          continue
        case 'alignSelf':
          node.setAlignSelf(
            (Yoga as Record<string, any>)[`ALIGN_${toYogaEnum(value)}`]
          )
          continue
        case 'justify':
        case 'justifyContent':
          node.setJustifyContent(
            (Yoga as Record<string, any>)[`JUSTIFY_${toYogaEnum(value)}`]
          )
          continue
        case 'wrap':
        case 'flexWrap':
          node.setFlexWrap(
            (Yoga as Record<string, any>)[`WRAP_${toYogaEnum(value)}`]
          )
          continue
        case 'basis':
        case 'flexBasis':
          node.setFlexBasis(value)
          continue
        default:
          ;(node as any)[`set${capitalize(key)}`](value)
          continue
      }
    } else if (typeof value === 'number') {
      const scaled = value * scaleFactor
      switch (key) {
        case 'basis':
        case 'flexBasis':
          node.setFlexBasis(scaled)
          continue
        case 'grow':
        case 'flexGrow':
          node.setFlexGrow(scaled)
          continue
        case 'shrink':
        case 'flexShrink':
          node.setFlexShrink(scaled)
          continue
        case 'align':
          node.setAlignItems(value as Yoga.YogaAlign)
          continue
        case 'justify':
          node.setJustifyContent(value as Yoga.YogaJustifyContent)
          continue
        case 'flexDir':
        case 'dir':
          node.setFlexDirection(value as Yoga.YogaFlexDirection)
          continue
        case 'wrap':
          node.setFlexWrap(value as Yoga.YogaFlexWrap)
          continue
        case 'padding':
        case 'p':
          node.setPadding(Yoga.EDGE_ALL, scaled)
          continue
        case 'paddingLeft':
        case 'pl':
          node.setPadding(Yoga.EDGE_LEFT, scaled)
          continue
        case 'paddingRight':
        case 'pr':
          node.setPadding(Yoga.EDGE_RIGHT, scaled)
          continue
        case 'paddingTop':
        case 'pt':
          node.setPadding(Yoga.EDGE_TOP, scaled)
          continue
        case 'paddingBottom':
        case 'pb':
          node.setPadding(Yoga.EDGE_BOTTOM, scaled)
          continue
        case 'margin':
        case 'm':
          node.setMargin(Yoga.EDGE_ALL, scaled)
          continue
        case 'marginLeft':
        case 'ml':
          node.setMargin(Yoga.EDGE_LEFT, scaled)
          continue
        case 'marginRight':
        case 'mr':
          node.setMargin(Yoga.EDGE_RIGHT, scaled)
          continue
        case 'marginTop':
        case 'mt':
          node.setMargin(Yoga.EDGE_TOP, scaled)
          continue
        case 'marginBottom':
        case 'mb':
          node.setMargin(Yoga.EDGE_BOTTOM, scaled)
          continue
        default:
          ;(node as any)[`set${capitalize(key)}`](scaled)
          continue
      }
    }
  }
}

export function removeUndefined(obj: Record<string, unknown>): void {
  for (const key of Object.keys(obj)) {
    if (obj[key] === undefined) delete obj[key]
  }
}

export function mergeRefs<T>(
  refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (value: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    }
  }
}

export function getDepthAxis(plane: FlexPlane): Axis {
  switch (plane) {
    case 'xy':
      return 'z'
    case 'yz':
      return 'x'
    case 'xz':
      return 'y'
  }
}

export function getSizeFromPlane(
  size: [number, number, number],
  plane: FlexPlane
): [number, number] {
  switch (plane) {
    case 'xy':
      return [size[0], size[1]]
    case 'yz':
      return [size[1], size[2]]
    case 'xz':
      return [size[0], size[2]]
  }
}

/**
 * Measure a child object's bounding box relative to a parent,
 * compensating for parent's world transform.
 */
export function measureObjectSize(
  child: THREE.Group,
  parent: THREE.Group,
  box3: THREE.Box3,
  vec3: THREE.Vector3
): void {
  child.updateMatrix()
  const savedMatrix = child.matrix
  const savedAutoUpdate = child.matrixAutoUpdate
  parent.updateMatrixWorld()
  const inverseParent = new THREE.Matrix4().copy(parent.matrixWorld).invert()
  child.matrix = inverseParent
  child.matrixAutoUpdate = false
  parent.updateMatrixWorld()
  box3.setFromObject(child).getSize(vec3)
  child.matrix = savedMatrix
  child.matrixAutoUpdate = savedAutoUpdate
  parent.updateMatrixWorld()
}

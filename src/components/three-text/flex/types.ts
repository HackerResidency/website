import type Yoga from '@react-pdf/yoga'
import type { ThreeElements } from '@react-three/fiber'
import type { Group } from 'three'

export type FlexPlane = 'xy' | 'yz' | 'xz'
export type Axis = 'x' | 'y' | 'z'
export type Value = string | number

export type FlexDirection =
  | Yoga.YogaFlexDirection
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'

export type JustifyContent =
  | Yoga.YogaJustifyContent
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'space-evenly'
  | 'space-around'

export type Align =
  | Yoga.YogaAlign
  | 'auto'
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'stretch'

export type FlexWrap = Yoga.YogaFlexWrap | 'no-wrap' | 'wrap' | 'wrap-reverse'

export type FlexYogaDirection = Yoga.YogaDirection | 'ltr' | 'rtl'

export type R3FlexProps = Partial<{
  alignContent: Align
  alignItems: Align
  alignSelf: Align
  align: Align
  justifyContent: JustifyContent
  justify: JustifyContent
  flexDirection: FlexDirection
  flexDir: FlexDirection
  dir: FlexDirection
  flexWrap: FlexWrap
  wrap: FlexWrap
  flexBasis: number
  basis: number
  flexGrow: number
  grow: number
  flexShrink: number
  shrink: number
  height: Value
  width: Value
  maxHeight: Value
  maxWidth: Value
  minHeight: Value
  minWidth: Value
  padding: Value
  p: Value
  paddingTop: Value
  pt: Value
  paddingBottom: Value
  pb: Value
  paddingLeft: Value
  pl: Value
  paddingRight: Value
  pr: Value
  margin: Value
  m: Value
  marginTop: Value
  mt: Value
  marginLeft: Value
  ml: Value
  marginRight: Value
  mr: Value
  marginBottom: Value
  mb: Value
}>

type GroupProps = ThreeElements['group']

export type BoxProps = R3FlexProps &
  Omit<GroupProps, 'children'> & {
    centerAnchor?: boolean
    children:
      | React.ReactNode
      | ((
          width: number,
          height: number,
          centerAnchor?: boolean
        ) => React.ReactNode)
  }

export type FlexProps = R3FlexProps &
  Omit<GroupProps, 'children'> & {
    size?: [number, number, number]
    yogaDirection?: FlexYogaDirection
    plane?: FlexPlane
    children?: React.ReactNode
    scaleFactor?: number
    onReflow?: (totalWidth: number, totalHeight: number) => void
    disableSizeRecalc?: boolean
    centerAnchor?: boolean
  }

export interface FlexContextValue {
  scaleFactor: number
  requestReflow: () => void
  registerBox: (
    node: Yoga.YogaNode,
    group: Group,
    flexProps: R3FlexProps,
    centerAnchor?: boolean
  ) => void
  unregisterBox: (node: Yoga.YogaNode) => void
  notInitialized?: boolean
}

export interface BoxContextValue {
  node: Yoga.YogaNode | null
  size: [number, number]
  centerAnchor?: boolean
  notInitialized?: boolean
}

export interface RegisteredBox {
  group: Group
  node: Yoga.YogaNode
  flexProps: R3FlexProps
  centerAnchor: boolean
}

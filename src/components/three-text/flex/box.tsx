import type { Group } from 'three'
import Yoga from '@react-pdf/yoga'
import { useFrame } from '@react-three/fiber'
import React, {
  forwardRef,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import type { BoxProps, R3FlexProps } from './types'
import { BoxContext, FlexContext } from './context'
import { useReflow } from './hooks'
import { applyYogaProps, mergeRefs, removeUndefined } from './utils'

export const Box = forwardRef<Group, BoxProps>(function Box(props, ref) {
  const {
    children,
    centerAnchor,
    flexDirection,
    flexDir,
    dir,
    alignContent,
    alignItems,
    alignSelf,
    align,
    justifyContent,
    justify,
    flexBasis,
    basis,
    flexGrow,
    grow,
    flexShrink,
    shrink,
    flexWrap,
    wrap,
    margin,
    m,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    mb,
    ml,
    mr,
    mt,
    padding,
    p,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    pb,
    pl,
    pr,
    pt,
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    ...groupProps
  } = props

  const flexProps: R3FlexProps = useMemo(() => {
    const fp: Record<string, unknown> = {
      flexDirection,
      flexDir,
      dir,
      alignContent,
      alignItems,
      alignSelf,
      align,
      justifyContent,
      justify,
      flexBasis,
      basis,
      flexGrow,
      grow,
      flexShrink,
      shrink,
      flexWrap,
      wrap,
      margin,
      m,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      mb,
      ml,
      mr,
      mt,
      padding,
      p,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      pb,
      pl,
      pr,
      pt,
      height,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth
    }
    removeUndefined(fp)
    return fp as R3FlexProps
  }, [
    align,
    alignContent,
    alignItems,
    alignSelf,
    dir,
    flexBasis,
    basis,
    flexDir,
    flexDirection,
    flexGrow,
    grow,
    flexShrink,
    shrink,
    flexWrap,
    height,
    justify,
    justifyContent,
    m,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    mb,
    minHeight,
    minWidth,
    ml,
    mr,
    mt,
    p,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    pb,
    pl,
    pr,
    pt,
    width,
    wrap
  ])

  const { registerBox, unregisterBox, scaleFactor } = useContext(FlexContext)
  const { node: parentNode } = useContext(BoxContext)
  const groupRef = useRef<Group>(null)
  const yogaNode = useMemo(() => Yoga.Node.create(), [])
  const requestReflow = useReflow()
  const insertIndex = useRef(parentNode?.getChildCount())

  useLayoutEffect(() => {
    applyYogaProps(yogaNode, flexProps, scaleFactor)
  }, [flexProps, yogaNode, scaleFactor])

  useLayoutEffect(() => {
    if (groupRef.current && parentNode) {
      insertIndex.current = insertIndex.current || parentNode.getChildCount()
      parentNode.insertChild(yogaNode, insertIndex.current)
      registerBox(yogaNode, groupRef.current, flexProps, centerAnchor)
      return () => {
        // TODO
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        parentNode.removeChild(yogaNode)
        // yogaNode.remove()
        unregisterBox(yogaNode)
      }
    }
  }, [
    yogaNode,
    parentNode,
    flexProps,
    centerAnchor,
    registerBox,
    unregisterBox
  ])

  useLayoutEffect(() => {
    requestReflow()
  }, [children, flexProps, requestReflow])

  const [size, setSize] = useState<[number, number]>([0, 0])
  const threshold = 1 / scaleFactor

  useFrame(() => {
    const w =
      (typeof flexProps.width === 'number' ? flexProps.width : null) ||
      yogaNode.getComputedWidth().valueOf() / scaleFactor
    const h =
      (typeof flexProps.height === 'number' ? flexProps.height : null) ||
      yogaNode.getComputedHeight().valueOf() / scaleFactor
    if (
      Math.abs(w - size[0]) > threshold ||
      Math.abs(h - size[1]) > threshold
    ) {
      setSize([w, h])
    }
  })

  const boxContextValue = useMemo(
    () => ({ node: yogaNode, size, centerAnchor }),
    [yogaNode, size, centerAnchor]
  )

  return (
    <group ref={mergeRefs([groupRef, ref])} {...groupProps}>
      <BoxContext.Provider value={boxContextValue}>
        {typeof children === 'function'
          ? children(size[0], size[1], centerAnchor)
          : children}
      </BoxContext.Provider>
    </group>
  )
})

Box.displayName = 'Box'

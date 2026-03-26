import Yoga from '@react-pdf/yoga'
import { useFrame, useThree } from '@react-three/fiber'
import React, {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef
} from 'react'
import * as THREE from 'three'

import type { FlexProps, R3FlexProps, RegisteredBox } from './types'
import { BoxContext, FlexContext } from './context'
import {
  applyYogaProps,
  getDepthAxis,
  getSizeFromPlane,
  measureObjectSize,
  mergeRefs,
  removeUndefined
} from './utils'

export const Flex = forwardRef<THREE.Group, FlexProps>(
  function Flex(props, ref) {
    const {
      size = [1, 1, 1],
      yogaDirection = 'ltr',
      plane = 'xy',
      children,
      scaleFactor = 100,
      onReflow,
      disableSizeRecalc,
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

    const rootGroupRef = useRef<THREE.Group>(null)
    const registeredBoxes = useRef<RegisteredBox[]>([])

    const registerBox = useCallback(
      (
        node: Yoga.YogaNode,
        group: THREE.Group,
        boxFlexProps: R3FlexProps,
        boxCenterAnchor = false
      ) => {
        const idx = registeredBoxes.current.findIndex((b) => b.node === node)
        if (idx !== -1) registeredBoxes.current.splice(idx, 1)
        registeredBoxes.current.push({
          group,
          node,
          flexProps: boxFlexProps,
          centerAnchor: boxCenterAnchor
        })
      },
      []
    )

    const unregisterBox = useCallback((node: Yoga.YogaNode) => {
      const idx = registeredBoxes.current.findIndex((b) => b.node === node)
      if (idx !== -1) registeredBoxes.current.splice(idx, 1)
    }, [])

    const rootNode = useMemo(() => Yoga.Node.create(), [])

    useLayoutEffect(() => {
      applyYogaProps(rootNode, flexProps, scaleFactor)
    }, [rootNode, flexProps, scaleFactor])

    const { invalidate } = useThree()
    const needsReflow = useRef(true)

    const requestReflow = useCallback(() => {
      needsReflow.current = true
      invalidate()
    }, [invalidate])

    useLayoutEffect(() => {
      requestReflow()
    }, [children, flexProps, requestReflow])

    const boundingBox = useMemo(() => new THREE.Box3(), [])
    const sizeVec = useMemo(() => new THREE.Vector3(), [])

    const primaryAxis = plane[0] as 'x' | 'y'
    const secondaryAxis = plane[1] as 'y' | 'z'
    const depthAxis = getDepthAxis(plane)

    const [layoutWidth, layoutHeight] = getSizeFromPlane(size, plane)

    const direction =
      yogaDirection === 'ltr'
        ? Yoga.DIRECTION_LTR
        : yogaDirection === 'rtl'
          ? Yoga.DIRECTION_RTL
          : yogaDirection

    const flexContextValue = useMemo(
      () => ({
        requestReflow,
        registerBox,
        unregisterBox,
        scaleFactor
      }),
      [requestReflow, registerBox, unregisterBox, scaleFactor]
    )

    const boxContextValue = useMemo(
      () => ({
        node: rootNode,
        size: [layoutWidth, layoutHeight] as [number, number],
        centerAnchor
      }),
      [rootNode, layoutWidth, layoutHeight, centerAnchor]
    )

    function performLayout(): void {
      if (!disableSizeRecalc) {
        for (const { group, node, flexProps: fp } of registeredBoxes.current) {
          const w =
            typeof fp.width === 'number' ? fp.width * scaleFactor : fp.width
          const h =
            typeof fp.height === 'number' ? fp.height * scaleFactor : fp.height

          if (w !== undefined && h !== undefined) {
            node.setWidth(w as number)
            node.setHeight(h as number)
          } else if (node.getChildCount() === 0) {
            if (rootGroupRef.current) {
              measureObjectSize(
                group,
                rootGroupRef.current,
                boundingBox,
                sizeVec
              )
            } else {
              boundingBox.setFromObject(group).getSize(sizeVec)
            }
            node.setWidth((w as number) || sizeVec[primaryAxis] * scaleFactor)
            node.setHeight(
              (h as number) || sizeVec[secondaryAxis] * scaleFactor
            )
          }
        }
      }

      rootNode.calculateLayout(
        layoutWidth * scaleFactor,
        layoutHeight * scaleFactor,
        direction
      )

      const computedW = rootNode.getComputedWidth()
      const computedH = rootNode.getComputedHeight()

      let minLeft = 0
      let maxRight = 0
      let minTop = 0
      let maxBottom = 0

      for (const {
        group,
        node,
        centerAnchor: boxCA
      } of registeredBoxes.current) {
        const { left, top, width: w, height: h } = node.getComputedLayout()

        const isRootChild = !node.getParent()?.getParent()
        const [offsetX, offsetY] =
          centerAnchor && isRootChild
            ? [-computedW / 2, -computedH / 2]
            : [0, 0]

        const posObj: Record<string, number> = {
          [primaryAxis]: (offsetX + left + (boxCA ? w / 2 : 0)) / scaleFactor,
          [secondaryAxis]: -(offsetY + top + (boxCA ? h / 2 : 0)) / scaleFactor,
          [depthAxis]: 0
        }
        const position = new THREE.Vector3(
          posObj.x ?? 0,
          posObj.y ?? 0,
          posObj.z ?? 0
        )

        minLeft = Math.min(minLeft, left)
        minTop = Math.min(minTop, top)
        maxRight = Math.max(maxRight, left + w)
        maxBottom = Math.max(maxBottom, top + h)

        group.position.copy(position)
      }

      onReflow?.(
        (maxRight - minLeft) / scaleFactor,
        (maxBottom - minTop) / scaleFactor
      )
      invalidate()
    }

    useFrame(() => {
      if (needsReflow.current) {
        needsReflow.current = false
        performLayout()
      }
    })

    return (
      <group ref={mergeRefs([rootGroupRef, ref])} {...groupProps}>
        <FlexContext.Provider value={flexContextValue}>
          <BoxContext.Provider value={boxContextValue}>
            {children}
          </BoxContext.Provider>
        </FlexContext.Provider>
      </group>
    )
  }
)

Flex.displayName = 'Flex'

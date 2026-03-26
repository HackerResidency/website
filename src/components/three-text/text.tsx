import { Text as TextImpl } from '@react-three/drei'
import React from 'react'

import { useReflow } from '@/components/three-text/flex'

export function Text({
  bold = false,
  anchorX = 'left',
  anchorY = 'top',
  textAlign = 'left',
  ...props
}: any) {
  const reflow = useReflow()
  const font = bold ? '/fonts/Inter-Bold.woff' : '/fonts/Inter-Regular.woff'

  return (
    <TextImpl
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      onSync={reflow}
      {...props}
    />
  )
}

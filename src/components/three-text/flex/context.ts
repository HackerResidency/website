import { createContext } from 'react'

import type { BoxContextValue, FlexContextValue } from './types'

export const FlexContext = createContext<FlexContextValue>({
  scaleFactor: 100,
  requestReflow() {
    console.warn('Flex not initialized! Please report')
  },
  registerBox() {
    console.warn('Flex not initialized! Please report')
  },
  unregisterBox() {
    console.warn('Flex not initialized! Please report')
  },
  notInitialized: true
})

export const BoxContext = createContext<BoxContextValue>({
  node: null,
  size: [0, 0],
  notInitialized: true
})

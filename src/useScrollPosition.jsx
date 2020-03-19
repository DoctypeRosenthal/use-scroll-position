/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'


const defaultPosition = { x: 0, y: 0 }


function getScrollPosition (elementRef) {
  if (!elementRef) {
    return defaultPosition
  }

  if (elementRef.current === window) {
    return { x: window.scrollX, y: window.scrollY }
  }

  const position = elementRef.current.getBoundingClientRect()
  return { x: position.left, y: position.top }
}


export const useScrollPosition = (element, effect, deps = [], wait = 0) => {
  if (!element) {
    throw Error("useScrollPosition: element must be specified!")
  }
  const position = useRef(getScrollPosition())
  const throttleTimeout = useRef(0)
  const callBack = () => {
    const currPos = getScrollPosition(element)
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout.current = 0
  }

  useEffect(() => {
    const handleScroll = () => {
      if (wait === 0) {
        if (throttleTimeout.current === 0) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}


/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from 'react'


function getScrollPosition ({ element, useWindow }) {
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}


export const useScrollPosition = (effect, deps, element, useWindow, wait) => {
    const position = useRef(getScrollPosition({ useWindow }))

    let throttleTimeout = null

    const callBack = () => {
      const currPos = getScrollPosition({ element, useWindow })
      effect({ prevPos: position.current, currPos })
      position.current = currPos
      throttleTimeout = null
    }

    useLayoutEffect(() => {
      const handleScroll = () => {
        if (wait) {
          if (throttleTimeout === null) {
            throttleTimeout = setTimeout(callBack, wait)
          }
        } else {
          callBack()
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
  }

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
}

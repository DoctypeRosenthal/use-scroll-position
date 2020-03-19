import React, { useState, useRef, useMemo } from 'react'
import { useScrollPosition } from '../../../../src/'

import NavLinks from '../components/nav-links'
import FakeData from '../components/fake-data'

import { Navbar, Content, Position, Wrapper, RedBox } from '../styles'

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef({ x: 10, y: 150 })
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: pos => setPos(elementPosition, pos),
    setViewportPosition: pos => setPos(viewportPosition, pos),
    renderCount
  }
}

export default () => {
  const positionsStore = PositionStore()
  const viewportRef = useRef(window)
  const redBoxRef = useRef(null)

  // Viewport scroll position
  useScrollPosition(
    viewportRef,
    ({ currPos }) => positionsStore.setViewportPosition(currPos),
    [positionsStore],
  )

  // Element scroll position
  useScrollPosition(
    redBoxRef,
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    300
  )

  return useMemo(
    () => (
      <Wrapper>
        <RedBox ref={redBoxRef}>RED BOX</RedBox>
        <Position>
          <div>
            Deferred Rendering:
            <span>{positionsStore.renderCount}</span>
          </div>
          <div>
            Viewport Scroll:
            <span>
              X: {positionsStore.getViewportX()} Y: {positionsStore.getViewportY()}
            </span>
          </div>
          <div>
            Red Box Scroll:
            <span>
              X:{positionsStore.getElementX()} Y:{positionsStore.getElementY()}
            </span>
          </div>
        </Position>
        <Navbar show={true}>
          <NavLinks />
        </Navbar>
        <Content mt="45">
          <FakeData />
        </Content>
      </Wrapper>
    ),
    [positionsStore]
  )
}

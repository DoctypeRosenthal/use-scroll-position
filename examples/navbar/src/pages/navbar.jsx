import React, { useState, useRef, useMemo, Fragment } from 'react'
import { useScrollPosition } from '../../../../src/'

import NavLinks from '../components/nav-links'
import FakeData from '../components/fake-data'

import { Navbar, Content, Footer } from '../styles'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)
  const refContainer = useRef(null)

  useScrollPosition(
    refContainer,
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    300
  )

  return useMemo(
    () => (
      <Fragment>
        <Navbar show={hideOnScroll}>
          <NavLinks />
        </Navbar>
        <Content mt="45" ref={refContainer}>
          <FakeData />
        </Content>
        <Footer>
          <b>RENDER COUNT: {++rendersCount.current}</b>
        </Footer>
      </Fragment>
    ),
    [hideOnScroll]
  )
}

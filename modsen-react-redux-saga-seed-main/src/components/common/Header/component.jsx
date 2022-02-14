import React from 'react'

import { Container, ActiveApi, ChangeApi } from './styles'

const Header = () => (
  <Container>
    <ActiveApi>Active Api</ActiveApi>
    <ChangeApi>Change Api</ChangeApi>
  </Container>
)

export default Header

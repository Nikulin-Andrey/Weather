import React from 'react'
import pt from 'prop-types'

import Header from '@/components/common/Header'

import { Container, Content } from './styles'

const Basic = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
)

Basic.propTypes = {
  children: pt.node,
}

export default Basic

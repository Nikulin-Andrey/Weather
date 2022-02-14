import React from 'react'

import BasicLayout from '@/components/layouts/Basic'
import DateTime from '@/components/blocks/DateTime'
import Place from '@/components/blocks/Place/component'
import Weather from '@/components/blocks/Weather'

import { Container, InfoContainer } from './styles'

const Landing = () => (
  <BasicLayout>
    <Container>
      <InfoContainer>
        <DateTime />
        <Place />
      </InfoContainer>
      <Weather />
    </Container>
  </BasicLayout>
)

export default Landing

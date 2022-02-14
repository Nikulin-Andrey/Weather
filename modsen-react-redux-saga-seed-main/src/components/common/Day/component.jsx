import React from 'react'

import {
  Container,
  Icon,
  Info,
  Name,
  Temperature,
} from './styles'

const Day = ({ today, name, temperature, icon }) => (
  <Container today={today}>
    <Icon today={today} src={icon} />
    <Info today={today}>
      <Name>{name}</Name>
      <Temperature>{temperature} &deg;</Temperature>
    </Info>
  </Container>
)

export default Day

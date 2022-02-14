import React from 'react'

import { Container, Today, Days, Day } from './styles'

const Weather = () => {
  return (
    <Container>
      <Today></Today>
      <Days>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
        <Day></Day>
      </Days>
    </Container>
  )
}

export default Weather

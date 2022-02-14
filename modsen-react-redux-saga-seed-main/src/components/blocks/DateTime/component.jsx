import React from 'react'

import { Container, CurrentDate, Time } from './styles'

const DateTime = () => {
  const date = new Date()
  const time = date.toLocaleTimeString()

  return (
    <Container>
      <Time>{time.slice(0, time.length - 3)}</Time>
      <CurrentDate>{date.toDateString()}</CurrentDate>
    </Container>
  )
}

export default DateTime

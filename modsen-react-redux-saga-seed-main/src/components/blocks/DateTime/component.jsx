import React from 'react'

import { Container, CurrentDate, Time } from './styles'

const DateTime = () => {
  const date = new Date('2018-01-12T17:00:00+00:00')

  const time = date.toLocaleTimeString()

  return (
    <Container>
      <Time>{time.slice(0, time.length - 3)}</Time>
      <CurrentDate>{date.toDateString()}</CurrentDate>
    </Container>
  )
}

export default DateTime

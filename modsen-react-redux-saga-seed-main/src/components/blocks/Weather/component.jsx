import React from 'react'

import Day from '@/components/common/Day'

import { Container, Today, Days } from './styles'

const Weather = () => {
  return (
    <Container>
      <Today>
        <Day
          today
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
      </Today>
      <Days>
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
        <Day
          name="today"
          temperature={10}
          icon="https://cdn-icons-png.flaticon.com/512/169/169367.png"
        />
      </Days>
    </Container>
  )
}

export default Weather

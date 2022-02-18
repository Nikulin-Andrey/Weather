import React from 'react'

import Day from '@/components/common/Day'

import { Container, Today, Days } from './styles'

import { icons } from '@/constants/icons'

const Weather = ({ now, nextDays }) => {
  return (
    <Container>
      <Today>
        <Day
          today
          name="today"
          temperature={now}
          icon={icons.fewClouds}
        />
      </Today>
      <Days>
        {nextDays.map(day => (
          <Day
            key={day.name}
            name={day.name}
            temperature={day.airTemperature.noaa}
            icon={icons[day.weatherType]}
          />
        ))}
      </Days>
    </Container>
  )
}

export default Weather

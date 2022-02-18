import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchWeatherAction } from '@/actions'
import BasicLayout from '@/components/layouts/Basic'
import DateTime from '@/components/blocks/DateTime'
import Place from '@/components/blocks/Place/component'
import Weather from '@/components/blocks/Weather'

import { Container, InfoContainer } from './styles'
import Loader from '@/components/common/Loader'

const Landing = () => {
  const weather = useSelector(store => store.weather)

  const dispatch = useDispatch()

  useEffect(() => {
    if (weather.today.length === 0) {
      dispatch(fetchWeatherAction())
    }
  }, [])

  return (
    <BasicLayout>
      <Container>
        <InfoContainer>
          <DateTime />
          <Place />
        </InfoContainer>
        {weather.isFetching
          ? (
          <Loader />
            )
          : (
          <Weather
            now={weather.today[0].airTemperature.noaa}
            nextDays={weather.nextDays}
          />
            )}
      </Container>
    </BasicLayout>
  )
}

export default Landing

// navigator.geolocation.getCurrentPosition(
//   async pos => {
//     const data = await fetch(
//       `https://api.stormglass.io/v2/weather/point?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&params=airTemperature,cloudCover,precipitation`,
//       {
//         headers: {
//           Authorization:
//             '58a31958-8e66-11ec-a301-0242ac130002-58a319d0-8e66-11ec-a301-0242ac130002',
//           cache: 'force-cache',
//         },
//       },
//     )
//     console.log(data.status)
//     const parsed = await data.json()
//     console.log(parsed)
//     localStorage.setItem(
//       'data',
//       configureStormglassData(parsed),
//     )
//   },
// )

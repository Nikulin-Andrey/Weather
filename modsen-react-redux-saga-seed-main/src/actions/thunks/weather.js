import {
  startFetchingAction,
  addWeatherAction,
  errorFetchAction,
} from '@/actions'
import { configureStormglassData } from '@/helpers'
import { fetchOptions } from '@/constants'

export const fetchWeatherAction = () => async dispatch => {
  dispatch(startFetchingAction())

  try {
    navigator.geolocation.getCurrentPosition(async pos => {
      const url = `https://api.stormglass.io/v2/weather/point?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&params=airTemperature,cloudCover,precipitation`
      const data = await fetch(url, fetchOptions)
      const weather = await data.json()
      const configuredWeather =
        configureStormglassData(weather)

      dispatch(addWeatherAction(configuredWeather))
    })
  } catch (err) {
    dispatch(errorFetchAction(err))
  }
}

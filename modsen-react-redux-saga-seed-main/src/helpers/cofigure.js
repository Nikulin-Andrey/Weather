import { getWeatherType } from './weather'

export const configureStormglassData = data => {
  const result = {
    today: [],
    nextDays: [],
  }
  data.hours.slice(0, 24).forEach(hour => {
    result.today.push({
      time: new Date(hour.time).getHours(),
      airTemperature: hour.airTemperature,
      weatherType: getWeatherType(
        hour.cloudCover.noaa,
        hour.precipitation.noaa,
      ),
    })
  })
  for (let i = 24; i < 24 * 7; i += 24) {
    result.nextDays.push({
      name: new Date(data.hours[i].time)
        .toDateString()
        .slice(0, 3),
      airTemperature: data.hours[i].airTemperature,
      weatherType: getWeatherType(
        data.hours[i].cloudCover.noaa,
        data.hours[i].precipitation.noaa,
      ),
    })
  }

  return result
}

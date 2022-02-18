export const getWeatherType = (clouds, precipitation) => {
  if (precipitation > 0.5) {
    return 'rain'
  }

  if (clouds < 40) {
    return 'clearSky'
  } else if (clouds < 70) {
    return 'fewClouds'
  } else {
    return 'scatteredClouds'
  }
}

export const getCurrentUrl = async () => {
  let url
  navigator.geolocation.getCurrentPosition(pos => {
    url = `https://api.stormglass.io/v2/weather/point?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&params=airTemperature,cloudCover,precipitation`
  })
  console.log(url)
  return url
}

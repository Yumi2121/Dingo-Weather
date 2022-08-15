const getGeolocation = (inputValue) => {}

const getWeatherInfo = (geoLocation) => {}

const daily = {
  dt: 1646326800,
  sunrise: 1646306882,
  sunset: 1646347929,
  moonrise: 1646309880,
  moonset: 1646352120,
  moon_phase: 0.03,
  temp: {
    day: 281.63,
    min: 271.72,
    max: 282.21,
    night: 271.72,
    eve: 277.99,
    morn: 280.92
  },
  feels_like: {
    day: 277.83,
    night: 264.72,
    eve: 273.35,
    morn: 277.66
  },
  pressure: 1016,
  humidity: 55,
  dew_point: 273.12,
  wind_speed: 9.29,
  wind_deg: 3,
  wind_gust: 16.48,
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }
  ],
  clouds: 49,
  pop: 0.25,
  rain: 0.11,
  uvi: 3.38
}
const renderWeatherInfo = (dailyWeather) => {}

const getGeolocation = (inputValue) => {}

const getWeatherInfo = async (geoLocation) => {
  const apiKey = '3fb3bd415089d39656842aea6abbf73f'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${geoLocation.toLowerCase()}&appid=${apiKey}`

  try {
    const response = await fetch(url, {
      'Access-Control-Allow-Origin': 'https://api.openweathermap.org'
    })
    const text = await response.text()
    console.log('this should be the response: ', text)
    return text
  } catch (e) {
    console.error(e)
  }
}

getWeatherInfo('Brisbane')

const current = {
  coord: {
    lon: 153.0281,
    lat: -27.4679
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }
  ],
  base: 'stations',
  main: {
    temp: 293.36,
    feels_like: 292.56,
    temp_min: 291.83,
    temp_max: 295.23,
    pressure: 1011,
    humidity: 43
  },
  visibility: 10000,
  wind: {
    speed: 6.17,
    deg: 30
  },
  clouds: {
    all: 0
  },
  dt: 1660542014,
  sys: {
    type: 2,
    id: 2005393,
    country: 'AU',
    sunrise: 1660508337,
    sunset: 1660548376
  },
  timezone: 36000,
  id: 2174003,
  name: 'Brisbane',
  cod: 200
}
const renderWeatherInfo = (dailyWeather) => {}

const mainDate = document.getElementById('main-date')
const timeStamp = new Date(current.dt * 1000)
const dateStr = timeStamp.toLocaleDateString()
mainDate.innerHTML = dateStr

const mainLocation = document.getElementById('main-location')
let currLocation = current.name + ',' + current.sys.country
mainLocation.innerHTML = `${currLocation}`

let weatherIconID = current.weather[0].icon
document.getElementById(
  'weather-icon'
).src = `http://openweathermap.org/img/wn/${weatherIconID}@2x.png`

let currTemp = Math.round(current.main.temp - 273)
let currTempDom = document.getElementById('temp')
currTempDom.innerHTML = `${currTemp} C`

let sunriseTimeStamp = new Date(current.sys.sunrise * 1000)
let sun = document.getElementById('sun')
sun.textContent = `Sunrise: ${sunriseTimeStamp.getHours()}:${sunriseTimeStamp.getMinutes()}`

let sunsetTimeStamp = new Date(current.sys.sunset * 1000)
let sunset = document.getElementById('sunset')
sunset.textContent = `Sunset: ${sunsetTimeStamp.getHours()}:${sunsetTimeStamp.getMinutes()}`

let rain = current.main.humidity
let rainPercent = document.getElementById('rain')
rainPercent.textContent = `${rain}%`

let wind = current.wind.speed
let windDom = document.getElementById('wind')
windDom.textContent = `${wind} m/s`

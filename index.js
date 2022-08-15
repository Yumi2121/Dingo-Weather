let weatherInfo = {}

const getWeatherInfo = async (geoLocation) => {
  const apiKey = '3fb3bd415089d39656842aea6abbf73f'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${geoLocation.toLowerCase()}&appid=${apiKey}`
  try {
    const response = await fetch(url, {
      'Access-Control-Allow-Origin': 'https://api.openweathermap.org'
    })
    const text = await response.text()
    const data = JSON.parse(text)
    console.log('this should be the response: ', data)
    return text
  } catch (e) {
    console.error(e)
  }
}

const searchBar = document.querySelector('#search-bar')
const searchButton = document.querySelector('#search-button')

const handleClick = () => {
  try {
    weatherInfo = getWeatherInfo(searchBar.value)
    renderWeatherInfo(weatherInfo)
  } catch (e) {
    console.error(e)
  }
}

searchButton.addEventListener('click', () => handleClick())

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

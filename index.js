let weatherInfo = {}

// Call this function to create an alert at the top of the page!
const newAlert = (message) => {
  const alert = document.createElement('div')
  const close = document.createElement('div')
  alert.classList.add('alert')
  close.classList.add('close')
  alert.innerText = message
  close.innerText = 'X'
  const body = document.querySelector('body')
  body.prepend(alert)
  alert.appendChild(close)
  close.addEventListener('click', () => alert.remove())
}

const handleError = (error) => {
  newAlert(error.message)
  weatherInfo = {}
  console.error(error)
}

const runSpinner = () => {
  const splash = document.createElement('div')
  const loader = document.createElement('h1')
  loader.innerText = 'LOADING...'
  loader.id = 'loader'
  splash.classList.add('splash')
  const body = document.querySelector('body')
  body.prepend(splash)
  splash.appendChild(loader)
}

const stopSpinner = () => {
  const splash = document.querySelector('.splash')
  splash.remove()
}

const getWeatherInfo = async (geoLocation) => {
  const apiKey = '3fb3bd415089d39656842aea6abbf73f'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${geoLocation.toLowerCase()}&appid=${apiKey}`
  try {
    const response = await fetch(url, {
      'Access-Control-Allow-Origin': 'https://api.openweathermap.org'
    })
    if (response.status === 200) {
      const text = await response.text()
      const data = JSON.parse(text)
      console.log('this should be the response: ', data)
      return data
    } else {
      throw new Error('something went wrong')
    }
  } catch (error) {
    handleError(error)
  }
}

const searchBar = document.querySelector('#search-bar')
const searchButton = document.querySelector('#search-button')

const handleClick = async () => {
  runSpinner()
  weatherInfo = await getWeatherInfo(searchBar.value)
  stopSpinner()
  renderWeatherInfo(weatherInfo)
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

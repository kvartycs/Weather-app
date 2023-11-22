import axios from 'axios'
import { DateTime } from 'luxon'

const API_KEY = 'e992d8bd07162348c18faf5f357f8ba3'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType)
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
  const res = await axios.get(url)

  const data = res.data

  return data
}

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data
  const { main: details, icon } = weather[0]
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  }
}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams
  ).then(formatCurrentWeather)

  return { ...formattedCurrentWeather }
}

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode }
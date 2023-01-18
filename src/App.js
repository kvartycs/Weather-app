import './index.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Input from './components/Input'
import TimeAndLocation from './components/TimeAndLocation'
import Temperature from './components/Temperature'
import Forecast from './components/Forecast'

import getFormattedWeatherData from './services/weatherService'
import { useEffect, useState } from 'react'

function App() {
  const [query, setQuery] = useState({ q: 'novosibirsk' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })
    }
    fetchWeather()
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-cyan-400 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    const winter_threshold = threshold - 20

    if (weather.temp <= winter_threshold) {
      return 'from-blue-700 to-slate-100'
    }
    if (weather.temp <= threshold) {
      return 'from-blue-500 to-green-100'
    }

    return 'from-amber-500 to-orange-100'
  }

  return (
    <div className={`bg-gradient-to-br ${formatBackground()} h-screen`}>
      <div className="m-auto  max-w-screen-md py-5">
        <TopButtons setQuery={setQuery}></TopButtons>
        <Input setQuery={setQuery} units={units} setUnits={setUnits}></Input>
        {weather && (
          <>
            <TimeAndLocation weather={weather}></TimeAndLocation>
            <Temperature weather={weather}></Temperature>
          </>
        )}
      </div>
    </div>
  )
}

export default App

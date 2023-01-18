import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

const Temperature = ({
  weather: {
    details,
    icon,
    temp,
    speed,
    sunset,
    sunrise,
    timezone,
    humidity,
    feels_like,
    temp_min,
    temp_max,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center text-xl py-6 text-white opacity-90">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-evenly text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm ietms-center justify-center">
            <UilTemperature size={18} className="mr-1"></UilTemperature>
            Feels like:
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>
          <div className="flex font-light text-sm ietms-center justify-center">
            <UilTear size={18} className="mr-1"></UilTear>
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm ietms-center justify-center">
            <UilWind size={18} className="mr-1"></UilWind>
            Wind:
            <span className="font-medium ml-1">{speed} m/s</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun></UilSun>
        <p className="font-light">
          Rise:{' '}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset></UilSunset>
        <p className="font-light">
          Set:{' '}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp></UilArrowUp>
        <p className="font-light">
          High: <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown></UilArrowDown>
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  )
}

export default Temperature

import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => (
  <div>
    <div className="flex  items-center justify-center my-6">
      <p className="text-white text-xl font-extralight">
        {formatToLocalTime(dt, timezone)}
      </p>
    </div>

    <div className="text-white font-medium flex items-center justify-center my-3 text-2xl">
      <p className="">{`${name}, ${country}`}</p>
    </div>
  </div>
)

export default TimeAndLocation

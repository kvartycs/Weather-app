import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Input = ({ setQuery, units, setUnits }) => {
  const [value, setValue] = useState('')

  const handleSearchClick = () => {
    if (value !== '') {
      setQuery({ q: value })
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({
          lat,
          lon,
        })
      })
    }
  }
  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          className="text-xl font-light p-2 rounded-lg focus:outline-none capitalize placeholder:lowercase"
          type="text"
          placeholder="Enter city"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <UilSearch
          onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition-all ease-in-out hover:-translate-y-1"
        ></UilSearch>
        <UilLocationPoint
          onClick={handleLocationClick}
          size={25}
          className="text-white cursor-pointer  transition-all ease-in-out hover:-translate-y-1"
        ></UilLocationPoint>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-white font-medium transition ease-in-out hover:-translate-y-1"
        >
          °C
        </button>
        <p className="text-white font-medium mx-1">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-white font-medium transition ease-in-out hover:-translate-y-1"
        >
          °F
        </button>
      </div>
    </div>
  )
}

export default Input

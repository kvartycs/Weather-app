import React from 'react'

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, title: 'Лондон' },
    { id: 2, title: 'Берлин' },
    { id: 3, title: 'Москва' },
    { id: 4, title: 'Лос-Анджелес' },
    { id: 5, title: 'Париж' },
  ]

  return (
    <div className=" flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.title })}
          className="text-white font-medium text-lg hover:scale-125 ease-in-out transition"
          key={city.id}
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons

import React from 'react'
import CityImage from './CityImage'
import CityTemp from './CityTemp'


import './CurrentCity.scss'
const index = ({ onClick, weatherData, flagImagUrl }) => {

  return (
    <div className='Home__current-city'>
      <CityImage weatherData={weatherData} onClick={onClick} flagImagUrl={flagImagUrl}></CityImage>
      <CityTemp weatherData={weatherData}></CityTemp>
    </div>
  )
}

export default index
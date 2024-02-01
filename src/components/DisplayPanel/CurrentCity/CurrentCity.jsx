import React from 'react'
import CityImage from './CityImage/CityImage'
import CityTemp from './CityTemp/CityTemp'
import './currentCity.scss'

const CurrentCity = ({ onClick, weatherData, flagImagUrl }) => {

  return (
    <div className='Home__current-city'>
      <CityImage weatherData={weatherData} onClick={onClick} flagImagUrl={flagImagUrl}></CityImage>
      <CityTemp weatherData={weatherData}></CityTemp>
    </div>
  )
}

export default CurrentCity
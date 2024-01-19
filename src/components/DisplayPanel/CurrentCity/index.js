import React from 'react'
import CityImage from './CityImage'
import CityTemp from './CityTemp'
import './CurrentCity.scss'

const index = ({weatherData, cityData}) => {
  console.log('weatherData', weatherData)
  return (
    <div className='Home__current-city'>
      <CityImage cityData={cityData}></CityImage>
      <CityTemp weatherData={weatherData}></CityTemp>
    </div>
  )
}

export default index
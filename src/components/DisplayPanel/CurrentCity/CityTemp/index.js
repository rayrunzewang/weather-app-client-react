import React from 'react'
import './cityTemp.scss'

const index = ({weatherData}) => {
  return (
    <div className='Home__dashboard-current-temp'>
      <div>
        <div className='home__dashboard--main-info'>
          <p>{weatherData && Math.round(weatherData.list[0].main.temp) + ' °C'}</p>
          <p>{weatherData && weatherData.list[0].weather[0].main}</p>
        </div>
        <br />
        <p> {weatherData && 'Feels like: ' + Math.round(weatherData.list[0].main.temp) + '  °C'}</p>
      </div>
    </div>
  )
}

export default index
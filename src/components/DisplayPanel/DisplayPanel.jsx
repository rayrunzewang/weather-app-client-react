import React from 'react'
import './displayPanel.scss'
import CurrentCity from './CurrentCity/CurrentCity'

const DisplayPanel = ({ onAdd, weatherData, flagImagUrl }) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  console.log(flagImagUrl)

  return (
        <div className='Home__dashboard'>
          <CurrentCity weatherData={weatherData} onClick={onAdd} flagImagUrl={flagImagUrl} >
          </CurrentCity>
          <ul className='Home__dashboard-temp-ul'>
            {weatherData &&
              (
                weatherData.list.slice(0, 8)).map((item, index) => <li key={index} style={{ height: `${item.main.temp * 4}px` }}>{Math.round(item.main.temp) + '  °C'}</li>
                )
            }
          </ul>
          <ul className='Home__dashboard-time-ul'>
            {weatherData && weatherData.list.slice(0, 8).map((item, index) => (
              <li key={index}>
                {new Date(item.dt_txt).getHours() < 13 ? new Date(item.dt_txt).getHours() + 11 + ' : 00' : new Date(item.dt_txt).getHours() - 11 + ' : 00'}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default DisplayPanel
import React from 'react'
import './displayPanel.scss'
import CurrentCity from './CurrentCity'

const Dashboard = ({ weatherData, cityData }) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  return (
    <>
      {weatherData && (
        <div className='Home__dashboard'>
          <CurrentCity weatherData={weatherData} cityData={cityData}>
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
                {new Date(item.dt_txt).getHours() < 13 ? new Date(item.dt_txt).getHours() + 11 + ' : 00': new Date(item.dt_txt).getHours() - 11 + ' : 00'}
              </li>
            ))}
          </ul>
        </div>
      ) 
      }
    </>

  )
}

export default Dashboard
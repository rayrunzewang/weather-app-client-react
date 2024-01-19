import React from 'react'
import './cityImage.scss'

const index = ({ cityData }) => {
  // 获取城市信息
  // fetch 图片
  console.log('cityData', cityData)
  const handleClick = () => {
    alert('click')
  }

  return (
    <div className='cityImageContainer'>
      <div className='city-info'>
        <h1>{cityData.cityName.toUpperCase()}</h1>
        <img className='country-flag' src={`https://flagsapi.com/${cityData.countryName.toUpperCase()}/flat/48.png`} alt="" />

      </div>
      <button className='save-button' onClick={handleClick} >Add to collection</button>

    </div>
  )
}

export default index
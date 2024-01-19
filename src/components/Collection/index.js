import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import './collection.scss'

const Index = () => {
  const [isCollectionShow, setIsCollectionShow] = useState(true);

  const handleToggleClick = () => {
    setIsCollectionShow(!isCollectionShow);
  }
  
  return (
    <div className='collection-container'>
      {isCollectionShow && <div className='collection-panel'>
        <p className='collection-panel-title'>Collections</p>
        </div>}
      <div className='toggle'>
        <ToggleButton text={"toggle"} onClick={handleToggleClick} />
      </div>
    </div>
  )
}

export default Index
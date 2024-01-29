import React from 'react'
import './toggleButton.scss'

const ToggleButton = ({ isCollectionVisible, onClick, children }) => {
  return (
    <button
      className={`toggle-button ${isCollectionVisible && 'button-collection-visible'}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default ToggleButton




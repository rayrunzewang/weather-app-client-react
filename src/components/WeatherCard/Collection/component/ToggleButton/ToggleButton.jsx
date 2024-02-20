import React from 'react'
import './toggleButton.scss'

const ToggleButton = ({ isCollectionVisible, onClick, children }) => {
  return (
    <button
      className={`collection__toggle-button ${isCollectionVisible && 'collection__toggle-button--collection-visible'}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default ToggleButton




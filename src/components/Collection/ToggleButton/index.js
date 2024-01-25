import React from 'react'

const index = ({className, text, onClick}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button className={className} onClick={handleClick}>{text}</button>
  )
}

export default index
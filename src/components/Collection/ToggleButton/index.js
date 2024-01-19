import React from 'react'

const index = ({text, onClick}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default index
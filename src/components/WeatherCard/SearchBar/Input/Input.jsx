import React, { useState } from 'react'
import './Input.scss'

const Input = (props) => {

  return (
    <input className='search-bar__input' type="text" {...props} />
  )
}

export default Input
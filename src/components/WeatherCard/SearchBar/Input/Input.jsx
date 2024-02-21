import React, { useState } from 'react'
import './Input.scss'

const Input = (props) => {
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  props.onChange(value)

  return (
    <input className='search-bar__input' type="text" value={value} onChange={handleChange} />
  )
}

export default Input
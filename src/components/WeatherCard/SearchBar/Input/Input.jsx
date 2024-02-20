import React from 'react'
import './Input.scss'

const Input = React.forwardRef((props, ref) => {
  return (
      <input  className='search-bar__input' ref={ref} type="text" {...props} />
  )
})

export default Input
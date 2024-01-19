import React from 'react'
import './InputBar.scss'

const index = React.forwardRef((props, ref) => {
  return (
      <input  className='home__input' ref={ref} type="text" {...props} />
  )
})

export default index
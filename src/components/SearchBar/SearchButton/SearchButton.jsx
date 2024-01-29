import React from 'react'
import './SearchButton.scss'

const SearchButton = ({onClick, className, children}) => {

  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default SearchButton
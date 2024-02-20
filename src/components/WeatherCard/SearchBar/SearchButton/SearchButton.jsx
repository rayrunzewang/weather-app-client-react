import React from 'react'
import './SearchButton.scss'

const SearchButton = ({ onClick, children }) => {

  return (
    <button onClick={onClick} className='search-bar__button'>{children}</button>
  )
}

export default SearchButton
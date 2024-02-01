import InputBar from './InputBar/index.js'
import SearchButton from './SearchButton/index.js'
import './searchBar.scss'

const SearchBar = (props) => {

  const {
    inputCityRef,
    inputCountryRef,
    cityInfo,
    handleCityInputChange,
    handleCountryInputChange,
    onSearch } = props

  const currentDate = new Date().toLocaleString();

  return (
    <div className='home__search'>
      <div>
        <h1 className='home__logo'>Weather</h1>
      </div>
      <div className='home__input-container'>
        <InputBar ref={inputCityRef} value={cityInfo.cityName} onChange={handleCityInputChange} placeHolder={'City Name'}></InputBar>
        <InputBar ref={inputCountryRef} value={cityInfo.countryName} onChange={handleCountryInputChange} placeHolder={'Country Code'}></InputBar>
      </div>
      <div className='home__button-container'>
        <SearchButton onClick={onSearch} className={'home__button'}>Search</SearchButton>
      </div>
      <div>
        <p className='home__clock'>{currentDate}</p>
      </div>
    </div>
  )
}

export default SearchBar
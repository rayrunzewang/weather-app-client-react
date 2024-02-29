import { Outlet, NavLink, Routes, Route } from 'react-router-dom';
import App from '../App';
import './layout.scss'

export const Layout = () => {
  const currentDate = new Date().toLocaleString();

  return (
    <div>
      <div className='header'>
        <div>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return isActive ? {
                color: 'orange',
                textDecoration: 'underline'
              } : {};
            }}
            className='header__logo'
          >Weather</NavLink>
          <span className='header__logo'> | </span>
          <NavLink
            to='/news'
            style={({ isActive }) => {
              return isActive ? {
                color: 'orange',
                textDecoration: 'underline'
              } : {};
            }}
            className='header__logo'
          >News</NavLink>
        </div>
        <div>
          <p className='search-bar__clock'>{currentDate}</p>
        </div>
      </div>
      <Outlet />

    </div>
  )
}

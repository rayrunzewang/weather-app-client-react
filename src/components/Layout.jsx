import { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './layout.scss'

export const Layout = () => {

  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <>
      <div className='header'>
        <div>
          <NavLink
            to='/'
            className='header__logo'
          >Weather</NavLink>
          <span className='header__logo'> | </span>
          <NavLink
            to='/news'
            className='header__logo'
          >News</NavLink>
        </div>
        <div>
          <p className='search-bar__clock'>{currentDate}</p>
        </div>
      </div>
      <Outlet />
    </>
  )
}

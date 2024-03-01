import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import WeatherCard from './components/WeatherCard'
import NewsCard from './components/NewsCard'
import './App.scss';

function App() {
  return (
    <div className="home__container">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <WeatherCard />
          }></Route>
          <Route path='/news' element={
            <NewsCard />
          }></Route>
          <Route path="*" element={<div>404</div>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

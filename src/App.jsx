import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import css from './App.module.css';
import AboutMe from './components/AboutMe/AboutMe';
import MasterClass from './components/MasterClass/MasterClass';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <BrowserRouter>
      <div className={css.img}>
        <Header />
        <Hero />
      </div>
      <AboutMe />
      <MasterClass />
      <Reviews />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

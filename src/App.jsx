import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import css from "./App.module.css"

function App() {
  return(
  <BrowserRouter>
  <div className={css.img}>
  <Header/>
  <Hero/>
  </div>
    
 
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

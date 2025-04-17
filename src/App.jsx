import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Home  from './pagecomponents/Home';
import About from './pagecomponents/About';
import Contact from './pagecomponents/Contact';
import Booking from './pagecomponents/Booking';
import Cars from './pagecomponents/Cars';
import { Footer } from './components/Footer';
import carList from '../carlist.json';
import { Login } from './pagecomponents/Login';

function App() {
  

  return (
    <>
     
      
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Cars" element={<Cars/>} />
            <Route path="/Booking" element={<Booking carList={carList}/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>
          <Footer/>
        </Router>

    </>
  )
}

export default App

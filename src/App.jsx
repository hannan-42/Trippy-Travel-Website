import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import About from './Routes/About/About';
import Home from './Routes/Home/Home';
import Contact from './Routes/Contact/Contact';
import Services from './Routes/Services/Services';

  function App() {
      return (
    <div className='App'>

      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services />}/>
       <Route path="/contact" element={<Contact />}/>
      </Routes>

    </div>
    )
  }

  export default App

// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './home/Home';
import ContactForm from './contact/Contact';
import AboutUs from './about/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './home/Home';
import ContactForm from './contact/Contact';
import AboutUs from './about/About';
import ServicePage from './services-page/Services';
import BookKeeping from './services-page/pages/BookKeeping';
import Taxation from './services-page/pages/Taxation';
import Payroll from './services-page/pages/Payroll';
import TaxServices from './services-page/pages/TaxServices';
import Secretarial from './services-page/pages/SecreterialServices';
import Immigration from './services-page/pages/Immigration';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactForm />}/>
          <Route path='/services' element={<ServicePage />}/>
          <Route path='/services/book-keeping' element={<BookKeeping />}/>
          <Route path='/services/taxation' element={<Taxation />}/>
          <Route path='/services/payroll' element={<Payroll />}/>
          <Route path='/services/tax-services' element={<TaxServices />}/>
          <Route path='/services/secretarial' element={<Secretarial />}/>
          <Route path='/services/immigration' element={<Immigration />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
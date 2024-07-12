// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import ContactForm from './contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/contact' element={<ContactForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
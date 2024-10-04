
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PositiveChange from './Components/PositiveChange';
import ContactForm from './Components/ContactForm';
import GloumServices from './Components/GloumServices';
import GloumCollaborate from './Components/GloumCollaborate';
import GloumTestimonial from './Components/GloumTestimonial';
import GloumHelp from './Components/GloumHelp';

function App() {
  return (
    <div className="App">
      {/* <GloumHelp/>
      <Routes>
        <Route path="/" element={<PositiveChange />} /> 
         <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
      <GloumServices/> */}
      {/* <GloumCollaborate/> */}
      <GloumTestimonial/>
      
    </div>
  );
}

export default App;

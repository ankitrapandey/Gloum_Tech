
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PositiveChange from './Components/PositiveChange';
import GloumServices from './Components/GloumServices';
import GloumCollaborate from './Components/GloumCollaborate';
import GloumHelp from './Components/GloumHelp';
import GloumFooter from './Components/GloumFooter';
import GloumOpportunity from './Components/GloumOpportunity'
import GloumJobDetails from './Components/GloumJobDetails';
import GloumCareer from './Components/GloumCareer';
import ContactForm from './Components/ContactForm';
import DevelopmentCenter from './Components/DevlopmentCenter';
import GloumValue from './Components/GloumValue';
import GloumContact from './Components/GloumContact';
import Services from './Components/Services';
import GloumSuccess from './Components/GloumSuccess';
import Footer from './Components/Footer';
import GloumNavbar from './Components/GloumNavbar';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      {/* <GloumHelp/> */}
      <Routes>
         {/* <Route path="/" element={<PositiveChange />} />   */}
         {/* <Route path="/contact-us" element={<ContactForm />} />  */}
        {/* <Route path="/" element={<GloumOpportunity />} /> */}
        {/* <Route path="/job/:id" element={<GloumJobDetails />} /> */}
      </Routes>
      {/* <GloumServices/>
      <GloumCollaborate/>
      <GloumFooter/>
      <GloumCareer/> */}
      {/* <ContactForm /> */}
    {/* <DevelopmentCenter/> */}

<GloumNavbar/>
<GloumContact/>
<Services/>
{/* <GloumValue/> */}
<GloumSuccess/>
<Form/>
<Footer/>
    </div>
  );
}

export default App;

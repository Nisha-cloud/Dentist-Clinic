import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Form from './components/Form'

// import Footer from './components/Footer'

// import Patientspeak from './components/Patientspeak';

// import Mapbox from './components/Mapbox';

import Confirmation from './components/Confirmation'

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      {/* <Form/> */}
      {/* <Home/> */}
      
      <Routes>
     <Route path = "/" element={<Home/>}></Route>
      
      <Route path="/confirmation" element={<Confirmation/>}></Route>
      {/* <Mapbox/> */}
      {/* <Footer/> */}
      </Routes>
      </Router>
  );
}

export default App;

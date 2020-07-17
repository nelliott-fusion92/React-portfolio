import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"; 

import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


import Nav from "./components/Nav";

function App() {
  return (
    <Router>

   <div>
    <div>
      <Nav />
    </div>
      <Route exact path="/" />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />


    
   </div>
   
   </Router>
  );
}

export default App;

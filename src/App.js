import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from "../src/Components/Navbar/Navbar"
import Home from "../src/Components/Home/Home"
import About from "../src/Components/About/About"
import FAQ from "../src/Components/FAQ/FAQ"
import Contact from "../src/Components/Contact/Contact"
import Footer from "../src/Components/Footer/Footer"
function App() {
  return (
    <div>
  <Navbar/>
  <Home/>
  <About/>
  <FAQ/>
  <Contact/>
  <Footer/>
     
    </div>
  );
}

export default App;
{/* <Router>
<Navbar/>
<Routes>
<Route exact path ="/Home" element={ <Home/>}/>
<Route exact path ="/About" element={ <About/>}/>
</Routes>
</Router> */}

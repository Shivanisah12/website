import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './ReactMenu/Home'
import About from './ReactMenu/About'
import Contact from './ReactMenu/Contact'
import Service from './ReactMenu/Service'
import Navbar from './ReactMenu/Navbar';
import Footer from './ReactMenu/Footer';
import {Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/contact' element={<Contact />}></Route>
     <Route path='/service' element={<Service />}></Route> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App

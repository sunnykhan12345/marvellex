import React, { useEffect } from 'react'
import "./App.css"
import Navbar from './component/navbar/Navbar';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './component/footer/Footer';
import Company from './pages/company/Company';
import Carrers from './pages/carrers/Carrers';
import Services from './pages/services/Services';
import Work from './pages/work/Work';
import "aos/dist/aos.css"
import AOS from 'aos';

 const App = () => {
  useEffect(() =>{
    AOS.init({duration:5000});
  },[])
  return (
    <>

    <BrowserRouter>
   
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/company' element={<Company />}/>
       <Route path='/carrers' element={<Carrers />} />
       <Route path='/services' element={<Services />} />
       <Route path='/work' element={<Work />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}


export default App;
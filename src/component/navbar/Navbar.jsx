import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import "aos/dist/aos.css"
import AOS from 'aos';
 const Navbar = () => {
  useEffect(() =>{
    AOS.init({duration:1000});
  },[])

      const[nav, setNav] = useState(false);
      // scrolll 

      const ChangeValueOneScroll = () =>{
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false)
      };
      window.addEventListener("scroll", ChangeValueOneScroll)

      // active js in here
    const navLinkEls = document.querySelectorAll(".nav-link ")
            navLinkEls.forEach(navLinkEl =>{
              navLinkEl.addEventListener("click", () =>{
                document.querySelector(".active")?.classList.remove("active")
                navLinkEl.classList.add("active")
              })
            })
  return (
    <>
  <header data-aos="fade-down">
 <nav className="navbar navbar-expand-lg navbar-light  py-4 " >
  <div className="container-fluid mx-3">
    <Link to={"/"}>
    <img src="https://mlxsoft.com/_next/static/media/logo.8f665d75.svg" alt="logo" className='img-fluid' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/work" className="nav-link " href="#">WORK</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link" href="#">SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link to="/company" className="nav-link" href="#">COMPANY</Link>
        </li>
        <li className="nav-item">
          <Link to={"/carrers"} className="nav-link" href="#">CARRERS</Link>
        </li>
      </ul>
     <div className="button">
         <Link to="/contact">
            <button>CONTACT US</button>
         </Link>
     </div>
    </div>
  </div>
</nav>
</header>



       </>

       
 
  )
}

export default Navbar;

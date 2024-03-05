import React from 'react'
import "./Course.css"

import pic from "../../images/p.PNG"
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import audpic1 from "../../images/audpic1.png"
import audpic2 from "../../images/audpic2.png"
import pc from "../../images/rightimg.png"
import g from "../../images/h (1).png"
import g1 from "../../images/h (2).png"
import proj1 from "../../images/proj1.jpg"
// import proj1 from "../../images/proj1.jpg"
import proj2 from "../../images/proj2.jpg"
import proj3 from "../../images/proj3.jpg"
import proj4 from "../../images/proj4.jpg"
import proj5 from "../../images/proj5.jpg"
import { MdCelebration } from "react-icons/md";


// import './styles.css';
import { Pagination } from 'swiper/modules';
import { SiBlockchaindotcom } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { SiBackstage } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';


// just try 

const Course = () => {
  return (
     <>
       <div className="container-fluid  ">
        <div className="course_section ">
            <div className="row">
                <div className="col-lg-8 col-sm-9">
                   <div className="text_lefts">
                    <h1>What We Do</h1>
                    <p>
                    At MLXSOFT, we offer comprehensive web and mobile app development services to help you turn your idea into a fully functional and user-friendly digital product. Our team of experienced developers, designers, and project managers are dedicated to delivering high-quality, custom solutions that meet your unique business needs.
                    </p>
                   </div>
                </div>
            </div>
           <div className="container">
           <div className="row">
          <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
            <div className="left_side">
              <div className="icons">
                <p><MdLaptopMac /></p>
                <h4>Web <br />Developement</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
            <div className="left_side">
              <div className="icons">
                <p>< FaMobileAlt  /></p>
                <h4>Mobile <br />Developement</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
            <div className="left_side">
              <div className="icons">
                <p>< SiAltiumdesigner /> </p>
                <h4>FrontEnd <br />Developement </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
            <div className="left_side">
              <div className="icons">
               <p><SiBackstage /> </p>
                   <h4>BackEnd <br />Developement  </h4>
              </div>
            </div>
          </div>
        </div>
           </div>
        </div>
       </div>


       <div className="container-fluid">
        <div className="audience_section">
          <div className="row">
            <div className="col-lg-6 me-5">
              <div className="aud_left">
                 <div className="aud_left_first">
                    <img src={audpic1} alt="img" className='img-fluid'/>
                    
                 
                 <div className="aud_left_second">
                 <img src={audpic2} alt="img" className='img-fluid'/>
                 </div>
                 </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="right_section ms-5">
                  <button>MLXSOFT</button>
                  <h1>Connect With Our <br />Audience Online</h1>
                  <p>
                  At Marvellex, we recognise the value of interacting with our audience online. Being such a provider of IT services, we are aware that the vast majority of our clients and potential clients spend a lot of time online, which makes it necessary for us to have a strong online presence in order to connect and engage with them.
                  </p>
                  <a className='btn-inimation'>More About</a>
                  <a href='#' id='icon'><MdCelebration /></a>
                  <span>10+ years <span className='d-none d-md-block d-lg-block'>experience</span></span>
              </div>
            </div>
          
          </div>

      
        </div>
       </div>


{/* my latest projects section start */}
<div className="portfolio_wrapper">
<div className="container-fluid px-4">
  <div className="row">
      <div className="col-sm-12 text-center mb-4">
        <h4 className='text-white'>MY Complete projects</h4>
        <h2 className='text-white'> My Latest Projects</h2>
      </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
       <span >
        <img src={proj1} alt="img" />
       </span>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
      <span >
        <img src={proj2} alt="img" />
       </span>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
      <img src={proj3} alt="img" />
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
      <img src={proj4} alt="img" />
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
      <img src={proj5} alt="img" />
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="card p-0">
      <img src={proj5} alt="img" />
      </div>
    </div>
  </div>
</div>
</div>
{/* my lates projects end sections  */}
       {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-6">
            <div className="sing-btn">
              <button>MLXSOFT</button>
            </div>
          </div>
          
        </div>
        <div className="row ">
          <div className="project_btn">
            <div className="project_text">
              <h3>Our Projects</h3>
            </div>
            <div className="project_btn ">
              <button>view All Projects <FaArrowDown /></button>
            </div>
          </div>
        </div>
       </div> */}

       <div className="container-fluid">
        <div className="row">
       

        </div>
       </div>

       <div className="container-fluid">
        <div className="audience_section">
          <div className="row">
            <div className="col-lg-7 me-5">
              <div className="aud_left">
                 <div className="aud_left_first">
                    <img src={g1} alt="img" className='img-fluid'/>
                 <div className="aud_left_second">
                 <img src={audpic2} alt="img" className='img-fluid'/>
                 </div>
                 </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="right_section ms-5">
                  <h3 style={{color:"var(--color-green)", fontSize:"40px", fontWeight:"800", padding:'10px 0'}}>01</h3>
                  <h2 style={{fontWeight:"800", padding:"10px 0"}}>Custom Solutions</h2>
                  <p>
                    We guranity that we wll  provide customized solutions toilred to your sepecific business neds, rather than a one-size-fits all approach. we take time the understand  your business and design solutions that work for you.
                  </p>
                  {/* <img src="file:///C:/Users/PMLS/Desktop/wepromise-img02.9cd3d7d0%20(1).svg" alt="not found img" /> */}
                  <a href='#' id='icon'><MdCelebration /></a>
                  <span>10+ years experience</span>
              </div>
            </div>
          
          </div>

      
        </div>
       </div>

       {/* <div className="conatiner-fluid">
         <div className="thired-section">
           <div className="row">
            
           </div>
         </div>
       </div> */}

       <div className="container-fluid">
         <div className="get_business">
            <div className="row">
              <div className="col-lg-10">
                  <div className="texts"><h1>Get Help for your unique business</h1></div>
              </div>
              <div className="col-lg-2">
                  <div className="texts">
                    <button>Let's Tail</button></div>
              </div>
            </div>
         </div>
       </div>
     </>
  )
}

export default Course

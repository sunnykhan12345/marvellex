import React, { useEffect } from 'react'
import "./Services.css"
import service1 from "../../images/service-hero-img.f83fa5cd.png"
import img from "../../images/approach-img2.794da857.png"
import img1 from "../../images/approach-img1.b7fffeb0.png"
import { IoIosArrowRoundForward } from "react-icons/io";

// icons
import { SiBlockchaindotcom } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { SiBackstage } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { GiMagicPortal } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { BsTransparency } from "react-icons/bs";
import { TbExplicitOff } from "react-icons/tb";
import { GiSatelliteCommunication } from "react-icons/gi";
import { BsDatabaseSlash } from "react-icons/bs";
// aos libraby imp css and asos from aos 
import "aos/dist/aos.css"
import AOS from 'aos'
import { Accordion } from 'react-bootstrap'

const Services = () => {
  useEffect(() =>{
    AOS.init({duration:1000});
  },[])
  return (
    <>
    

    <div className="service">
       <div className="container-fluid px-4">
          <div className="row">
             <div className="col-lg-6 me-5"  data-aos="fade-right" data-aos-duration="2000">
                <div className="service_left ">
                  <h1>Web and Mobile <br /> App Development <br /> Services</h1>
                  <p>
                  At MLXSOFT, we offer a wide range of web and mobile app development services to assist businesses all sizes in developing specialised software solutions that satisfy their particular requirements. Our team of expert developers produces high-quality, secure, scalable programmes that promote corporate growth. They do this by utilising the most recent tools and technology.
                  </p>
                  <div className="div d-flex align-items-center my-3">
                     <button className='me-5'>Let's taik</button>
                     <div className="icons">
                     <a style={{color:" var(--color-green)"}}>View Projects </a><span><IoIosArrowRoundForward /></span>
                     </div>
                  </div>
                </div>
             </div>
             <div className="col-lg-5  g " data-aos="fade-up-left" data-aos-duration="2000">
                <div className="service_right">
                  <img src={service1} alt="service" className='img-fluid' />
                </div>
             </div>
          </div>
       </div>
    </div>

    <div className="container-fluid px-3">
      <div className="what_we_do">
      <h3>What We Do</h3>
        <div className="row">
          <div className="col-lg-3 col-sm-6 " >
            <div className="left_side">
              <div className="icons">
                <p><MdLaptopMac /></p>
                <h4>Web <br />Developement</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6"  >
            <div className="left_side">
              <div className="icons">
                <p>< FaMobileAlt  /></p>
                <h4>Mobile <br />Developement</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< SiAltiumdesigner /> </p>
                <h4>FrontEnd <br />Developement </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="left_side">
              <div className="icons">
               <p><SiBackstage /> </p>
                   <h4>BackEnd <br />Developement  </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-3 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p><MdLaptopMac /></p>
                <h4>Web <br />Developement</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< SiAzuredevops  /></p>
                <h4>DevOps <br />Services </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< FaShoppingCart /> </p>
                <h4>E-Commerce </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6" >
            <div className="left_side">
              <div className="icons">
               <p><RiGlobalLine /> </p>
                   <h4>Web <br />Security </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid px-4">
      <div className="proffesonial">
        <div className="row my-5" >
          <div className="col-lg-12 ">
             <div className="bt">
              <button>MLXSOFT</button>
              <h2> Our Professional <br />Approach To Your Business</h2>
             </div>
          </div>
        </div>



        <div className="row">
          <div className="col-lg-6" >
            <div className="one" data-aos="fade-right" data-aos-duration="3000">
              <h4>01</h4>
              <h3>Understanding Your Business Needs</h3>
              <p>We take the time to understand your unique business needs, goals, and pain points. This allows us to develop customized solutions that are tailored to your specific requirements.</p>
            </div>
            <div className="one" data-aos="fade-right" data-aos-duration="3000">
            <h4>02</h4>
              <h3>Providing Expert Guidance</h3>
              <p>Our team of experts provides guidance and advice throughout the entire process, from project planning to implementation and support. We're dedicated to helping you make informed decisions that drive business success.</p>
            </div>
            <div className="one" data-aos="fade-right" data-aos-duration="3000">
            <h4>03</h4>
              <h3>Delivering High-Quality Solutions</h3>
              <p>Our team of experienced professionals uses the latest tools and technologies to deliver high-quality solutions that meet your business needs. We're committed to providing solutions that are scalable, reliable, and secure.</p>
            </div>
            <div className="one" data-aos="fade-right" data-aos-duration="3000">
            <h4>04</h4>
              <h3>Ensuring Clear Communication</h3>
              <p>We believe that clear communication is key to a successful project. That's why we maintain open lines of communication throughout the entire process, keeping you informed and involved every step of the way..</p>
            </div>
          </div>
          <div className="col-lg-6 " data-aos="fade-left" data-aos-duration="3000">
              <div className="aud_left">
                 <div className="aud_left_first">
                    <img src={img} alt="img" className='img-fluid'/>
                    
                 
                 <div className="aud_left_second">
                 <img src={img1} alt="img" className='img-fluid'/>
                 </div>
                 </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div className="custom">
      <div className="container-fluid mx-x">
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" >
          <div className="bt text-center">
              <button>MLXSOFT</button>
              <h2>Our Custom Software <br />Solution Services</h2>
             </div>
          </div>
         </div>
         <div className="row px-3 my-5">
         <div className="col-lg-12 ">
         <div className="btn_groups " 
    >
             <button data-aos="zoom-in" data-aos-duration="3000">UI/UX Designing</button>
             <button data-aos="zoom-in" data-aos-duration="3000">Mobile App Development</button>
             <button data-aos="zoom-in" data-aos-duration="3000">Web Developement</button>
             <button  data-aos="zoom-in" data-aos-duration="3000">BlockChain</button>
             <button   data-aos="zoom-in" data-aos-duration="3000">E Commerce</button>
           </div>
         </div>
         </div>
      </div>
      </div>

      <div className="ecommerce_store">
        <div className="container-fluid">
           <div className="row">
              <div className="col-lg-6 pe-5" data-aos="fade-right" data-aos-duration="2000">
              <div className="store">
                  {/* <h3 >E Commerce Stores</h3> */}
                  <h3>Creative UI/UX Design</h3>
                  <p>
                 "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs At MLXSOFT, we believe in designing user-centric interfaces that not only look great but also work seamlessly to provide an exceptional user experience.
                  </p>
                  {/* <p>
                      At MLXSOFT, we recognise that E-commerce has grown to be a vital element of modern business. We specialise in creating E-commerce solutions that are reliable, expandable, secure, and customized to your business requirements. We have the know-how to build an e-commerce platform that boosts sales and expansion for your company, from online shops to marketplaces.
                  </p> */}
              </div>
              </div>
              <div className="col-lg-5" data-aos="fade-left" data-aos-duration="2000">
                 <div className="store_right">
                  <h6 className='fw-bolder py-2'>Timeline </h6>
                  <h6>3-5 weeks</h6>
                  <h6 className='fw-bolder py-2'>Deliverables</h6>
                  <p>
                  User research analysis, Sitemap and Information Architecture, Clickable prototype, Described User-Stories, Technical Design document, Usability Testing Reports
                  </p>
                  {/* <p>
                  Project Brief, Functional Specifications, Technical Specifications, Sitemaps and Information Architecture, Wireframes, Prototypes, Design Assets, Front-End Development, Back-End Development, Payment Gateway Integration, Shipping and Logistics Integration, Product Catalog Management, User Account Management, Content Management System (CMS) Integration, Testing , Deployment Plan, Search Engine Optimization (SEO), Marketing and Promotion
                  </p> */}
                  <h6 className='fw-bolder py-2'>People involved</h6>
                  {/* <p>Project Manager, E-Commerce Developer, UX/UI Designer, SEO Specialist, Marketing Specialist</p> */}
                  <p>
                  roject Manager, UX Designer, UI Designer
                  </p>
                  
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between">
          <div className="col-lg-12">
          <div className="bt text-center">
              <button>MLXSOFT</button>
              <h2>Technology Stack</h2>
             </div>
          </div>
         </div>

         <div className="container-fluid px-3 py-5">
      <div className="what_we_do">
      <h3>How It Works</h3>
        <div className="row">
          <div className="col-lg-6 col-sm-6 " >
            <div className="left_side">
              <div className="icons">
                <p><GiMagicPortal /></p>
                <h4>Agile <br /> Approach</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 pb-5" >
            <div className="left_side">
              <div className="icons">
                <p>< FiBox  /></p>
                <h4>Product <br />Mindset</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 pb-3" >
            <div className="left_side">
              <div className="icons">
                <p>< BsTransparency /> </p>
                <h4>Full <br />Transparency </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="left_side">
              <div className="icons">
               <p><TbExplicitOff /> </p>
                   <h4>Deep Tech <br />Expertise </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-6 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p><GiSatelliteCommunication /></p>
                <h4>Smooth <br />Communication</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< BsDatabaseSlash  /></p>
                <h4> Data and <br />IP Protection </h4>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </div>

 <div className="faqs_section">
 <div className="container-fluid mx-x">
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" >
          <div className="bt text-center">
              <button>FAQS</button>
              <h2>Have A Project In Mind? <br />Let's Get To Work</h2>
             </div>
          </div>
         </div>
         </div>
 </div>

 <div className="accrodion-section">
 <div className="container">
   <div className="row">
    <div className="col-lg-12">
    <div class="accordion accordion-flush" id="accordionFlushExample" >
  <div class="accordion-item" >
    <h2 class="accordion-header" id="flush-headingOne" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" >
        
        <span style={{fontSize:"20px"}}> What is our team size?</span>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have 20 experienced specialists in the following fields Design, Discovery, Product Development, Back-end & Front-end Development, iOS & Android Development, and QA.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <span style={{fontSize:"20px"}}> For how long are we in market?</span>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have 20 experienced specialists in the following fields Design, Discovery, Product Development, Back-end & Front-end Development, iOS & Android Development, and QA.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <span>Do we provide some kind of  after relase support?</span>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">At Marvellex, we believe that the relationship with our clients doesn't end after we release their software or website. That's why we offer comprehensive after-release support to ensure that our clients can continue to get the most out of their investment.</div>
    </div>
  </div>
</div>
</div>
       </div>
    </div>
 </div>
   {/* </div>
 </div> */}
   
  <div className="unique_bisiness mb-5">
         <div className="container-fluid">
         <div className="get_business">
            <div className="row">
              <div className="col-lg-10">
                  <div className="texts"><h1 style={{fontSize:"45px"}}>Get Help for your unique business</h1></div>
              </div>
              <div className="col-lg-2">
                  <div className="texts">
                    <button>Let's Tail</button></div>
              </div>
            </div>
         </div>
         </div>
  </div>
  </>
    
  )
}

export default Services
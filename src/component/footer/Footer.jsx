import React from 'react'
import "./Footer.css"

import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>

    <div className="footer_map">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              <h2>Find Us</h2>
              <div className="map mb-3">
              <iframe style={{width:"100%", height:"50vh"}}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53165.895008506865!2d73.12548071797151!3d33.60871787138824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709412763806!5m2!1sen!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
    </div>
     <div className="container-fluid">
     <div className="footer">
        <div className="row">
            <div className="col-lg-4 text-white">
               <div className="first_texts_sec ms-4">
               <div className='footer_logo'>
               <img src="https://mlxsoft.com/_next/static/media/logo.8f665d75.svg" alt="logo" className='img-fluid' />
                </div>
               
               <div className="footer_text">
               <p>
                Our team of experts is dedicated to helping clients leverage technology to achieve their goals and stay ahead in today's fast-paced digital world.
                </p>
               </div>
               <div className="footer_social">
                  <span className='text-white'>< MdOutlineFacebook /></span>
                  <span  className='text-white'>< IoLogoInstagram /></span>
                  <span  className='text-white'>< FaTwitter /></span>
                 <Link href=" https://www.linkedin.com/in/sana-ullah-9a4b7a261/">
                 <span  className='text-white'>
                    < TiSocialLinkedin />
                   
                    </span>
                 </Link>
               </div>
               </div>
            </div>
            <div className="col-lg-2 text-white col-md-6">
                <div className="compny">
                    <h2>COMPANY</h2>
                    <ul>
                      <li>
                        <Link to ="/">Home</Link>
                      </li>
                      <li>
                      <a href="/#">Work</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                      <a href="/#">Company</a>
                      </li>
                      <li>
                        <a href="#">Carrer</a>
                      </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 text-white col-md-6">
            <div className="compny">
                    <h2>OTHERS</h2>
                    <ul>
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                      <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                      <a href="/#">Cookies Policy</a>
                      </li>
                    
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 text-white">
                <div className="contact_us pe-4">
                    <h2>CONTACT US</h2>
                    <div className="footer_icons d-flex">
                        <a href='#'><CiLocationOn /></a>
                        <p>Office # 234-235, 2ND FLoor Luxus Mall, Gulberg Greens, Islamabad, Pakistan</p>
                    </div>
                    <div className="footer_icons d-flex align-items-center">
                        <p className='pnoic ps-4'><IoCallOutline /></p>
                        <p className='numb ps-3'>(0301) 530-1034</p>
                    </div>
                    <div className="footer_icons d-flex">
                        <p className='pe-3 pnoic ps-4'><MdOutlineMailOutline  /></p>
                        <p className='ps-2'>info@mlxsoft.com</p>
                    </div>
                </div>
            </div>
       
        </div>

        <div className="row">
            <div className="col-lg-12 text-center ">
               <div className="copy-right">
               <p className='text-white'>©2024 design by sana ullah </p>
                </div>
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Footer
import React,{useEffect} from 'react'
import "./Carrers.css"
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { PiOfficeChair } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { TbTowerOff } from "react-icons/tb";
import { CiMedicalCase } from "react-icons/ci";
import { FcSalesPerformance } from "react-icons/fc";
import { SiReaddotcv } from "react-icons/si";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaPeoplePulling } from "react-icons/fa6";
import "aos/dist/aos.css"
import AOS from 'aos';
const Carrers = () => {
    useEffect(() =>{
        AOS.init({duration:1000});
      },[])
  return (
    <>
     <div className='carrers'>
      <div className='container'>
        <div className='row '>
            <div className='col-lg-12 justify-content-center' >
               <div className='carrers text-center' data-aos="fade-right" data-aos-duration="3000">
                 <h1>Careers</h1>
                <p>We are hiring passionate people to join us on our mission.</p>
               </div>
                <div className="right_section text-center" data-aos="fade-left" data-aos-duration="3000">
                <button>MLXSOFT</button>
                <h2 className='text-center'>MLXSOFT
                    Join Our World-Class Team <br />
                    Of Creators & Dreamers
                </h2>
                <p>
                Our philosophy is simple — hire a team of diverse, passionate people  <br />and foster a culture that empowers you to do your best work.</p>
                </div>
             
            </div>

            {/* <div className="col-lg-8 justify-content-center">
            <div className='now text-center'>
                 <h2 className='text-center'>MLXSOFT
                    Join Our World-Class Team <br />
                    Of Creators & Dreamers
                </h2>
                <p>

                Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                </p>
                                    
              
               </div>
            </div> */}
        </div>

       
       </div>

       <div className="container-fluid px-5">
         <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
                <div className="next-js" data-aos="fade-right" data-aos-duration="3000">
                    <h4 className=''>NEXT JS</h4>
                </div>
                <div className="apply">
                <button data-aos="zoom-in" >Apply</button>
                </div>
            </div>
            <div className="col-lg-12 " data-aos="fade-right" data-aos-duration="3000">
                <p>
                Web Developer with expertise in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js to join our dynamic team.
                </p>
            </div>
            <div className="col-lg-12">
            <div className="btnss">
            <button className='me-3'data-aos="zoom-in"  >
                 <span>< CiLocationOn /></span>One Site</button>
            <button data-aos="zoom-in" ><span><IoTimeOutline /></span>Full Time</button>
            </div>
            </div>
         </div>
       </div>

     
       </div>

       
           <div className="container-fluid  px-2">
           <div className="benefits_section">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Perks & Benefits</h1>
                </div>

                    <div className="col-lg-6 col-md-6 ">
                        <div className="crd_second">
                            <div className="icons">
                                <div className="one_icon">
                                <p><PiOfficeChair /></p>
                                </div>
                                <h2>Large <br />Beautiful Office</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="crd_second">
                    <div className="icons">
                                <div className="one_icon">
                                <p><IoIosPeople  /></p>
                                </div>
                                <h2>Great  <br /> Co-Workers</h2>
                            </div></div>
                    </div>
               
            </div>

            <div className="row py-lg-5 py-0">
            <div className="col-lg-6 col-md-6">
                        <div className="crd_second">
                            <div className="icons">
                                <div className="one_icon">
                                <p><MdOutlineEventNote /></p>
                                </div>
                                <h2>Events & <br />Celebrations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="crd_second">
                    <div className="icons">
                                <div className="one_icon">
                                <p><TbTowerOff  /></p>
                                </div>
                                <h2>Yearly <br />Picnics</h2>
                            </div></div>
                    </div>
            </div>
            <div className="row py-5">
            <div className="col-lg-6 col-md-6">
                        <div className="crd_second">
                            <div className="icons">
                                <div className="one_icon">
                                <p><CiMedicalCase  /></p>
                                </div>
                                <h2>Medical  <br /> Insurance</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="crd_second">
                    <div className="icons">
                                <div className="one_icon">
                                <p><FcSalesPerformance  /></p>
                                </div>
                                <h2>Performance <br /> Award</h2>
                            </div></div>
                    </div>
            </div>
           </div>
       </div>
     <div className="conatiner-fluid px-2">
        <div className="cv_section">
            <div className="row">
                <div className="col-lg-3 col-sm-6 me-5" data-aos="fade-right" data-aos-duration="3000">
                    <div className="cv_first">
                        <div className="icon">
                            <p><SiReaddotcv /></p>
                        </div>
                        <div className="texts">
                            <h5>CV Submission</h5>
                            <p>Submit your CV or resume through our online portal if you meet our requirements</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 ps-5"  data-aos="fade-right" data-aos-duration="3000">
                    <div className="cv_first">
                        <div className="icon">
                            <p><BsTelephoneOutbound /></p>
                        </div>
                        <div className="texts">
                            <h5>Phone Screening</h5>
                            <p>After looking at your CV you will be invited for a telephone interview at a time of your choosing.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6 ps-5 pt-lg-5 pt-0" data-aos="fade-left" data-aos-duration="3000">
                    <div className="cv_first">
                        <div className="icon right_section">
                        <button>MLXSOFT</button>
                        </div>
                        <div className="texts">
                            <h6>Learn Our <br />Recuriment Process</h6>
                            <p>
                            Are you looking for a job? Do you have any questions? Our HR department would love to talk with you about recent openings and other potential relationships.
                            .</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6 me-5"  data-aos="fade-right" data-aos-duration="3000">
                    <div className="cv_first">
                        <div className="icon">
                            <p><SiReaddotcv /></p>
                        </div>
                        <div className="texts">
                            <h5>CV Submission</h5>
                            <p>Submit your CV or resume through our online portal if you meet our requirements</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6  col-md-6 ps-5"  data-aos="fade-right" data-aos-duration="3000">
                    <div className="cv_first">
                        <div className="icon">
                            <p><FaPeoplePulling /></p>
                        </div>
                        <div className="texts">
                            <h5>Phone Screening</h5>
                            <p>After looking at your CV you will be invited for a telephone interview at a time of your choosing.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-5 col-sm-6 ps-5">
                    <div className="cv_first">
                        <div className="icon right_section">
                        <button>MLXSOFT</button>
                        </div>
                        <div className="texts">
                            <h6>Learn Our <br />Recuriment Process</h6>
                            <p>
                            Are you looking for a job? Do you have any questions? Our HR department would love to talk with you about recent openings and other potential relationships.
                            .</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
     </div>

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

export default Carrers

import React, { useEffect } from 'react'
import "./Company.css"
import comp from "../../images/company.png"
import b from "../../images/b (1).png"
import b1 from "../../images/b (2).png"
import { MdCelebration } from "react-icons/md";
import { BiSolidHandRight } from "react-icons/bi";
import { IoMdCheckboxOutline } from "react-icons/io";
// icons react
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
import { BsHeart } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiOutlineLike } from "react-icons/ai";
import { PiGlobeStand } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { MdGroupOff } from "react-icons/md";
import { GrThreeDEffects } from "react-icons/gr";
import { SiConsul } from "react-icons/si";
import "aos/dist/aos.css"
import AOS from 'aos'
import sh from "../../images/shiekh.jpg"
import sh1 from "../../images/Ameer.acfee3f3.jpg"
import sh2 from "../../images/Raza.a457808e.jpg"
const Company = () => {
    useEffect(() =>{
      AOS.init({duration:1000});
    })
  return (
    <>
     <div className="company_section">
      <div className="container-fluid px-4 ">
         <div className="row">
           <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right"  data-aos-duration="3000">
            <div className="company_left pe-5">
               <h1>
                 MLXSOFT as an IT  Service Provider
               </h1>
               <p>
               Being an IT services provider, MLXSOFT is committed to provide our customers the best possible technological solutions. Our team of professionals has many years of industry experience, and they have the expertise and abilities to assist you in using technology to reach your business objectives Let's Talk

               </p>
               <div className="texts">
                    <button>Let's Taik</button>
                   </div>
            </div>
           </div>
           <div className="col-lg-5 ps-5">
            <div className="company_right_img" data-aos="fade-left"  data-aos-duration="3000">
               <div className="img">
               <img src={comp} alt="company" className='img-fluid' />
               </div>

               {/* try start */}
               <div className="sec_top ">
                        <div className="div d-flex">
                        <div className="icon-1"><HiOutlineBuildingStorefront /></div>
                        <div className="sec_text">
                        <h4>10+</h4>
                        <p>Years of experience</p>
                        </div>
                        </div>
                        <div className="div d-flex">
                        <div className="icon-1"><AiOutlineLike /></div>
                        <div className="sec_text">
                        <h4>85+</h4>
                        <p>Trusted Partners</p>
                        </div>
                        </div>
                    </div>
               {/* try to exit  */}
            </div>
           </div>
         </div>
      </div>
     </div>

     
     <div className="container-fluid">
        <div className="audience_section">
          <div className="row">
            <div className="col-lg-5 me-5" data-aos="fade-right"  data-aos-duration="3000">
              <div className="aud_left">
                 <div className="aud_left_first">
                    <img src={b} alt="img" className='img-fluid'/>
                 <div className="aud_left_second">
                 <img src={b1} alt="img" className='img-fluid'/>
                 </div>
                 </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left"  data-aos-duration="3000">
              <div className="right_section ">
                  <button>MLXSOFT</button>
                  <h1 className='p'>Best Talent, Competitive Cost, <br /> Incredible IT Service
                  </h1>
                  <p className='p'>
                  At Marvellex, we take great pride in providing our clients with the top personnel, affordable prices, and outstanding IT support. Our team of highly qualified experts is committed to provide superior solutions that support businesses in achieving their objectives. Developing innovative software solutions with a forward-thinking mindset, a deep understanding of user needs, and a mastery of cutting-edge technologies. In today's rapidly evolving digital landscape, businesses and organizations we must keep pace with the latest advancements to remain competitive and deliver exceptional value to our customers.
                  </p>
                
              </div>
              <div className="rightt ">
                    <div className="right_icon d-flex align-items-center ">
                      <p className='me-4'><IoMdCheckboxOutline/></p>
                      <h6>Ideal Talent</h6>
                    </div>
                    <div className="right_icon d-flex align-items-center">
                      <p className='me-4'><IoMdCheckboxOutline /></p>
                      <h6>Affordable Prices</h6>
                    </div>
                    <div className="right_icon d-flex align-items-center">
                      <p className='me-4'><IoMdCheckboxOutline /></p>
                      <h6>Incredible IT Service</h6>
                    </div>
                  </div>
            </div>
          
          </div>

      
        </div>
       </div>

       {/* marvellex value  */}
       <div className="container-fluid px-3">
      <div className="what_we_do">
      <h3>What We Do </h3>
        <div className="row">
          <div className="col-lg-4 col-sm-6 " >
            <div className="left_side">
              <div className="icons">
                <p><PiGlobeStand /></p>
                <h4>Quality</h4>
              </div>
              <p className='text-white'>Always target to achieve <br /> the highest possible quality.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6"  >
            <div className="left_side">
              <div className="icons">
                <p>< FaRegHandshake  /></p>
                <h4>Honesty</h4>
              </div>
              <p className='text-white'>Build honest and transparent <br /> relationships through honest <br /> communication.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< MdGroupOff /> </p>
                <h4>Team Work </h4>
              </div>
              <p className='text-white'>Create an inspiring work <br />environment where professionals <br /> create great products.</p>
            </div>
          </div>
          {/* <div className="col-lg-4 col-sm-6" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="left_side">
              <div className="icons">
               <p><SiBackstage /> </p>
                   <h4>BackEnd <br />Developement  </h4>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-4 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p><GrThreeDEffects /></p>
                <h4>Efficiency</h4>
              </div>
              <p className='text-white'>Deliver on time, with more than <br /> expected results</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< SiConsul  /></p>
                <h4>Consultancy </h4>
              </div>
              <p className='text-white'>Helping you all the way through <br />your product success journey with <br /> expert opinions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" >
            <div className="left_side">
              <div className="icons">
                <p>< FaShoppingCart /> </p>
                <h4>Communication</h4>
              </div>
              <p className='text-white'>Active communication, with less <br />than 1 hour response time 24/7</p>
            </div>
          </div>
      
        </div>
      </div>
    </div>


    <div className="container-fluid mx-x" style={{padding:"50px 0"}}>
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" >
          <div className="bt text-center">
              <button>MLSOFT</button>
              <h2 style={{lineHeight:"1.4"}}>The Marvellex Groups<br /> Leadership Team</h2>
              
              <p style={{padding:'10px 300px'}} id="non">The Marvellex Groups Leadership Team </p>
            <div className="container-fluid">
            <p>
              Marvellex Group takes pride in the great leadership that drives our companys success. Our dedicated team of executives delivers a wealth of experience, expertise, and a shared dedication to excellence. With a visionary mindset, our leaders inspire and motivate their teams to achieve greatness. Our Marvellex Group leaders lead by example, demonstrating integrity, professionalism, and a strong work ethic. They prioritize the development and empowerment of their teams, encouraging open communication and nurturing individual talents.
              </p>
           <p className='py-4'>Marvellex Groups leaders exemplify excellence, guiding our organization to new heights of success. With their expertise, passion, and forward-thinking mindset, they inspire our teams to achieve greatness and propel us towards a bright and prosperous future.</p>
            </div>
             </div>
          </div>
         </div>
         </div>

         <div className="team_pic">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-4 co-sm-6">
                     <div className="first-pic">
                      <div className="card-body">
                        <img src={sh} alt="img" className='img-fluid' />
                        <h4>Sheikh Saoud Bin <br />Faisal Al Qassimi</h4>
                        <p>Chairman</p>
                      </div>
                     </div>
                  </div>
                  <div className="col-lg-4 co-sm-6">
                     <div className="first-pic">
                      <div className="card-body">
                        <img src={sh1} alt="img" className='img-fluid' />
                        <h4>Ameer Omer Malik</h4>
                         <p>Founder Board Member</p>
                      </div>
                     </div>
                  </div>
                  <div className="col-lg-4 co-sm-6">
                     <div className="first-pic">
                      <div className="card-body">
                        <img src={sh2} alt="img" className='img-fluid' />
                        <h4>Muhammad Raza</h4>
                        <p>CEO</p>
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
    </>

    
  )
}

export default Company

import React from 'react'
import "./Work.css"

import img from "../../images/al.png"
import pc from "../../images/pc.png"
import p from "../../images/smpc.png"
import ui from "../../images/ui.png"
import web from "../../images/web.png"

// import comp from "../../images/company.png"
// import { FaRegHeart } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiOutlineLike } from "react-icons/ai";
import "aos/dist/aos.css"
import AOS from 'aos';

const Work = () => {
  return (
    <>
     <div  className="home_banner" >
      <div className="container-fluid mx-3">
        <div className="row">
            <div className="col-lg-6 me-5 mb-5"  data-aos="fade-right" data-aos-duration="3000">
                <div className="text_section">
                    
                    <h1>  Let's build your</h1>
                    <h1>idea into an </h1>
                    <h1>amazing Product</h1>
                   
                </div>
            </div>
          
          <div className="col-lg-5" data-aos="fade-left" data-aos-duration="3000">
                <div className="img-section">
                  <img src={img} alt="right_img"  className='img-fluid'/>
                  <div className="parent">
                    <div className="top">
                        <div className="icon"><BsHeart  /></div>
                        <div className="text">
                            <h4>320+</h4>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                  </div>
                
                </div>
            </div>
          
        </div>
      </div>
      </div>

      {/* second */}
      <div className="company_section">
      <div className="container-fluid px-4 ">
         <div className="row">
           <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right"  data-aos-duration="3000">
            <div className="company_left pe-5">
            <div className="texts my-3">
                    <button>Let's Taik</button>
               </div>
               <h1>
               Web Security
               </h1>
               <p>
               Leading supplier of web security solutions MLXsoft is committed to defend internet settings from potential dangers and weaknesses. We specialize in creating cutting-edge tools and technology that assist businesses in improving their web security posture. Web applications can be shielded from typical threats including cross-site scripting (XSS), SQL injection, and cross-site request forgery (CSRF) with MLXsoft's solutions. Organizations may reduce risks, guarantee data confidentiality, and uphold the integrity of their online assets by utilizing MLXsoft's web security solutions.
               </p>
             
            </div>
           </div>
           <div className="col-lg-5 ps-5" >
            <div className="company_right_img" >
               <div className="img" data-aos="fade-left"  data-aos-duration="3000">
               <img src={pc} alt="company" className='img-fluid' />
               </div>

               {/* try start */}
               {/* <div className="sec_top ">
                        <div className="div d-flex">
                        
                        <div className="sec_text">
                      
                         <img src={p} alt="" />
                        </div>
                        </div>
                       
                    </div> */}
               {/* try to exit  */}
            </div>
           </div>
         </div>
      </div>
     </div>

     {/* custom  */}
     <div className="container-fluid mx-x ">
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" >
          <div className="bt text-center">
              <button>MLSOFT</button>
              <h2>How We Work</h2>
              
              <p >We follow an Agile process as a web development and software solution team that places an emphasis on collaboration, adaptability, and producing functional software on a regular basis. Throughout our work, we place a high priority on the following values and procedures:

</p>
           
             </div>
          </div>
         </div>
         </div>
     {/* <div className="custom">
      <div className="container-fluid mx-x">
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" data-aos="flip-left" data-aos-duration="3000">
          <div className="bt text-center">
              <button>MLXSOFT</button>
              <h2 >How We Work</h2>
              <p>We follow an Agile process as a web development and software solution team that places an emphasis on collaboration, adaptability, and producing functional software on a regular basis. Throughout our work, we place a high priority on the following values and procedures:

</p>
             </div>
          </div>
         </div>
         </div>
         </div> */}

         {/* work skills */}
         <div className="company_section">
      <div className="container-fluid px-4 ">
         <div className="row">
           <div className="col-lg-6 pe-5" data-aos="fade-right"  data-aos-duration="3000">
            <div className="company_right_img" >
               <div className="img" >
               <img src={ui} alt="company" className='img-fluid ' />
               </div>
            </div>
           </div>

           {/* text sec */}
           <div className="col-lg-5 ms-5 mb-5 mb-lg-0" >
            <div className="company_left pe-5" data-aos="fade-left"  data-aos-duration="3000">
          
               <h1>
               UI/UX Design
               </h1>
               <p>
               Our UI/UX designer will help to create digital products that not only look great but also provide an exceptional user experience. Our team of designers and developers has extensive experience in designing intuitive, user-friendly interfaces and developing products that are both aesthetically pleasing and highly functional. Whether you need a website, mobile application, or any other digital product, we can help you create a design that meets your needs and exceeds your expectations.
               </p>
               <p><b className="fw-bolder fs-5 pe-2">Service</b> Development, Software as a Service</p>
               <p><b className="fw-bolder fs-5 pe-2">Technology</b> Figma, Adobe Xd</p>
               <p><b className="fw-bolder fs-5 pe-2">Industry</b> Graphics Designing, Software development,Web design, Product design, Mobile app development</p>
               <div className="texts my-3">
                    <button>Visit Site</button>
               </div>
            </div>
           </div>
         </div>
      </div>
     </div>

     <div className="company_section">
      <div className="container-fluid px-4 ">
         <div className="row">
         <div className="col-lg-5 me-5 mb-5 mb-lg-0" data-aos="fade-right"  data-aos-duration="3000" >
            <div className="company_left pe-5" >
          
               <h2 className='fw-bolder py-3'> Front End Development </h2>
               <p>
               A website's visual attractiveness and high level of functionality are both aided by front-end developers. Your website will be optimised for speed, performance, and accessibility thanks to the expertise of our team of seasoned developers in HTML, CSS, JavaScript, and other front-end technologies. From responsive design to cross-browser compatibility, we make sure that your website is properly optimised for a remarkable user experience. We can help you develop a website that is not only aesthetically pleasing but also extremely practical and user-friendly, regardless of whether you need a new website or want to revamp an existing one.
               </p>
               <p><b className="fw-bolder fs-5 pe-2">Service</b> App Development, Software as a Service</p>
               <p><b className="fw-bolder fs-5 pe-2">Technology</b> React js, Node Js</p>
               <p><b className="fw-bolder fs-5 pe-2">Industry</b> Software Development, Web Design, Mobile App Development, Product Design, E-commerce, Fintech, Education, Healthcare</p>
               <div className="texts my-3">
                    <button>Visit Site</button>
               </div>
            </div>
           </div>
           <div className="col-lg-6 ps-5" data-aos="fade-left"  data-aos-duration="3000">
            <div className="company_right_img" >
               <div className="img" >
               <img src={web} alt="company" className='img-fluid ' />
               </div>
            </div>
           </div>

           {/* text sec */}
      
         </div>
      </div>
     </div>

     <div className="company_section">
      <div className="container-fluid px-4 ">
         <div className="row">
           <div className="col-lg-6 pe-5" data-aos="fade-right"  data-aos-duration="3000">
            <div className="company_right_img" >
               <div className="img" >
               <img src={ui} alt="company" className='img-fluid ' />
               </div>
            </div>
           </div>

           {/* text sec */}
           <div className="col-lg-5 ms-5 mb-5 mb-lg-0" >
            <div className="company_left pe-5" data-aos="fade-left"  data-aos-duration="3000">
          
               {/* <h2 className='fw-bolder fs-3'>
               Back-End Development
               </h2> */}
                <h2 className='fw-bolder py-3'>   Back-End Development </h2>
               <p>
               Strong and reliable web apps are produced with the help of our back-end developer. Our group of skilled engineers has particular expertise in a number of back-end technologies, including PHP, Python, Ruby on Rails, and others. We make sure that your web application is optimised for speed, safety, and scalability, and we collaborate directly with you to make sure that it satisfies your unique goals and demands. We have the know-how to build a back-end that satisfies your business objectives and provides an outstanding user experience, from database architecture through API development and integration. We can assist you with developing a dependable, effective, and scalable back-end, regardless of whether you require a new web application or wish to improve an already-existing one.
               </p>
               <p><b className="fw-bolder fs-5 pe-2">Service</b> Development, Software as a Service</p>
               <p><b className="fw-bolder fs-5 pe-2">Technology</b> react native, Node Js</p>
               <p><b className="fw-bolder fs-5 pe-2">Industry</b> Software Development, Web Development, E-commerce, Gaming, Fintech, Education, Healthcare, Social Media</p>
               <div className="texts my-3">
                    <button>Visit Site</button>
               </div>
            </div>
           </div>
         </div>
      </div>
     </div>

     {/* last */}
     
 <div className="faqs_section">
 <div className="container-fluid mx-x">
         <div className="row d-flex justify-content-between">
          <div className="col-lg-12" data-aos="flip-left" data-aos-duration="3000">
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

         {/*  */}
    </>
  )
}

export default Work

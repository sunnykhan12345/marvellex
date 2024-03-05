import React, { useEffect } from 'react'
import "./Contact.css"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { useFormik } from 'formik';
import { FormSchema } from './FormSchema';
import "aos/dist/aos.css"
import Aos from 'aos';


const Contact = () => {
   useEffect(() =>{
      Aos.init({duration:1000});
    },[])

   const initalValues = {
      name : "",
      email : "",
      phoneNo:"",
      address : ""
   }
   const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
         initialValues:initalValues,
         validationSchema:FormSchema,
         onSubmit:(values) =>{
            console.log(values)
            alert('Form submitted successfully!');
         }
   })
  return (
    <>
      <div className='conatct'>
      <div className='container'>
        <div className='row '>
            <div className='col-lg-12 justify-content-center'>
               <div className='contact-us text-center' data-aos="fade-right"  data-aos-duration="3000">
                 <h1>Contact Us</h1>
                <p>Get in touch with us by completing the below form or call us now</p>
               </div>

               <div className='let_get text-center' data-aos="fade-left" data-aos-duration="3000">
                 <h2>Let Get In Touch</h2>
                <p>Get the most of reduction in your teams operating costs for the whole product which creates
                     <br />  amazing UI/UX experiences.
                </p>
               </div>
            </div>
        </div>

       
       </div>

    <div className='card_section'>
      <div className='container-fluid px-4'>
       <div className='row'>
        
            <div className='col-lg-3 col-sm-6 mb-3' >
            <div className="card mb-3" >
                    <div className="card-body">
                        <div className='icon'>
                           <p> <IoCallOutline   /></p>
                        </div>
                        <h5>Call Us / WhatsApp</h5>
                       <div className='btnn'>
                       <a href='#' className='first'>+913085342445</a>
                       <a href='#'>+913085342445</a>
                       </div>
                    </div>
           </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-3' >
            <div className="card mb-3" >
                    <div className="card-body">
                        <div className='icon'>
                           <p> <MdOutlineEmail   /></p>
                        </div>
                        <h5>Email Us</h5>
                       <div  className='email text-center'>
                        <span>info@mlxsoft.com</span>
                       </div>
                       
                    </div>
           </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-3'>
            <div className="card mb-3" >
                    <div className="card-body">
                        <div className='icon'>
                           <p> <IoLocationOutline   /></p>
                        </div>
                        <h5>Address</h5>
                       <div className='address'>
                       <p >
                       Office # 234-235 2nd Floor Luxus Mall Gulberg 
                        </p>
                       </div>
                        
                    </div>
           </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
            <div className="card mb-3">
                    <div className="card-body">
                        <div className='icon'>
                           <p> < RiGlobalLine    /></p>
                        </div>
                        <h5>Follow Us</h5>
                      <div className='social'>
                      <span ><MdOutlineFacebook /></span>
                       <span><IoLogoInstagram /></span>
                       <span><FaTwitter /></span>
                       <span><TiSocialLinkedin  /></span>
                      </div>
                    </div>
           </div>
            </div>
      
        </div>
       </div>
       </div>
      </div>

      <div className='container-fluid'>
        {/* <div className='container'> */}
        <div className='contact_form'>
    <div className='row justify-content-center'>
        <div className='col-lg-12'>
            <div className='contact_text text-center'>
                <h1>If you have any project or <br /> need help. Contact Us</h1>
            </div>
        </div>
    </div>

    <div className='form_control'>
       <form onSubmit={handleSubmit}>
      <div className='row' >
         <div className='col-lg-5'  >
         <div className="my-3">
            <input type="text" className="form-control text-white" placeholder='Name' name='name'
             onBlur={handleBlur} value={values.name} onChange={handleChange} />
             {errors.name && touched.name ? (<span className='errors'>{errors.name}</span>) : null}
           
         </div>
         </div>
        <div className='col-lg-5'>
        <div className="my-3">
            <input type="email" placeholder='Email' className="form-control"  name='email'
             onBlur={handleBlur} value={values.email} onChange={handleChange}/>
          {errors.email && touched.email ? (<span className='errors'>{errors.email}</span>) : null}
           
         </div>
        </div>
        <div className='col-lg-5'>
        <div className="my-3">
            <input type="text" placeholder='Phone' className="form-control"  name='phoneNo'
            onBlur={handleBlur} value={values.phoneNo} onChange={handleChange}/>
           {errors.phoneNo && touched.phoneNo ? (<span className='errors'>{errors.phoneNo}</span>) : null}
         </div>
        </div>
        <div className='col-lg-5'>
        <div className="my-3">
            <input type="text" placeholder='Address' className="form-control" name='address'
           onBlur={handleBlur} value={values.address} onChange={handleChange}/>
           {errors.address && touched.address ? (<span className='errors'>{errors.address}</span>) : null}
      

   

         </div>
        </div>
        <div className='col-lg-10'>
        <div className="my-3">
          <div className='text-area'>
          <input type="email" placeholder='Enter Message' className="form-control" />
          
          </div>
           
         </div>
        </div>

        <div className='btn'>
         <button  type="submit" value="submit">Send Message</button>
        </div>
      </div>
      </form>
    

   
    </div>

    </div>
{/* </div> */}
        </div>

      {/* <div className='container-fluid px-4'>
        <div className='contact_form'>
        <div className='row'>
            <div className='col-lg-12 '>
               <div className='contact_text'>
               <h1>If you have any project or
                      need help. Contact Us
                  </h1>
               </div>
            </div>
         </div>
        </div>
      </div> */}

    </>
  )
}

export default Contact

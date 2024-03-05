import React, { useEffect } from 'react'
import "./Home_Banner.css"
import img from "../../images/rightimg.png"
// import { FaRegHeart } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiOutlineLike } from "react-icons/ai";
import "aos/dist/aos.css"
import AOS from 'aos';

 const Home_Banner = () => {
  useEffect(() =>{
    AOS.init({duration:1000});
  },[])
  return (
    <>
      <div  className="home_banner">
      <div className="container-fluid mx-3">
        <div className="row">
            <div className="col-lg-6 me-5 mb-5"  data-aos="fade-right" data-aos-duration="3000">
                <div className="text_section">
                    <button data-aos="zoom-out">WELCOME TO MLX SOFT</button>
                    {/* <h1>  Streamline Your </h1>
                    <h1>Business with Expert </h1>
                    <h1>IT Services</h1> */}
                    <h1>
                      Streamline Your <br />
                      Business with Expert <br/>
                      IT Services
                    </h1>
                </div>
            </div>
          
          <div className="col-lg-5" >
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
                  <div className="second_parent">
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
                  </div>
                </div>
            </div>
          
        </div>
      </div>
      </div>
    </>
  )
}


export default Home_Banner

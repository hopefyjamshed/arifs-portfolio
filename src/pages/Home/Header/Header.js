import React, { useEffect } from 'react';
import Navbar from '../../../Shares/Navbar/Navbar';
import './Header.css'
import bg from '../../../assets/backgroundimg.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='relative back min-h-screen'>
            
          
            <Navbar/>
          
           
<div className="hero min-h-screen">

  <div className="hero-overlay bg-opacity-0"></div> 
 <div className="hero-content textClass text-center  lg:mr-[450px]  lg:text-black">
    <div className="topmargine">
        
        <h3 className='text-2xl font-light text-left lg:-ml-[100px] lg:text-4xl' data-aos='fade-down-left' data-aos-delay='1000' data-aos-duration="3000">
            H E L L O</h3>
      <h1 className="mb-5 text-3xl lg:text-6xl font-bold" data-aos='fade-right' data-aos-duration="2000">I Am Arif Hossain</h1>
      <p className="mb-5 text-xl lg:text-2xl font-semibold" data-aos="fade-up" data-aos-duration="2000">Professional Graphic Designer.</p>
      <div className='line' data-aos-easing="ease-in-sine" data-aos="fade-up"></div>
     
   
  </div>
 </div>
</div>

        </div>
    );
}

export default Header;

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
             {/* <Navbar/>
            <div className='max-w-[1240px] mx-auto text-white lg:ml-[100px] lg:mt-[200px]'>
                <h3 className='text-3xl font-light uppercase gap-1'>Hello</h3>
                <h1 className='text-5xl font-bold'>I Am Arif Hosain</h1>
                <p className='ml-[20px] text-xl'>Professional Graphic Designer</p>
            </div> */}
            <Navbar/>
           
<div className="hero min-h-screen" style={{backgroundImage: `url()`}}>

  <div className="hero-overlay bg-opacity-0"></div> 
 <div className="hero-content textClass text-center  lg:mr-[450px]  lg:text-black">
    <div className="">
        
        <h3 className='text-2xl font-light text-left lg:-ml-[100px] lg:text-3xl' data-aos='fade-down-left' data-aos-delay='1000' data-aos-duration="3000">
            H E L L O</h3>
      <h1 className="mb-5 text-3xl lg:text-5xl font-bold" data-aos='fade-right' data-aos-duration="2000">I Am Arif Hossain</h1>
      <p className="mb-5 text-xl font-semibold" data-aos="fade-up" data-aos-duration="2000">Professional Graphic Designer.</p>
      <div className='line' data-aos-easing="ease-in-sine" data-aos="fade-up"></div>
     
   
  </div>
 </div>
</div>

        </div>
    );
}

export default Header;

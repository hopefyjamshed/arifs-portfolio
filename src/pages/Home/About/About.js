import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from "../../../assets/aboutmeimg.jpg"
import './About.css'
import authorimg from '../../../assets/backgroundimg-removebg-preview.png'


const About = () => {

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='aboutback min-h-screen'>
           

           <div className="hero min-h-screen bg-black lg:bg-transparent">
  <div className="hero-content lg:hero-content-none flex-col lg:flex-row">
    <div className=' w-full lg:border lg:h-[500px]' data-aos='fade-right'>
    <img src={authorimg} className="h-full w-full" data-aos='fade-up' data-aos-delay='100' data-aos-duration='1000'/>
    </div>
    <div className='' data-aos='fade-left' data-aos-duration='1000'>
        <h3 className='text-white'>My Name Is Arif Hossain</h3>
      <h1 className="text-3xl lg:text-5xl font-bold text-white">I'm a Proffesional Graphics Designer</h1>
      <p className="py-6 text-white">Welcome to my creative world, where pixels meet passion and design goes beyond aesthetics. I'm Arif Hossain, a dedicated graphics designer with a relentless drive to transform ideas into visually stunning realities. My journey in the world of design began with a simple fascination for colors and shapes, and it has evolved into a lifelong commitment to creating compelling visual experiences.</p>
    </div>
  </div>
</div>
            
        </div>
    );
}

export default About;

import React from 'react';
import Navbar from '../../../Shares/Navbar/Navbar';
import './Header.css'
import bg from '../../../assets/backgroundimg.jpg'


const Header = () => {
    return (
        <div className='relative back'>
             {/* <Navbar/>
            <div className='max-w-[1240px] mx-auto text-white lg:ml-[100px] lg:mt-[200px]'>
                <h3 className='text-3xl font-light uppercase gap-1'>Hello</h3>
                <h1 className='text-5xl font-bold'>I Am Arif Hosain</h1>
                <p className='ml-[20px] text-xl'>Professional Graphic Designer</p>
            </div> */}
            <Navbar/>
<div className="hero min-h-screen" style={{backgroundImage: `url()`}}>
   
  <div className="hero-overlay bg-opacity-0"></div> 
 <div className="hero-content mb-5 md:text-center  mb-[600px] md:mb-[600px] lg:mb-[0px] text-center lg:mr-[350px]  text-black">
    <div className="">
        
        <h3 className='text-2xl font-light text-left gap-5'>
            H E L L O</h3>
      <h1 className="mb-5 text-3xl font-bold">I Am Arif Hossain</h1>
      <p className="mb-5 text-xl font-semibold">Professional Graphic Designer.</p>
      <div className='line'></div>
     
   
  </div>
 </div>
</div>

        </div>
    );
}

export default Header;

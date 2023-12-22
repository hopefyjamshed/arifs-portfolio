import React, { useEffect } from 'react';
import img from '../../../assets/services-bg.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='min-h-screen'>
           <h1 className='text-4xl text-center mb-[70px] '>MY SERVICES</h1>
            <div className='background h-[50vh]'>

            </div>
            
            <div className='max-w-[1240px] mx-auto p-5'>
               
               <div className='-mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 md:px-[20%]  lg:px-[15%]' >
 {/* services card  */}

               <div className='card rounded-none shadow-2xl mx-auto md:mx-0  w-[260px]  bg-white  ] h-[260px]' data-aos='flip-left' data-aos-duration='1000'>
                    <div className=''>
                        <img className="p-[5px] " src={img} alt="" />
                        <h1 className='text-center text-black mt-5 font-bold'>SERVICE</h1>
                    </div>
                </div>

    {/* services card  */}
               </div>
            </div>
        </div>
    );
}

export default Services;

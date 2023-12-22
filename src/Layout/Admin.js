import React, { useEffect } from 'react';
import bg from '../assets/adminBG.jpg'
import './Admin.css'
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import UploadForm from '../pages/Admin/UploadForm/UploadForm';
import UploadProjects from '../pages/Admin/Projects/UploadProjects';

const Admin = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='bg-black text-white min-h-screen'>
           <div className=' adminHeader h-[500px] flex flex-col justify-center items-center w-full'>
           
            <button >
                <Link className='button border border-white p-5 w-[250px] hover:w-[270px] hover:bg-white hover:rounded-md hover:text-black duration-500' to='/'>go back to home</Link>
            </button>
<p className='text-[30px] lg:text-[100px] font-semibold'  data-aos='fade-up' data-aos-duration='2000' data-aos-delay="1000">a world of creative work</p>

 

           </div>
          <div className='p-[50px] max-w-[1240px] mx-auto'>
          <h1 className=' text-xl lg:text-4xl font-semibold text-center mb-7'>| Control me from here |</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mx-auto'>
<UploadForm></UploadForm>
<UploadProjects></UploadProjects>
</div>
          </div>
        </div>
    );
}

export default Admin;

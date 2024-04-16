import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    // software skill data 
    const softwareSkills=[
      {
        name: 'Photoshop',
        persent: 95
      },
      {
        name: 'illustrator',
        persent: 90
      },
      {
        name: 'VistaCreate',
        persent: 40
      },
      {
        name: 'GIMP',
        persent: 30
      },
    ]
// personal skills data 
    const personalSkill=[
      {
        name: 'Time Management',
        persent: 95
      },
      {
        name: 'Color Theory',
        persent: 85
      },
      {
        name: 'Software Proficiency',
        persent: 70
      },
      {
        name: 'Client Management',
        persent: 80
      },
    ]
    return (
        <div className='min-h-screen w-full'>
           <div className=' py-[100px] lg:py-[500px] max-w-[1240px] mx-auto'>
           <h1 className='text-4xl text-center mb-[50px]'>MY SKILLS</h1>

           {/* skills  */}
           <div className='flex flex-col gap-[40px] lg:flex-row w-full p-5'>
{/* software skills  */}
            <div className='w-full lg:w-[550px]' data-aos='fade-right' data-aos-duration='2000' data-aos-delay=''>
<h1 className='text-3xl mb-12 text-left'>Software Skills</h1>
<div className='flex flex-col gap-12' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='100'>


<div>
{
  softwareSkills?.map(sk=><div>
<h1 className='text-xl font-sm mb-[7px]'>{sk.name}</h1>
<div class="w-[60%] bg-gray-200 rounded-full dark:bg-gray-700" data-aos='fade-up' data-aos-delay='' data-aos-duration='1000'> 
    <div className="bg-black text-xs font-medium text-white text-center p-0.5 leading-none mb-2 rounded-full" style={{width: `${sk.persent}%`}}> {sk.persent}%</div>
  </div>

  </div>
    
  )
}


</div>

  

</div>
            </div>

{/* personal skills  */}
            <div className='w-full lg:w-[600px] mt-[40px] lg:mt-0' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='150'>
                <h1 className='text-3xl mb-12 lg:text-right mt-[70px] lg:mt-0'>Personal skills</h1>
                
            <div className='lg:ml-[200px] ml-[10%] grid grid-cols-2 md:grid-cols-4 justify-end gap-5 items-end' data-aos='fade-up' data-aos-duration='2000' data-aos-delay='100'>

{
  personalSkill?.map(ps=><div>
    <div className=''>
            <h1 className='text-left lg:text-center text-xm font-semibold mb-5 '>{ps.name}</h1>
           <div className="radial-progress border border-gray-200" style={{ "--value": `${ps.persent}`, "--size": "6rem", "--thickness": "2px" }} role="progressbar">{ps.persent}%</div>
           </div>
  </div>)
}
            </div>
            </div>
{/* personal skills  */}
           </div>
           </div>
        </div>
    );
}

export default Skills;

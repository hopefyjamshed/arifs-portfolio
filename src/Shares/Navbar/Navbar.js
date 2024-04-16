import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from'../../assets/cooltext447860243343534.png'
import './Navbar.css'



const Navbar = () => {

  const [color,setColor]=useState(false)
  const changeColor=()=>{
    if(window.scrollY >=90){
      setColor(true)
    } else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
   
    return (
        <div className=' '>
            

            <div className= {color?"navbar stick bg-transparent mx-auto fixed z-20 duration-500 ease-in-out change" :"navbar bg-transparent  mx-auto d-sticky z-20" }>
  
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='' className='font-semibold antialiased'>About</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Skill</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Services</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Contact</Link></li>
      {/* <li><Link to='' className='font-semibold antialiased'>Experience</Link></li> */}
      </ul>
    </div>
    
   <Link to='/'> <img src={logo} className='h-[30px] md:h-[40px] mt-2 md:mt-5'></img> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='' className='font-semibold antialiased'>About</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Skill</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Services</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Contact</Link></li>
      {/* <li><Link to='' className='font-semibold antialiased'>Experience</Link></li> */}
    </ul>
 
  </div>
  <div className="navbar-end">
    <a className="btn border border-black">Download Resume</a>
  </div>
</div>


{/* new navbar  */}


{/* <navbar className={color ? 'bg-transparent dark:bg-gray-900 fixed w-full mx-auto z-20  top-0 start-0 dark:border-gray-600 duration-500 change': '"bg-transparent   dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600"'}>
  <div className="max-w-[1240px]  flex flex-wrap items-center justify-between mx-auto p-4">
  <Link><img src={logo} className='h-[40px] mt-2 md:mt-5' /></Link>
 
  <div className="items-center justify-between md:flex md:w-auto md:order-1 ">
    <ul className="lg:flex hidden gap-4 p-4 md:p-0 mt-4 sm:hidden md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li><Link to='' className='font-semibold antialiased'>Home</Link></li>
    <li><Link to='' className='font-semibold antialiased'>About</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Skill</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Work</Link></li>
     
      <li><Link to='' className='font-semibold antialiased'>Contact</Link></li>
    </ul>

   


    <details className="dropdown lg:hidden">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>


  

    
  </div>
  </div>
</navbar> */}

{/* new navbar  */}



{/* <div className= {color ? "navbar fixed bg-base-100 change" : "navbar fixed bg-base-100 mx-auto"}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  
</div> */}
{/* new navbar  */}


        </div>
    );
}

export default Navbar;



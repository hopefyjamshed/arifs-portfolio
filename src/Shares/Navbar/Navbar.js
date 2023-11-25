import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../assets/cooltext447860243343534.png'



const Navbar = () => {
   
    return (
        <div>
            

            <div className="navbar bg-transparent max-w-[1240px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='' className='font-semibold antialiased'>About</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Skill</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Work</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Experience</Link></li>
      </ul>
    </div>
   <Link to='/'> <img src={logo} className='h-[40px] mt-2 md:mt-5'></img> </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='' className='font-semibold antialiased'>About</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Skill</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Work</Link></li>
      <li><Link to='' className='font-semibold antialiased'>Experience</Link></li>
    </ul>
  </div>
  
</div>

        </div>
    );
}

export default Navbar;

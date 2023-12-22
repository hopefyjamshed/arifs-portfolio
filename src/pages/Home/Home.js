import React from 'react';
import Navbar from '../../Shares/Navbar/Navbar';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from './Services/Services';


const Home = () => {
    
    
    return (
        
           <div >
         
          <Header/>      
           <About></About>
           <Skills/>
           <Services/>
        </div>
    );
}

export default Home;

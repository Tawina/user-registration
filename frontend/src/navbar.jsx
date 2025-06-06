import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, FilePlus } from 'lucide-react';
import logoo from './assets/logoo.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[10%] border-r border-gray-300 bg-white p-4 z-50">
      <div className="flex justify-center">
        <img src={logoo} alt="Logoo" className="h-12 w-auto" />
      </div>

      <nav className="flex flex-col space-y-6 text-gray-800 text-md mt-8">
       
          <a href="/" className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
          <Home size={20} />
          <span>Home</span>
          </a>

          <a href="/service" className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
          <Briefcase size={20} />
          <span>Service</span>
          
          </a>

          <a href="/register" className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
          <FilePlus size={20} />
          <span>Register</span>
          </a>

     
          <a href="/more" className="flex items-center gap-3 hover:text-purple-600 cursor-pointer">
            <FilePlus size={20} />
            <span>More...</span> 
          </a>

  
      </nav>
    </div>
  );
};

export default Navbar;
import React, { Component } from 'react';
import logoo from '../assets/logoo.png';
import Navbar from '../components/ui/navigation/Navbar';
import Footer from '../components/ui/Footer';
import Register from '../management/Register';

const Landing = () => {

   return (
    <>
    
    
      <Navbar />
   
    <div className="ml-[20%] w-[80%] min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-md p-10 w-full flex flex-col md:flex-row items-center justify-between">
        <img
          src={logoo}
          alt="Education"
          className="w-1/2 max-w-md"
        />
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Online Registration
          </h1>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Lead More...
          </button>
        </div>
      </div>
    </div>
     <Footer />
    </>

    );
}

export default Landing;
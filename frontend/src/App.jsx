import React, { Component } from 'react';
import bg from './assets/bg.png';
// import logoo from './assets/logoo.png';

class App extends Component {
  render() {
    return (
  
      <div className="ml-[10%] w-[90vw] bg-gray-100 p-10">
      {/* <div className="flex flex-row bg-white shadow-lg rounded-md p-10 w-full md:flex-row items-center justify-between"> */}
      <div className="flex flex-row w-full justify-between ">

      <div className="w-1/2 border- p-4 border- text-center md:text-left mt-6 md:mt-0 text">
      <img
          // src="./assets/edu.svg"
          src={bg} 
          alt="Education"
          // className="w-1/2 max-w-md"
          style={{ width: '800px', height: '800px', objectFit: 'contain' }}
        />
      </div>

        
        <div className="w-1/2 p-4 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 p-12 text-center">
            Welcome to Online Registration
          </h1>
          <button className="bg-red-800 text-yellow px-4 py-2 rounded hover:bg-gray-700">
            Lead More...
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import edu from './assets/education.png'
import logoo from './assets/logoo.png'

class App extends Component {
  render() {
    return (
  
      <div className="ml-[10%] w-[90vw] bg-gray-100 p-10">
      {/* <div className="flex flex-row bg-white shadow-lg rounded-md p-10 w-full md:flex-row items-center justify-between"> */}
      <div className="flex flex-row  w-full justify-between ">

      <div className="w-1/2 bg-red-300 p-4 text-center md:text-left mt-6 md:mt-0">
      <img
          // src="./assets/edu.svg"
          src={edu} 
          alt="Education"
          className="w-1/2 max-w-md"
        />
      </div>

        
        <div className="w-1/2 bg-yellow-300 p-4 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Online Registration
          </h1>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Lead More...
            sc <br/>
            dre<br/>
            err<br/>
            r<br/>
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
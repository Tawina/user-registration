import React, { Component } from 'react';
import Landing from './landing/landing';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Register from './management/Register';

const App = () => {

  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    // </Router>
  )
}

export default App;


    
// class App extends Component {
//   render() {
//     return (
//        <div className="ml-[20%] w-[80%] min-h-screen flex items-center justify-center bg-gray-100 p-10">
//       <div className="bg-white shadow-lg rounded-md p-10 w-full flex flex-col md:flex-row items-center justify-between">
//         <img
//           src={logoo}
//           alt="Education"
//           className="w-1/2 max-w-md"
//         />
//         <div className="text-center md:text-left mt-6 md:mt-0">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             Welcome to Online Registration
//           </h1>
//           <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
//             Lead More...
//           </button>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

// export default App;
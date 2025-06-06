import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import HomePage from './pages/HomePage';
// import ServicePage from './pages/ServicePage';
// import Register from './pages/Register' ;
// import Register from './management/Register';
// import MorePage from './pages/MorePage';


// import './index.css';
import App from './App.jsx';
import Navbar from './Navbar';
import Footer from './Footer';
//TODO:: We will need to modularize this


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar/> 
    <App />

    {/* <div className='fixed bottom-0 ml-[10vw]'>  */}
      <Footer/> 
    {/* </div> */}

     <div className="ml-[10%] w-[90%] p-4">
        {/* <Routes> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/service" element={<ServicePage />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/more" element={<MorePage />} /> */}
        {/* </Routes> */}
      </div>
  </StrictMode>
)




import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/ui/navigation/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import Register from './management/Register.jsx';
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)




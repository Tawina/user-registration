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


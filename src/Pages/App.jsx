import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from  './Home.jsx';
import Login from './Login.jsx';
import Instructions from './Instructions.jsx';

function App() {
  return (
    <main>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} />
    <Route path="/instructions" element={<Instructions />} />
   <Route path="*" element={<Error />} />
    </Routes>
</main>
  );
}

export default App;

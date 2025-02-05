import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from  './Home.jsx';
import Login from './Login.jsx';
//import Instruc from './Instructions.jsx';

function App() {
  return (
    <main>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} />
    {/* <Route path="/instructions" element={<Instruc />} /> */}
   <Route path="*" element={<Error />} />
    </Routes>
</main>
  );
}

export default App;

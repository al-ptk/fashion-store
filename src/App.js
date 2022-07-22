import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

function App() {
  return (
    <BrowserRouter>
      <Normalize />
      <Routes>
        <Route path='/' element={<div>hey there</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

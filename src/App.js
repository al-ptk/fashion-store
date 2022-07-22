import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styled/theme';
import GlobalStyle from './utils/styled/GlobalStyle';

import styled from 'styled-components';

const MockHome = () => {
  return (
    <div>
      <h1 style={{ fontFamily: 'Oleo Script Swash Caps' }}>Brittania</h1>
      <p style={{ fontFamily: 'Playfair Display' }}>Featured</p>
      <p style={{ fontFamily: 'Playfair Display', fontWeight: 700 }}>
        Featured in bold
      </p>
      <p style={{ fontFamily: 'Questrial' }}>Some text</p>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MockHome />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

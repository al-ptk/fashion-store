import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styled/theme';
import GlobalStyle from './utils/styled/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Hello there!</h1>
                <p>General Kenobi!</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

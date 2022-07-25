import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styled/theme';
import GlobalStyle from './utils/styled/GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div>
                Oops... <Link to="/">go back home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

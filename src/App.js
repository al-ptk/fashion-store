import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './utils/styled/theme';
import GlobalStyle from './utils/styled/GlobalStyle';
import Home from './pages/Home';
import Catalog from './pages/Catalog/Catalog';

const Mock404 = () => (
  <div>
    Oops... <Link to="/">go back home</Link>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Mock404 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

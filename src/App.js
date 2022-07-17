import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useParams } from 'react-router-dom';
const MockProduct = () => {
  const params = useParams();
  return <div>product: {params.id}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product">
          <Route path=":id" element={<MockProduct />} />
        </Route>
        <Route path="catalog" />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

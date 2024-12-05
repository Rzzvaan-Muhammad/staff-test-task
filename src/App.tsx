import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductProvider from "./context/ProductContext"

const App = () => (
  <ProductProvider>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  </Router>
  </ProductProvider>
);

export default App;

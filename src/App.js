import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Now Navbar is inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
          <Route path="/productdetails" element={<ProductDetail />} /> {/* Cart page route */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

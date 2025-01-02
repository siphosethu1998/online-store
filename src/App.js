import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [visibility, setVisibility] = useState("hidden");

  const handleTotalPrice = (productPrice) => {
    setTotalPrice(totalPrice + productPrice);
  }

  const handleVisibility = (visible) => {
    setVisibility(visible);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products totalPrice={totalPrice} visibility={visibility} handleTotalPrice={handleTotalPrice} handleVisibility={handleVisibility} />} />
        <Route path="/about" element={<About totalPrice={totalPrice} visibility={visibility} />} />
      </Routes>
    </div>
  );
}

export default App;

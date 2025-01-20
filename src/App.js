import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import LandingPage from './LandingPage';
import About from './About';
import Products from './Products';
import Cart from './Cart';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [visibility, setVisibility] = useState("hidden");
  const [cart, setCart] = useState([]);

  const handleTotalPrice = (productPrice) => {
    setTotalPrice(totalPrice + productPrice);
  };

  const handleVisibility = (visible) => {
    setVisibility(visible);
  };

  const handleSetCart = (object) => {
    setCart(() => cart.push(object));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products totalPrice={totalPrice} visibility={visibility} handleTotalPrice={handleTotalPrice} handleVisibility={handleVisibility} />} />
        <Route path="/about" element={<About totalPrice={totalPrice} visibility={visibility} />} />
        <Route path="/cart" element={<Cart totalPrice={totalPrice} visibility={visibility}/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;

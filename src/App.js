import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';

function App() {

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;

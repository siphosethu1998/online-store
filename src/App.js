import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import LandingPage from './LandingPage';
import About from './About';
import Products from './Products';
import Cart from './Cart';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
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

import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

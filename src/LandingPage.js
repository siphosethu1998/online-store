import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [name, setName] = useState(""); 
  const [userInput, setUserInput] = useState(""); 
  const inputRef = useRef(null);

  {/* don't need this section right now 
  const handleLogin = () => {
    setName(userInput);
  }

  const handleLogout = () => {
    setName("");
    setUserInput("");
  }

  useEffect(() => {
    inputRef.current.focus();
  },[userInput])
  */}

  return (
    <div className="flex flex-col justify-center bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to TechGear</h1>
          <p className="text-xl mb-8">Discover the latest in technology and gadgets</p>
          <Link 
            to="/products" 
            className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [name, setName] = useState(""); 
  const [userInput, setUserInput] = useState(""); 
  const inputRef = useRef(null);

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

  return (
    <div className="bg-white flex gap-x-4 p-6 mt-8 mx-auto w-fit rounded-lg shadow-sm items-center">
      { name === "" ? 
      <input
        ref={inputRef}
        className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
        placeholder="Enter the your name"
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
      /> : 
      <h1 className="text-2xl font-medium">Welcome {name} </h1>
      }
      <button
        className={`px-4 py-2 ${ name === "" ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700" } text-white rounded-md`}
        onClick={ (name.length === 0) ? handleLogin : handleLogout }
      >
        { name === "" ? "Login" : "Logout" }
      </button>
    </div>
  );
}

export default Home;
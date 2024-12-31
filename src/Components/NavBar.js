import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-8 py-6 mb-8 font-medium text-gray-700 bg-white shadow-lg">
      <Link to="/" className="hover:text-blue-600 focus:text-blue-600">Home</Link>
      <Link to="/products" className="hover:text-blue-600 focus:text-blue-600">Products</Link>
      <Link to="/about" className="hover:text-blue-600 focus:text-blue-600">About</Link>
    </div>
  );
}

export default NavBar;
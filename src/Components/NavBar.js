import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center gap-x-8 py-6 font-medium bg-blue-600 text-white shadow-lg">
      <Link to="/" className="text-2xl">TechGear</Link>
      <div className="flex gap-8">
        <Link to="/about" className="hover:text-blue-100 focus:text-blue-200">About</Link>
        <Link to="/products" className="hover:text-blue-100 focus:text-blue-200"> Products </Link>
        <Link to="/products" className="flex gap-2 hover:text-blue-200 focus:text-blue-200">
          <ShoppingCartIcon className="size-6"/>
          <span>Cart</span>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login" className="hover:text-blue-600 focus:text-blue-600">Login</Link>
        <Link to="/register" className="hover:text-blue-600 focus:text-blue-600">Register</Link>
      </div>
    </div>
  );
}

export default NavBar;
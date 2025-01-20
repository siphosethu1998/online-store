import { GifIcon, GiftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-x-8 p-6 font-medium bg-blue-600 text-white shadow-lg">
      <Link to="/" className="text-2xl">TechGear</Link>
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-blue-100 focus:text-blue-100">About</Link>
        <Link to="/products" className="flex gap-2 hover:text-blue-100 focus:text-blue-100">
          <GiftIcon className="size-6"/>
          <span>Products</span>
        </Link>
        <Link to="/cart" className="relative flex gap-2 hover:text-blue-100 focus:text-blue-100">
          <ShoppingCartIcon className="size-6"/>
          <span>Cart</span>
          <span className="absolute bg-red-400 top-0 left-0 mt-3 rounded-full p-1 text-xs">0</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/login" className="hover:text-blue-100 focus:text-blue-100">Login</Link>
        <Link to="/register" className="hover:bg-cyan-600 bg-cyan-500 rounded py-2 px-4">Register</Link>
      </div>
    </div>
  );
}

export default NavBar;
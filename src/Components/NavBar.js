import { GiftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { totalPrice, cartItems } = useSelector(state => state.products);

  return (
    <div className="flex justify-between items-center gap-x-8 p-6 font-medium bg-blue-600 text-white shadow-lg">
      <Link to="/" className="flex gap-x-2 text-2xl">
        <img src="/techgear_logo.jpg" className="h-8 w-12 rounded-md"/> <span>Tech Gear</span>
      </Link>
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-cyan-300 focus:text-cyan-300">About</Link>
        <Link to="/products" className="flex gap-2 hover:text-cyan-300 focus:text-cyan-300">
          <GiftIcon className="size-6"/>
          <span>Products</span>
        </Link>
        <Link to="/cart" className="relative flex gap-2 hover:text-cyan-300 focus:text-cyan-300">
          <ShoppingCartIcon className="size-6"/>
          <span>Cart</span>
          <span 
            className={`${(totalPrice > 0) ? "" : "hidden"} absolute bg-red-400 top-0 left-0 mt-3 text-white rounded-full p-1 text-xs`}
          >
            { cartItems.length }
          </span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/login" className="hover:text-cyan-300 focus:text-cyan-300">Login</Link>
        <Link to="/register" className="border-2 border-cyan-500 hover:bg-cyan-500 rounded py-2 px-4">Register</Link>
      </div>
    </div>
  );
}

export default NavBar;
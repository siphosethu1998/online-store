import { GiftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setisLoggedIn, resetCart } from "../store/productState";

const NavBar = () => {
  const { isLoggedIn, cartItems } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setisLoggedIn(false));
    //dispatch(resetCart());
  }

  return (
    <div className="flex justify-between items-center gap-x-8 p-6 font-medium bg-blue-600 text-white shadow-lg">
      <Link to="/" className="flex gap-x-2 text-2xl">
        <img src="/techgear_logo.jpg" alt="logo" className="h-8 w-12 rounded-md"/> <span>Tech Gear</span>
      </Link>
      <div className="flex gap-6">
        <Link to="/products" className="flex gap-2 hover:text-cyan-300 focus:text-cyan-300">
          <GiftIcon className="size-6"/>
          <span>Products</span>
        </Link>
        <Link to="/cart" className="relative flex gap-2 hover:text-cyan-300 focus:text-cyan-300">
          <ShoppingCartIcon className="size-6"/>
          <span>Cart</span>
          <span 
            className={`${(cartItems.length > 0 && isLoggedIn) ? "" : "hidden"} absolute bg-red-400 top-0 left-0 mt-3 text-white rounded-full px-1 text-xs`}
          >
            { cartItems.length }
          </span>
        </Link>
        <Link to="/about" className="hover:text-cyan-300 focus:text-cyan-300">About</Link>
      </div>
      { // show the logout button when user is logged in, else show the login and register buttons
        (isLoggedIn) ?
          <button
            className="text-white hover:bg-red-600 bg-red-500 rounded py-2 px-4"
            onClick={handleLogout}
          >
            <Link to="/login">Logout</Link>
          </button> 
          :
          <div className="flex gap-4 items-center">
              <Link to="/login" className="hover:text-cyan-300 focus:text-cyan-300">Login</Link>
              <Link to="/register" className="border-2 border-cyan-500 hover:bg-cyan-500 rounded-lg py-2 px-4">Register</Link>
          </div>
      }
    </div>
  );
}

export default NavBar;
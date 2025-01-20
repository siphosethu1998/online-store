import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/outline";
import { removeFromCart } from "./store/productState";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log(totalPrice);

  return (
    <div className="flex flex-col p-8 items-center">
      <h1 className="text-4xl font-medium mb-8">Your Cart</h1>
      {/* cart items' section */}
      <div className="flex flex-col gap-4 w-11/12">
        {// showing all the products that are added to the cart, or an empty cart message to the user
          (totalPrice > 0) ?
          cartItems.map((item) => {
            return (
              // Cart item card component
              <div key={item.id} className="bg-white flex items-center justify-between p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <img 
                    src={ item.itemImage } alt="cart item png" 
                    className="h-28 w-28 rounded"
                  />
                  <div>
                    <p className="font-medium">{item.itemSelectedColor } { item.itemTitle }</p>
                    <p>R{ item.itemPrice }</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  <TrashIcon className="size-8 text-red-600" />
                </button>
              </div>
            );
          }) :
          // message that will be displayed when cart is empty
          <h6 className="text-xl mt-8 text-gray-500">Your cart is empty.</h6>
        }
      </div>
      {/* order summary card */}
      <div className={`${(totalPrice > 0) ? "": "hidden"} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
        <h2 className="font-medium text-xl">Order Summary</h2>
        <div className="flex justify-between">
          <h6>Subtotal</h6>
          <h6>R{totalPrice.toFixed(2)}</h6>
        </div>
        <button
         className="bg-blue-600 text-white rounded py-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
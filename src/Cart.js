import { useDispatch, useSelector } from "react-redux";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
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
                    className="h-28 w-28 rounded-lg"
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
          <h6 className="text-xl mt-8 text-gray-500 text-center">Your cart is empty.</h6>
        }
      </div>
      {/* shipping method card */}
      <div className={`${(totalPrice > 0) ? "": "hidden"} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
        <div className="flex justify-between">
          <h2 className="font-medium text-xl">Shipping Method</h2>
          <button
            className="flex gap-1 text-blue-600"
          >
            <InformationCircleIcon className="size-6 text-blue-600"/> Help
          </button>
        </div>
        {/* helpful shipping information */}
        <div className="flex flex-col bg-blue-50 gap-2 p-4 rounded-lg">
          <h6 className="font-medium">Shipping information:</h6>
          <h6 className="font-medium">Standard Shipping:</h6>
          <ul className="list-disc pl-10">
            <li>Delivery time: 5-7 business days</li>
            <li>Cost: R52.82</li>
          </ul>
          <h6 className="font-medium">Express Shipping:</h6>
          <ul className="list-disc pl-10">
            <li>Delivery time: 2-3 business days</li>
            <li>Cost: R183.82</li>
          </ul>
          <h6 className="font-medium">Overnight Shipping:</h6>
          <ul className="list-disc pl-10">
            <li>Delivery time: Next business day</li>
            <li>Cost: R399.82</li>
          </ul>
        </div>
        {/* types of shipping methods */}
        <section className="flex flex-col gap-2">
          <div className="flex justify-between border border-gray-200 p-3 rounded-lg">
            <div className="flex gap-4">
              <input 
                type="radio"
              />
              <h2 className="font-medium">Standard Shipping</h2>
            </div>
            <span>RAmount</span>
          </div>
          <div className="flex justify-between border border-gray-200 p-3 rounded-lg">
            <div className="flex gap-4">
              <input 
                type="radio"
              />
              <h2 className="font-medium">Express Shipping</h2>
            </div>
            <span>RAmount</span>
          </div>
          <div className="flex justify-between border border-gray-200 p-3 rounded-lg">
            <div className="flex gap-4">
              <input 
                type="radio"
              />
              <h2 className="font-medium">Overnight Shipping</h2>
            </div>
            <span>RAmount</span>
          </div>
        </section>
      </div>
      {/* order summary card */}
      <div className={`${(totalPrice > 0) ? "": "hidden"} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
        <h2 className="font-medium text-xl">Order Summary</h2>
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
          <div className="flex justify-between">
            <h6 className="text-gray-600">Subtotal</h6>
            <h6>R{totalPrice.toFixed(2)}</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-gray-600">Shipping</h6>
            <h6>R{totalPrice.toFixed(2)}</h6>
          </div>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>RAmount</span>
        </div>
        <button
         className="bg-blue-600 text-white rounded-lg py-3"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
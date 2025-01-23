import { useDispatch, useSelector } from "react-redux";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { removeFromCart } from "../store/productState";
import { useState } from "react";

// Shipping methods data
const shippingMethods = [
  { id: 'standard', name: 'Standard Shipping', price: 52.82, time: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 183.82, time: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Shipping', price: 399.82, time: 'Next business day' }
];

const Cart = () => {
  const { isLoggedIn, cartItems } = useSelector(state => state.products);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [selectedShippingCost, setSelectedShippingCost] = useState(0);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setSelectedShippingCost(event.target.value);
  }

  // calculating the total and subtotal for items in the cart
  const subTotal = cartItems.reduce((sum, item) => sum + item.itemPrice, 0);
  const total = Number(subTotal) + Number(selectedShippingCost);

  return (
    <div className="flex flex-col p-8 items-center">
      <h1 className="text-4xl font-medium mb-8">Your Cart</h1>
      {/* cart items' section showing all the products that are added to the cart, or an empty cart message to the user */}
      <div className="flex flex-col gap-4 w-11/12">
        { 
          (cartItems.length > 0 && isLoggedIn) ?
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
      <div className={`${(cartItems.length > 0 && isLoggedIn) ? "": "hidden"} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
        <div className="flex justify-between">
          <h2 className="font-medium text-xl">Shipping Method</h2>
          <button
            className="flex gap-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowShippingInfo(true)}
          >
            <InformationCircleIcon className="size-6"/> Help
          </button>
        </div>
        {/* displaying helpful shipping information when the help icon is clicked */}
        <div className={`${showShippingInfo ? "" : "hidden"} flex flex-col bg-blue-50 gap-2 p-4 rounded-lg`}>
          <h6 className="font-medium">Shipping information:</h6>
          {
            shippingMethods.map(shippingMethod => {
              return (
                <div key={shippingMethod.id}>
                  <h6 className="font-medium">{shippingMethod.name}:</h6>
                  <ul className="list-disc pl-10">
                    <li>Delivery time: {shippingMethod.time}</li>
                    <li>Cost: R{shippingMethod.price}</li>
                  </ul>
                </div>
              );
            })
          }
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3"
            onClick={() => setShowShippingInfo(false)}
          >
            Close
          </button>
        </div>
        {/* displaying 3 types of shipping methods */}
        <section className="flex flex-col gap-2">
        {
          shippingMethods.map(shippingMethod => {
            return (
              <label key={shippingMethod.id} className="flex justify-between border border-gray-200 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                <div className="flex gap-4">
                  <input 
                    type="radio"
                    id={shippingMethod.id}
                    name="shipping"
                    value={shippingMethod.price}
                    onChange={handleChange}
                  />
                  <label htmlFor="shipping" className="font-medium">{ shippingMethod.name }</label>
                </div>
                <span>R{ shippingMethod.price }</span>
              </label>
            )
          })
        }
        </section>
      </div>
      {/* order summary card and information */}
      <div className={`${(cartItems.length > 0 && isLoggedIn) ? "": "hidden"} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
        <h2 className="font-medium text-xl">Order Summary</h2>
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
          <div className="flex justify-between">
            <h6 className="text-gray-600">Subtotal</h6>
            <h6>R{subTotal.toFixed(2)}</h6>
          </div>
          <div className="flex justify-between">
            <h6 className="text-gray-600">Shipping</h6>
            <h6>R{selectedShippingCost}</h6>
          </div>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>R{total.toFixed(2)}</span>
        </div>
        <button
         className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
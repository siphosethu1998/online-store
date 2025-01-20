import CartItem from "./Components/CartItem";

const CartPage = ({totalPrice, visibility}) => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-medium mb-8">Your Cart</h1>
      <CartItem />
      {/* order summary card */}
      <div className={`${visibility} bg-white flex flex-col gap-6 p-8 mx-auto w-11/12 rounded-lg shadow-sm mt-8`}>
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

export default CartPage;
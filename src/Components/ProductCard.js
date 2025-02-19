import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { addToCart } from "../store/productState";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ title, image, description, price, colors}) => {
  const { cartItems } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id: cartItems.length+1, itemImage: image, itemTitle: title, itemPrice: price, itemSelectedColor: selectedColor }));
  };

  // background colors to change the dropdown buttons to
  const getBackgroundColor = (color) => {
    const colorMap = {
      'Black': 'bg-gray-900',
      'White': 'bg-white',
      'Silver': 'bg-gray-300',
      'Gray': 'bg-gray-500',
      'Blue': 'bg-blue-500',
      'Rose Gold': 'bg-pink-200',
      'Space Gray': 'bg-gray-700',
      'Gold': 'bg-yellow-500',
      'Pink': 'bg-pink-500',
      'Navy': 'bg-blue-900',
      'Brown': 'bg-yellow-900'
    };
    return colorMap[color] || 'bg-gray-200';
  };

  return (
    <div className="bg-white w-fit rounded-lg shadow">
      <img 
        src={image} 
        className="h-44 w-72 rounded-t-lg"
        alt="product-item"
      />
      <div className="flex flex-col gap-y-3 px-4 py-6">
        <h1 className="font-medium text-xl">{ title }</h1>
        <p className="w-64">{ description }</p>
        <div className="flex items-center justify-between">
          <p>R{price}</p>
          {/* section for the dropdown menu */}
          <div className="relative">
            <select
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className={`block appearance-none border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 ${getBackgroundColor(selectedColor)} ${selectedColor === 'White' ? 'text-gray-700' : 'text-white'}`}
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDownIcon  className="h-4 w-4 text-gray-400"/>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-x-2 py-2 px-3 text-white rounded-md"
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon  className="size-5"/>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
import ProductCard from "./ProductCard";
import TotalPrice from "./TotalPrice";

const products = [
  {
    id: 1,
    title: "Modern Desk Lamp",
    description: "LED adjustable desk lamp with wireless charging",
    price: 49.99,
    colors: ["Black", "White", "Silver"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Ergonomic Chair",
    description: "Comfortable office chair with lumbar support",
    price: 199.99,
    colors: ["Gray", "Blue", "Black"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Wireless Keyboard",
    description: "Slim wireless keyboard with backlight",
    price: 79.99,
    colors: ["White", "Rose Gold", "Space Gray"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Smart Monitor",
    description: "27-inch 4K display with built-in speakers",
    price: 299.99,
    colors: ["Black", "Silver", "White"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life",
    price: 39.99,
    colors: ["Black", "White", "Pink"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "USB-C Hub",
    description: "10-in-1 USB-C hub with HDMI and ethernet",
    price: 59.99,
    colors: ["Space Gray", "Silver", "Gold"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 7,
    title: "Laptop Stand",
    description: "Adjustable aluminum laptop stand",
    price: 29.99,
    colors: ["Silver", "Black", "Rose Gold"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 8,
    title: "Wireless Earbuds",
    description: "True wireless earbuds with noise cancellation",
    price: 129.99,
    colors: ["White", "Black", "Navy"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 9,
    title: "Desk Mat",
    description: "Large desk mat with wireless charging",
    price: 44.99,
    colors: ["Gray", "Black", "Brown"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 10,
    title: "Webcam",
    description: "1080p webcam with privacy cover",
    price: 69.99,
    colors: ["Black", "White", "Gray"],
    image: "/api/placeholder/300/200"
  }
];

const Products = ({totalPrice, visibility, handleTotalPrice, handleVisibility}) => {
  
  return (
    <div className="flex flex-col items-center p-8">
      <TotalPrice visibility={visibility} totalPrice={totalPrice} />
      <h1 className="text-4xl font-medium self-center mb-8">Your Products</h1>
      <div className="grid grid-cols-5 gap-6">
        {
          products.map((product) => {
            return <ProductCard totalPrice={totalPrice} visibility={visibility} handleTotalPrice={handleTotalPrice} handleVisibility={handleVisibility}
            key={product.id} title={product.title} description={product.description} price={product.price} colors={product.colors} 
            />
          })
        }
      </div>
    </div>
  );
}

export default Products;
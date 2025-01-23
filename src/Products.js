import { useSelector } from "react-redux";
import ProductCard from "./Components/ProductCard";

const Products = () => {
  const { username, isLoggedIn, techProducts } = useSelector(state => state.products);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className={` ${isLoggedIn ? "" : "hidden"} text-4xl text-cyan-600 font-medium mb-8`}>Welcome { username }</h1> 
      <h1 className="text-4xl font-medium self-center mb-8">Store Products</h1>
      <div className="grid grid-cols-5 gap-6">
        {
          techProducts.map((product) => {
            return <ProductCard 
              key={product.id} title={product.title} image={product.image} description={product.description} 
              price={product.price} colors={product.colors} 
            />
          })
        }
      </div>
    </div>
  );
}

export default Products;
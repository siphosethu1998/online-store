import ProductCard from "./Components/ProductCard";
import TotalPrice from "./Components/TotalPrice";

// list of 10 fictional products, images were found on the web
const products = [
  {
    id: 1,
    title: "Modern Desk Lamp",
    description: "LED adjustable desk lamp with wireless charging",
    price: 49.99,
    colors: ["Black", "White", "Silver"],
    image: "https://imgs.search.brave.com/_cPv3ZDCkkzdOIJvmhuLaCCExn_VNiap8ThEWk0T_k4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzdGluYXRpb25s/aWdodGluZy5jb20v/aW1hZ2VzL3Byb2R1/Y3RzX2R0bC81NzEv/UDE3ODU1NzEuYmd-/ZHRsLmpwZw"
  },
  {
    id: 2,
    title: "Ergonomic Chair",
    description: "Comfortable office chair with lumbar support",
    price: 199.99,
    colors: ["Gray", "Blue", "Black"],
    image: "https://imgs.search.brave.com/SiT20i23U4N8E0VhPbXa65APTKpS1U0TI2LszILMyGk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9weXhp/cy5ueW1hZy5jb20v/djEvaW1ncy81ZjAv/MWUyLzQxOWNlZTgx/Y2RjMWI0MGJmMmIx/Mzg3ZGQyMWU3Mzkw/NTctdW5uYW1lZC0y/LnJzcXVhcmUudzYw/MC5qcGc"
  },
  {
    id: 3,
    title: "Wireless Keyboard",
    description: "Slim wireless keyboard with backlight",
    price: 79.99,
    colors: ["White", "Rose Gold", "Space Gray"],
    image: "https://imgs.search.brave.com/yqFQbZwY3ftFjK7z3UZhsVcYpA3JtnuaAY0bb1Q9s98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9udXBo/eS5jb20vY2RuL3No/b3AvZmlsZXMvTWFp/bjAxXzQwMHguanBn/P3Y9MTcxMzUxNTA0/Mg"
  },
  {
    id: 4,
    title: "Smart Monitor",
    description: "27-inch 4K display with built-in speakers",
    price: 299.99,
    colors: ["Black", "Silver", "White"],
    image: "https://imgs.search.brave.com/b4R9qvujx_dJ4YnI3E3A2IzWQhwLwk3K0rp2yjO_gtE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly85dG81/dG95cy5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzUv/MjAyNS8wMS9TYW1z/dW5nLVNNYXJ0LU1v/bml0b3ItTTktT0xF/RC1DRVMtMjAyNS5q/cGc_dz0xMjAwJmg9/NjAwJmNyb3A9MQ"
  },
  {
    id: 5,
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life",
    price: 39.99,
    colors: ["Black", "White", "Pink"],
    image: "https://imgs.search.brave.com/tFoJWSrmCXu61kgG4Ve4HRF8-DO9Gz6ERV7Exva1XoE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVtb2tleS5jb20v/Y2RuL3Nob3AvZmls/ZXMvTGVtb2tleS1H/Mi13aXJlbGVzcy1t/b3VzZS13aGl0ZS12/ZXJzaW9uLmpwZz92/PTE3MjMwMjIwMzcm/d2lkdGg9MTQ0NQ"
  },
  {
    id: 6,
    title: "USB-C Hub",
    description: "10-in-1 USB-C hub with HDMI and ethernet",
    price: 59.99,
    colors: ["Space Gray", "Silver", "Gold"],
    image: "https://imgs.search.brave.com/A1hHX69GSITDd0RKoEFTAVxWxVyTEqd9t_6LnvWXJCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE1/MjAvNDM2Ni9maWxl/cy80LWluLTEtdXNi/LWMtaHViLXdpdGgt/MjUtZ2lnYWJpdC1l/dGhlcm5ldC11c2It/aHVicy1zYXRlY2hp/LTYxMjMyMy5wbmc_/dj0xNzE5ODg5OTEy"
  },
  {
    id: 7,
    title: "Laptop Stand",
    description: "Aluminum laptop stand with adjustable height and angle",
    price: 29.99,
    colors: ["Silver", "Black", "Rose Gold"],
    image: "https://imgs.search.brave.com/MRSR4J_QESa9wWYrrlXGkBRu6rHy7YOpd008t30csRg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYWJs/ZXRpbWV0ZWNoLmNv/bS9jZG4vc2hvcC9m/aWxlcy9DVC1MUzA4/LUFHXzguanBnP3Y9/MTczNTExNzkyMiZ3/aWR0aD04MDA"
  },
  {
    id: 8,
    title: "Wireless Earbuds",
    description: "True wireless earbuds with noise cancellation",
    price: 129.99,
    colors: ["White", "Black", "Navy"],
    image: "https://imgs.search.brave.com/fHElBh4Dw6Nn-iCYockpJAnJNohV66GX7J0oMBKA1C4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNzEy/NDEzOTY0LWVhcmZ1/bi1mcmVlLXByby0z/LTAwNi02NjEwMjU2/MTg0MGMwLmpwZz9j/cm9wPTAuNzUyeHc6/MS4wMHhoOzAuMTEx/eHcsMCZyZXNpemU9/OTgwOio"
  },
  {
    id: 9,
    title: "Desk Mat",
    description: "Large desk mat with wireless charging",
    price: 44.99,
    colors: ["Gray", "Black", "Brown"],
    image: "https://imgs.search.brave.com/D3F--i76duoWX8W7l_NHpbcfFahbJuOiRQkXVht6fB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90ZXJh/ZGVrLmNvbS9jZG4v/c2hvcC9maWxlcy9X/b29kZW4tQ2FtZXJh/X1AwMDIwNl9DUy1E/ZXNrLU1hdC13aXRo/LU1hZ25ldGljLVN0/cmlwX1RvcF9sYXJn/ZS5wbmc_dj0xNzIx/NjY3NTQw"
  },
  {
    id: 10,
    title: "Webcam",
    description: "1080p webcam with privacy cover and adjustable height and angle",
    price: 69.99,
    colors: ["Black", "White", "Gray"],
    image: "https://imgs.search.brave.com/-saUoyadk9qI7baa-ne5E9xJvs3st6r4oeT46hNnTfs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2th/N25UaDhzTGtEUnc1/YUtGWEc3QjMtMzIw/LTgwLmpwZw"
  }
];

const Products = ({totalPrice, visibility, handleTotalPrice, handleVisibility}) => {
  
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-medium self-center mb-8">Store Products</h1>
      <div className="grid grid-cols-5 gap-6">
        {
          products.map((product) => {
            return <ProductCard totalPrice={totalPrice} visibility={visibility} handleTotalPrice={handleTotalPrice} handleVisibility={handleVisibility}
            key={product.id} title={product.title} image={product.image} description={product.description} price={product.price} colors={product.colors} 
            />
          })
        }
      </div>
    </div>
  );
}

export default Products;
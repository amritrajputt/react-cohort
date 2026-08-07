
import { useEffect, useState } from 'react';
import './App.css'

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomproducts"
      );

      const data = await res.json();
      setProducts(data.data.data);
    };

    fetchProducts();
  }, [])

  return (
    <>
      {products.map((product) => (
        <div key={products.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
            width={150}
          />

          <h3>{product.title}</h3>

          <p>${product.price}</p>
        </div>
      ))}
    </>
  )
}

export default App

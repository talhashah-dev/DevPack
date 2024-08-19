import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
        <div className="w-full mb-5 text-center">
            <h1 className="text-4xl font-bold">
                Loading...
            </h1>
        </div>
    );
  }

  if (error) {
    return (
        <div className="w-full flex flex-col items-center gap-y-3 mb-5">
            <h1 className="text-4xl font-bold">
                Opps!
            </h1>
            <p>Check Your Connections!</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-3">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

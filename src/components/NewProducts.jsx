import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ProductDetail from "./pages/ProductDetail";


const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products.slice(0,5));
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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <span className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            New Products
          </h2>
          <Link to="/products" className="inline-block border border-indigo-600 px-8 py-2 text-center font-medium text-indigo-600">Show All Products</Link>
        </span>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
             <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-lg" key={product.id}>
              <img className="w-full h-40 object-cover rounded-md mb-6" src={product.thumbnail} alt={product.title} />
              <div className="space-y-4">
                <h2 className="text-1xl font-extrabold text-gray-900">{product.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                <div className="text-xl font-bold text-gray-800">
                  <span className="block text-sm">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">Rating: {product.rating.toFixed(1)} / 5</span>
                </div>
                {/* <div className="text-gray-600">
                  <p className="text-sm">Category: <span className="font-semibold">{product.category}</span></p>
                  <p className="text-sm">Stock: <span className="font-semibold">{product.stock}</span></p>
                </div> */}
                {/* <button className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

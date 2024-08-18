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
      console.log(response);
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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <span className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            New Products
          </h2>
          <Link to="/products" className="inline-block border border-indigo-600 px-8 py-2 text-center font-medium text-indigo-600">Show All Products</Link>
        </span>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

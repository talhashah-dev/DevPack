import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ProductDetail from "./pages/ProductDetail";

const OnSaleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productCount, setProductCount] = useState(20)
  let discount = 21;

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      let newProduct = response.data.products.slice(10,productCount)
      setProducts(newProduct);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productCount])

  const loadMoreProducts = () => {
    setProductCount(productCount + 5);
  };

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
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
        <span className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Buy now with <span className="px-2 rounded-2xl bg-red-500 text-white">%{discount}</span> Flat Discount!
          </h2>
          <Link to="/products" className="inline-block border border-indigo-600 px-8 py-2 text-center font-medium text-indigo-600">Show All Products</Link>
        </span>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-2">
          {products.map((product) => (
             <div className="w-full mx-auto p-2 bg-white hover:shadow-lg border rounded-lg cursor-pointer" key={product.id}>
              <img className="w-full h-40 object-cover rounded-md mb-6" src={product.thumbnail} alt={product.title} />
              <div className="space-y-4">
                <h2 className="text-1xl text-gray-900">{product.title}</h2>
                <div className="text-xl text-gray-800 flex justify-between items-end">
                  <span className="text-sm flex flex-col">
                    <span className="text-lg text-orange-600">${((product.price)-(product.price*discount/100)).toFixed(2)}</span>
                    <span className="text-xs">
                        <span className="text-gray-400 line-through">${product.price.toFixed(2)}</span> 
                        <span className="mx-1 px-1 rounded-2xl bg-red-500 text-white">{`-${discount}%`}</span>
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">Rating: {product.rating.toFixed(1)} / 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
            <button className="text-xl border border-indigo-500 text-indigo-500 p-36 py-2" onClick={() => loadMoreProducts()}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default OnSaleProducts;
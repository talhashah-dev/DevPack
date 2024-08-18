// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return (
    <div className="w-full mb-5 text-center">
            <h1 className="text-4xl font-bold">
                Loading...
            </h1>
        </div>
  );


  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <img className="w-full h-96 object-cover rounded-md mb-6" src={product.thumbnail} alt={product.title} />
    <div className="space-y-4">
      <h2 className="text-4xl font-extrabold text-gray-900">{product.title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
      <div className="text-xl font-bold text-gray-800">
        <span className="block">${product.price.toFixed(2)}</span>
        <span className="text-sm text-gray-500">Rating: {product.rating.toFixed(1)} / 5</span>
      </div>
      <div className="text-gray-600">
        <p className="text-sm">Category: <span className="font-semibold">{product.category}</span></p>
        <p className="text-sm">Stock: <span className="font-semibold">{product.stock}</span></p>
      </div>
      <button className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">Add to Cart</button>
    </div>
  </div>
  
  );
};

export default ProductDetails;

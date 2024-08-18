/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 font-bold mb-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            Rating: {product.rating.toFixed(1)} ({product.stock} in stock)
          </p>
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add to Cart
            </button>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
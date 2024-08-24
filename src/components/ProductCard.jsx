import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <div className="px-2 py-2">
          <h2 className="text-base mb-1">{product.title}</h2>
          <p className="text-gray-600 mb-2">
            {product.description.slice(0, 50)}..
          </p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-800 font-bold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <button className="text-indigo-500 px-1 py-0 border-white border hover:border-indigo-500 active:ring-1">
              Add to Cart
            </button>
          </div>
        </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

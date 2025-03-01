import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-3 aspect-h-4 group-hover:opacity-75">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        </Link>
        <p className="mt-1 text-lg font-semibold text-primary-600">${product.price}</p>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
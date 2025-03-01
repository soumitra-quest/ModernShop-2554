import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { featuredProducts } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = featuredProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-2xl text-primary-600">${product.price}</p>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8">
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <ul className="mt-4 space-y-2">
              <li>Category: {product.category}</li>
              <li>Material: Premium Quality</li>
              <li>Available: In Stock</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
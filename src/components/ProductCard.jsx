import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-4 group-hover:opacity-75">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-lg font-semibold text-primary-600">${product.price}</p>
        <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
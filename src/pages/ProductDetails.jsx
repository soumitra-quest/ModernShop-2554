import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { featuredProducts } from '../data/products';
import RelatedProducts from '../components/RelatedProducts';
import { FiMinus, FiPlus, FiStar } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const product = featuredProducts.find(p => p.id === parseInt(id));

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  if (!product) {
    return <div className="text-dark-100">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.category === 'clothing') {
      alert('Please select a size');
      return;
    }
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { ...product, size: selectedSize, quantity } 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            <img src={product.image} alt="" className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-dark-50">{product.name}</h1>
            <div className="flex items-center space-x-1 text-yellow-400">
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar />
              <span className="ml-2 text-dark-300">(4.0)</span>
            </div>
          </div>

          <p className="mt-4 text-3xl text-primary-500">${product.price}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-dark-100">Description</h2>
            <p className="mt-2 text-dark-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {product.category === 'clothing' && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-dark-100">Select Size</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSize === size
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-dark-700 text-dark-100 hover:border-primary-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-dark-100">Quantity</h2>
            <div className="mt-2 flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-md border border-dark-700 text-dark-100 hover:border-primary-500"
              >
                <FiMinus />
              </button>
              <span className="text-dark-100 text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-md border border-dark-700 text-dark-100 hover:border-primary-500"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-primary-600 text-white py-4 px-6 rounded-md hover:bg-primary-700 transition-colors text-lg font-semibold"
          >
            Add to Cart
          </button>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-dark-300">
            <div className="flex flex-col space-y-2">
              <span>SKU: {product.id}</span>
              <span>Category: {product.category}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span>Material: Premium Quality</span>
              <span>Available: In Stock</span>
            </div>
          </div>
        </motion.div>
      </div>

      <RelatedProducts currentProductId={product.id} category={product.category} />
    </div>
  );
};

export default ProductDetails;
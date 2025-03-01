import { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(featuredProducts.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-dark-50">Shop by Category</h1>
        <p className="mt-4 text-dark-300">Discover our collection across different categories</p>
      </motion.div>

      <div className="mt-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-dark-700 text-dark-100 hover:border-primary-500'
            } transition-colors capitalize`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark-300">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
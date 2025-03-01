import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-gray-500">Our most popular items handpicked for you</p>
        </motion.div>
        
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
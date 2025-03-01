import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';

const RelatedProducts = ({ currentProductId, category }) => {
  const relatedProducts = featuredProducts
    .filter(product => product.id !== currentProductId && product.category === category)
    .slice(0, 4);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-dark-50 mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-dark-800 rounded-lg overflow-hidden border border-dark-700"
          >
            <Link to={`/product/${product.id}`}>
              <div className="aspect-w-3 aspect-h-4 group-hover:opacity-75">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-dark-100">{product.name}</h3>
                <p className="mt-1 text-lg font-semibold text-primary-500">
                  ${product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
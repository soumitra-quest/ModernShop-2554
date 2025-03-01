import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              ShopStyle
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary-600">Shop</Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary-600">Categories</Link>
            <button className="p-2 text-gray-700 hover:text-primary-600">
              <FiShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
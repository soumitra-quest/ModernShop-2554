import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FiX, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'tween' }}
      className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50"
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mt-4">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-primary-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                      })
                    }
                    className="p-1"
                  >
                    <FiMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 }
                      })
                    }
                    className="p-1"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                }
                className="p-2 text-red-500"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {/* Implement checkout */}}
            className="w-full mt-4 bg-primary-600 text-white py-3 rounded-md hover:bg-primary-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart.length) return <p>Your cart is empty</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 rounded shadow"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover"
          />

          <div className="flex-1">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">
              Qty: {item.quantity}
            </p>
          </div>

          <p className="font-semibold">${item.price}</p>

          {/* DELETE BUTTON */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-600 hover:text-red-800 text-sm"
          >
            ✕ Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

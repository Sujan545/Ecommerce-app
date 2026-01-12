import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/axios";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, increase, decrease, remove, clearCart } = useCart();
  const { user } = useAuth();

  if (!cart.length) return <p className="p-6 text-center">Your cart is empty</p>;

  const handleCheckout = async () => {
    if (!user) return alert("Please login to checkout");

    try {
      const res = await api.post("/carts", {
        userId: user.id,
        date: new Date(),
        products: cart.map((i) => ({
          productId: i.productId,
          quantity: i.quantity,
        })),
      });
      alert("Checkout successful!");
      console.log("Cart synced:", res.data);
      clearCart(); // clear local cart after checkout
    } catch (err) {
      console.error("Checkout failed", err);
      alert("Checkout failed, try again.");
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className=" mx-auto p-6 space-y-6">
      {cart.map((item) => (
        <div
          key={item.productId}
          className="flex gap-1 group" // ✅ Add group here
        >
          <div className="flex w-full items-center gap-4 bg-white shadow p-4 rounded">
            <img
              src={item.image}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <Link to={`/product/${item.productId}`}>
                <p className="font-medium">{item.title}</p>
              </Link>
              <p className="text-gray-500">${item.price} each</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrease(item.productId)}
                className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increase(item.productId)}
                className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

         
          <button
            onClick={() => remove(item.productId)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-500 p-2"
          >
            <Trash2 />
          </button>
        </div>
      ))}


      <div className="flex max-w-297 justify-between items-center mt-4 p-4 bg-white rounded shadow">
        <p className="font-semibold text-lg">Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="px-6 py-1 border border-gray-300 text-black  hover:bg-gray-300 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import LoginModal from "../utils/LoginModal";
import { useAuth } from "../context/AuthContext";
import UserMenu from "../utils/UserMenu";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <>
      <nav className="w-full bg-white ">
        <div className="px-6 flex h-16 items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-lg font-semibold">
              ShopX
            </Link>
            <Link to="/" className="text-sm">Home</Link>
            <Link to="/products" className="text-sm">Collection</Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 relative">
            <button
              onClick={() => {
                if (!user) {
                  setIsLoginOpen(true);
                } else {
                  setMenuOpen(!menuOpen);
                }
              }}
            >
              <User size={20} />
            </button>

            {user && menuOpen && (
              <UserMenu onClose={() => setMenuOpen(false)} />
            )}

            <Link to="/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 h-4 w-4 text-[10px] flex items-center justify-center ">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

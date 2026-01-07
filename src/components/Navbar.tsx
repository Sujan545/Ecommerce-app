
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full  bg-white">
      <div className=" px-6 flex h-16  items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-lg font-semibold text-black hover:text-gray-700 transition"
          >
            ShopX
          </Link>

          <Link
            to="/"
            className="text-sm text-black hover:text-gray-700 transition"
          >
            Home
          </Link>

          <Link
            to="/collection"
            className="text-sm text-black hover:text-gray-700 transition"
          >
            Collection
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          <Link
            to="/account"
            className="text-black hover:text-gray-700 transition"
          >
            <User size={20} />
          </Link>

          <Link
            to="/cart"
            className="relative text-black hover:text-gray-700 transition"
          >
            <ShoppingCart size={20} />
            {/* Cart badge */}
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-black">
              2
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
}

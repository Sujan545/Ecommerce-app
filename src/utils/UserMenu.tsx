import { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";

export default function UserMenu({ onClose }: { onClose: () => void }) {
  const { user, logout } = useAuth();
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-3 w-48 bg-white  rounded-lg shadow-lg z-50"
    >
      <div className="px-4 py-3 border-b border-gray-300">
        <p className="text-xs text-gray-500">Signed in as</p>
        <p className="text-sm font-semibold">{user?.username}</p>
      </div>

      <ul className="py-2 text-sm">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Profile
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Orders
        </li>
        <li
          onClick={logout}
          className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

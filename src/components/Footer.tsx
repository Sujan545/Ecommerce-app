import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" w-full bg-white text-black">
            <div className="mx-auto  px-6 py-12">
                {/* TOP */}
                <div className="grid grid-cols-1 md:gap-20 gap-5 md:grid-cols-4">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-lg font-semibold text-black">ShopX</h2>
                        <p className="mt-3 text-sm leading-relaxed">
                            Premium products crafted with quality and care.
                            Your one-stop ecommerce destination.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h3 className="text-sm font-semibold text-black">Shop</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                            <li><Link to="/collection" className="hover:text-gray-700">Collection</Link></li>
                            <li><Link to="/cart" className="hover:text-gray-700">Cart</Link></li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="text-sm font-semibold text-black">Support</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link to="/contact" className="hover:text-gray-700">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-700">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-gray-700">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h3 className="text-sm font-semibold text-black">Follow us</h3>
                        <div className="mt-4 flex gap-4">
                            <a href="#" className="hover:text-gray-700">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs md:flex-row">
                    <p>© {new Date().getFullYear()} ShopX. All rights reserved.</p>
                    <p className="text-gray-700">
                        Built with React, TypeScript & Tailwind
                    </p>
                </div>

            </div>
        </footer>
    );
}

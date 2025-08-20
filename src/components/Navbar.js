import React from "react";
import {
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
   <header className="bg-black text-white text-sm">
  {/* Main Navbar */}
  <div className="flex justify-between items-center px-6 py-4">
    {/* Logo */}
    <div className="text-2xl font-bold tracking-wide">ZENNY</div>

    {/* Nav Links */}
    <nav className="hidden md:flex space-x-8 text-sm font-medium">
      <a href="#" className="hover:text-primary transition duration-200">HOME</a>
      <a href="#" className="hover:text-primary transition duration-200">SHOP</a>
      <a href="#" className="hover:text-primary transition duration-200">COLLECTION</a>
      <a href="#" className="hover:text-primary transition duration-200">BLOG</a>
      <a href="#" className="hover:text-primary transition duration-200">PAGES</a>
      <a href="#" className="hover:text-primary transition duration-200">ELEMENTORS</a>
      <a href="#" className="hover:text-primary transition duration-200">SALE</a>
    </nav>


        {/* Icons */}
        <div className="flex items-center gap-6">
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer transition hover:scale-110" />
          <UserIcon className="h-5 w-5 cursor-pointer transition hover:scale-110" />

          {/* Cart Icon with Badge */}
          <div className="relative group">
            <ShoppingBagIcon className="h-5 w-5  drop-shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full animate-pulse">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
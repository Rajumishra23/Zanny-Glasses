import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-white text-black text-sm border-t">
      {/* Top Info Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-6 text-center bg-gray-100">
        <div>
          <p className="font-semibold">Free Shipping</p>
          <p className="text-xs text-gray-600">Free Shipping for orders</p>
        </div>
        <div>
          <p className="font-semibold">Money Guarantee</p>
          <p className="text-xs text-gray-600">Within 30 days</p>
        </div>
        <div>
          <p className="font-semibold">Online Support</p>
          <p className="text-xs text-gray-600">24/7 support available</p>
        </div>
        <div>
          <p className="font-semibold">Flexible Payment</p>
          <p className="text-xs text-gray-600">Multiple Credit Cards</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 max-w-7xl mx-auto">
        {/* Brand + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ZENNY</h2>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 px-3 py-2 w-full text-sm"
            />
            <button className="bg-black text-white px-4 py-2 text-sm font-medium">
              ➤
            </button>
          </div>
         
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-semibold mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Stores Location</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Addresses</a></li>
            <li><a href="#">Best Seller</a></li>
            <li><a href="#">Manufacturers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">GOT QUESTION? CALL US 24/7</h3>
          <p className="text-gray-600 text-sm mb-2">
            CITIZEN REGIONAL OFFICE - DELHI. 810, 8th Floor Padma Tower-I Rajendra Place, New Delhi - 110008 India.
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <EnvelopeIcon className="inline h-4 w-4 mr-1" />
            contact@Zenny.com
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <PhoneIcon className="inline h-4 w-4 mr-1" />
            011-25710036-37
          </p>
          <p className="text-gray-600 text-sm">
            <MapPinIcon className="inline h-4 w-4 mr-1" />
            Working hours: Mon – Sat: 9:00 – 18:00
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t text-center py-4 text-xs text-gray-500">
        Copyright © 2025. Designed by bigdesign software technologies
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link to="/">
            <h1 className="text-3xl font-bold italic text-white">E-Learn</h1>
          </Link>
          <p className="text-sm opacity-90">
            E-Learn Industries Ltd. <br />
            Copyright © 2025 - All rights reserved.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <Twitter
                size={20}
                className="hover:text-blue-300 transition-colors"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                size={20}
                className="hover:text-red-500 transition-colors"
              />
            </a>
            <a
              href="https://bd.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={20}
                className="hover:text-blue-600 transition-colors"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-courses"
                className="hover:text-white transition-colors"
              >
                Courses
              </Link>
            </li>
    
            <li>
              <Link to="/fqa" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2 text-white">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" /> 123, Dhaka,
              Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gray-400" /> +880 1642728613
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gray-400" /> e-learn@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-gray-600 pb-2 text-white">
            Stay Updated
          </h3>
          <p className="text-sm opacity-90 mb-4">
            Subscribe to our newsletter for latest courses and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm opacity-80">
        Developed with by{" "}
        <span className="font-bold text-white">E-Learn Team</span>
      </div>
    </footer>
  );
};

export default Footer;

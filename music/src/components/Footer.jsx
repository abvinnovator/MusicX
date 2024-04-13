import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            Need Help?
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            Learn
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About LEELOOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            Make Money
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Sell Your Music
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
            Join Our Community
          </h3>
          <p>Connect with us on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-xl md:text-2xl lg:text-3xl hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl lg:text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl lg:text-3xl hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl lg:text-3xl hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
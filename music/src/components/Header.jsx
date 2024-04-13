import React, { useState,useEffect } from 'react';
import logo from './logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="bg-black text-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4"
          />
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">
            LEELOOP
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Sell Your Music
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Artists services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                SIGNUP
              </a>
            </li>
          </ul>
        </nav>
        {/*Mobile Navbar*/}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
      {isMenuOpen && (
       
        <nav className="bg-black py-4 md:hidden">
          <ul className="space-y-4 flex flex-col items-center">
          <div data-aos="fade-right">
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Sell Your Music
              </a>
            </li>
            </div>
            <div data-aos="fade-right">
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Artists services
              </a>
            </li>
            </div>
            <div data-aos="fade-right">
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Pricing
              </a>
            </li>
            </div>
            <div data-aos="fade-right">
            <li>
              <a
                href="#"
                className="text-white font-semibold hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </a>
            </li>
            </div>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                SIGNUP
              </a>
            </li>

          </ul>
        </nav>
      
      )}
    </header>
  );
};

export default Header;
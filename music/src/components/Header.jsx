import React from 'react'
import logo from './logo.png'
const Header = () => {
  return (
    <header className="bg-black text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full mr-4"
        />
        <span className="font-bold text-2xl">LEELOOP</span>
      </div>
      <nav>
        <ul>
          <li>
          <button
  class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6  rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
>
  SignUp
</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
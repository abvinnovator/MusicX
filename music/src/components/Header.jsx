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
              className="h-12 m-2 text-lg bg-gradient-to-r from-[rgba(222,0,75,1)] via-[#c8a5db] to-[rgba(0,212,255,1)] text-white font-bold py-4 px-8 rounded-3xl mt-10 hover:opacity-80 transition-opacity duration-300"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
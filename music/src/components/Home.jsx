import React from 'react';
import Logo from './form.png';

const Home = () => {
  return (
    <>
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={Logo}
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
      <div
        className="bg-black flex flex-col items-center justify-center h-screen bg-[url('https://res.cloudinary.com/dtonbpwvj/image/upload/v1712837465/back_e9mrdh.jpg')] bg-cover bg-center "
      >
        <div className="text-transparent bg-clip-text font-bold text-4xl md:text-6xl text-center">
          <span className="text-white">
            LEELOOP a best way to sell your
          </span>
          <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">
            songs worldwide and become popular fans
          </span>
        </div>
        <button className="h-12 m-2 text-lg bg-gradient-to-r from-[rgba(222,0,75,1)] via-[#c8a5db] to-[rgba(0,212,255,1)] text-white font-bold py-4 px-8 rounded-3xl mt-10 hover:opacity-80 transition-opacity duration-300">
  Upload
</button>

      </div>
    </>
  );
};

export default Home;
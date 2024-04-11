import React from 'react';
import Header from './Header';
const Home = () => {
  return (
    <>
    <Header />
      <div
        className="bg-black flex flex-col items-center justify-center h-screen bg-[url('components\back.jpg')] bg-cover bg-center "
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
import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <Header />
    <div className="bg-black flex flex-col items-center justify-center h-screen bg-[url('https://res.cloudinary.com/dtonbpwvj/image/upload/v1712837465/back_e9mrdh.jpg')] bg-cover bg-center">
  <div className="text-transparent bg-clip-text font-bold text-4xl md:text-6xl text-center">
    <span className="text-white">LEELOOP a best way to sell your</span>{' '}
    <span className="bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text">songs worldwide and become popular fans</span>
  </div>
  <button
  class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 m-12 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
>
  Upload Now
</button>

</div>  <Footer />
    </>
  );
};

export default Home;

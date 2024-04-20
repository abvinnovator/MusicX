import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './pages/MyProfile';
import MyMusic from './pages/MyMusic';
import Sidebar from './sidebar/Sidebar';
import sidebar_menu from './sidebar/sidebar_menu';
import Home from './components/Home';
import PaymentGateway from './components/PaymentGateway';
import Dashboard from './Dashboard';

function App() {
  const musicData = {
    coverImage: 'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
    musicFile: 'music_file.mp3',
    artistName: 'John Doe',
    title: 'Amazing Song',
    subtitle: 'The Best Hits',
    genre: 'Pop',
    duration: '3:45',
    releaseDate: '2023-04-20',
    link: 'https://example.com/amazing-song',
  };
  return (
    <Router>
      <div className="App flex">
        <Sidebar menu={sidebar_menu} />
        <div className="flex-1 pl-[255px]">
          <Routes>
            <Route path="/" element={<MyProfile />} />
            <Route path="/mymusic" element={<MyMusic />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/paymentgateway" element={<PaymentGateway />} />
            <Route path='/dashboard' element={<Dashboard data={musicData}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './pages/MyProfile';
import MyMusic from './pages/MyMusic';
import Sidebar from './sidebar/Sidebar';
import sidebar_menu from './sidebar/sidebar_menu';
import Home from './components/Home';
import PaymentGateway from './components/PaymentGateway';

function App() {
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

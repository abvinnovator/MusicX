import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../components/logo.png'
import SideBarItem from './sidebar-item';

const SideBar = ({ menu }) => {
  const location = useLocation();
  const [active, setActive] = useState(1);

  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="bg-slate-900 h-full w-64 fixed left-0 top-0 flex flex-col text-white border-r border-gray-700">
      <div className="sidebar-container">
        <div className="sidebar-logo-container p-2">
        <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4"
          />
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">
            LEELOOP
          </span>
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;

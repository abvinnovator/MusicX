import React, { useState } from 'react';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="flex">
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'profile' ? 'bg-yellow-500' : 'bg-black'}`}
            onClick={() => handleTabChange('profile')}
          >
            Profile
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === 'details' ? 'bg-yellow-500' : 'bg-black'}`}
            onClick={() => handleTabChange('details')}
          >
            Personal Details
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full overflow-hidden mr-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">VAMSI</h2>
                  <p>Music lover</p>
                </div>
              </div>
              <button className="text-yellow-500">Edit</button>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block">First Name:</label>
                  <input type="text" id="firstName" className="bg-black border-b-2 border-white text-white focus:outline-none focus:border-yellow-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block">Last Name:</label>
                  <input type="text" id="lastName" className="bg-black border-b-2 border-white text-white focus:outline-none focus:border-yellow-500" />
                </div>
                {/* Add more fields as needed */}
              </div>
              <button className="text-yellow-500">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

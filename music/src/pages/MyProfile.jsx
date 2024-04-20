import React from 'react';

const MyProfile = () => {
  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        {/* Profile */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full overflow-hidden mr-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">LeeLoop</h2>
                <p>Music lover</p>
              </div>
            </div>
            <button className="text-yellow-500">Edit</button>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-4">
              <label htmlFor="firstName" className="block">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                value="Vamsi"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                value="ABV"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                value="abv@gmail.com"
                readOnly
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="phoneNo" className="block mr-2">
                Phone No:
              </label>
              <input
                type="text"
                id="phoneNo"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500 flex-1"
                value="+919562374533"
                readOnly
              />
              <button className="text-yellow-500 ml-1">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
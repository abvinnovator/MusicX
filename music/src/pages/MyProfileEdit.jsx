import React from 'react';

const MyProfileEdit = () => {
  return (
    <div className="bg-black min-h-screen text-white py-8 mt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Your Profile</h1>
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
            <div>
              <button className="bg-yellow-500 text-black rounded-md px-4 py-2 mr-2">
                Select
              </button>
              <button className="bg-yellow-500 text-black rounded-md px-4 py-2">
                Edit
              </button>
            </div>
          </div>
        </div>
        {/* Personal Details */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-4">
              <label htmlFor="firstName" className="block">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
               
                
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
               
                
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block">
                Gender:
              </label>
              <input
                type="text"
                id="gender"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                
                
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                
                
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
                
                
              />
              <button className="text-yellow-500 ml-1">Edit</button>
            </div>
            <div className="mb-4">
              <label htmlFor="about" className="block">
                About:
              </label>
              <textarea
                id="about"
                className="bg-slate-900 border-2 border-white text-white focus:outline-none focus:border-yellow-500 resize-none"
                rows="3"
                
              >
                Hey there! I'm a passionate music lover who enjoys exploring new genres and artists.
              </textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-gray-600 text-white rounded-md px-4 py-2 mr-2">
              Cancel
            </button>
            <button className="bg-yellow-500 text-black rounded-md px-4 py-2">
              Save
            </button>
          </div>
        </div>
        {/* Password */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-4">
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                
                
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-slate-900 border-b-2 border-white text-white focus:outline-none focus:border-yellow-500"
                
                
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
            <button className="bg-gray-600 text-white rounded-md px-4 py-2 mr-2">
              Cancel
            </button>
            <button className="bg-yellow-500 text-black rounded-md px-4 py-2">
              Update
            </button>
          </div>
      </div>
    </div>
  );
};

export default MyProfileEdit;
import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-500 rounded-full mr-4"></div>
          <h1 className="text-white text-2xl font-bold">MY UPLOADS</h1>
        </div>
        <div className="flex">
          <a href="#" className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">Home</a>
        </div>
      </div>
      <div className="bg-black rounded-lg p-8 mt-8 flex">
        <div className="mr-20">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-full p-10 mb-10 ml-">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.658 0-3 .895-3 2s1.342 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 14c-1.658 0-3 .895-3 2s1.342 2 3 2 3-.895 3-2V3z" />
            </svg>
          </div>
          <div className="text-white font-bold text-lg relative">
            Upload Music
            <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
          </div>
          <div className="text-white font-bold text-lg relative mt-4">
            Upload Cover
            <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
          </div>
        </div>
        <div className="flex-1 ml-20">
          <form>
            <div className="mb-4">
              <input type="text" id="title" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Title" />
            </div>
            <div className="mb-4">
              <input type="text" id="subtitle" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Subtitle" />
            </div>
            <div className="mb-4">
              <input type="text" id="mainGenre" className="bg-gray-800 rounded-md p-2 w-full text-white " placeholder="Main Genre" />
            </div>
            <div className="mb-4">
              <input type="text" id="duration" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Duration" />
            </div>
            <div className="mb-4">
              <input type="date" id="releaseDate" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Proposed Release Date" />
            </div>
            <div className="mb-4">
              <label className="text-white block mb-1">Music Collecting Society (e.g. SUISA)</label>
              <div className="flex items-center">
                <input type="checkbox" id="yes" className="mr-2" />
                <label className="text-white mr-4" htmlFor="yes">Yes</label>
                <input type="checkbox" id="no" />
                <label className="text-white" htmlFor="no">No</label>
              </div>
            </div>
            <button className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">
              <svg className="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              </svg>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
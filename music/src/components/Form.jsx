import React from 'react';
import music from './music.jpg';

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
      <div className="bg-black rounded-lg p-8 mt-8 flex flex-col md:flex-row">
        <div className="mb-8 md:mr-20 md:mb-0">
          <div className="mb-4">
            <img src={music} alt="Music" className="w-full h-auto rounded-lg border border-gray-500" />
          </div>
          <div className="text-white font-bold text-lg relative mb-4">
            Upload Music
            <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
          </div>
          <div className="text-white font-bold text-lg relative mb-4">
            Upload Cover
            <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
          </div>
        </div>
        <div className="flex-1">
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
              <label className="text-white block mb-1">Release Date</label>
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

import React, { useState } from 'react';

const MyMusic = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [music, setMusic] = useState([
    { name: 'Song 1', duration: '3:45', status: 'Uploaded' },
    { name: 'Song 2', duration: '4:20', status: 'Uploading' },
    { name: 'Song 3', duration: '2:55', status: 'Uploaded' },
    { name: 'Song 4', duration: '5:10', status: 'Uploading' },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionsClick = (index) => {
    console.log(`Clicked options for song ${music[index].name}`);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-500">
          My Music
        </h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mr-4 rounded-md ${
              activeTab === 'all'
                ? 'bg-yellow-500 text-black'
                : 'bg-transparent hover:bg-yellow-500 hover:text-black'
            }`}
            onClick={() => handleTabClick('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mr-4 rounded-md ${
              activeTab === 'uploading'
                ? 'bg-yellow-500 text-black'
                : 'bg-transparent hover:bg-yellow-500 hover:text-black'
            }`}
            onClick={() => handleTabClick('uploading')}
          >
            Uploading
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 'uploaded'
                ? 'bg-yellow-500 text-black'
                : 'bg-transparent hover:bg-yellow-500 hover:text-black'
            }`}
            onClick={() => handleTabClick('uploaded')}
          >
            Uploaded
          </button>
        </div>
        <table className="w-full  table-fixed">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="px-2 py-1 text-left">Name</th>
              <th className="px-2 py-1 text-left">Duration</th>
              <th className="px-2 py-1 text-left">Status</th>
              <th className="px-2 py-1 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {music.filter((song) => {
              if (activeTab === 'all') {
                return true;
              } else {
                return song.status.toLowerCase() === activeTab;
              }
            }).map((song, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="px-2 py-1">{song.name}</td>
                <td className="px-2 py-1">{song.duration}</td>
                <td className="px-2 py-1">{song.status}</td>
                <td className="px-2 py-1 relative">
                  <button
                    className="text-gray-400 hover:text-white"
                    onClick={() => handleOptionsClick(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                  {/* Add your edit and delete options here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMusic;
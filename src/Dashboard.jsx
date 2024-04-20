import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="bg-yellow-500 text-black py-4 px-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <img src={data.coverImage} alt="Music Cover" className="w-64 h-64 rounded-lg shadow-lg" />
          <audio controls src={data.musicFile} className="rounded-lg shadow-lg">
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Artist Name:</p>
              <p>{data.artistName}</p>
            </div>
            <div>
              <p className="font-bold">Title:</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p className="font-bold">Subtitle:</p>
              <p>{data.subtitle}</p>
            </div>
            <div>
              <p className="font-bold">Genre:</p>
              <p>{data.genre}</p>
            </div>
            <div>
              <p className="font-bold">Duration:</p>
              <p>{data.duration}</p>
            </div>
            <div>
              <p className="font-bold">Music Mastering:</p>
              <p>Applied</p>
            </div>
            <div>
              <p className="font-bold">Cover Image by LeeLoop:</p>
              <p>Applied</p>
            </div>
            <div>
              <p className="font-bold">Status:</p>
              <p className="text-green-500">Released</p>
            </div>
            <div>
              <p className="font-bold">Release Date:</p>
              <p>{data.releaseDate}</p>
            </div>
            <div>
              <p className="font-bold">Link:</p>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{data.link}</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

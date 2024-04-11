import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import music from './form.png';

const Formold = () => {
  const musicInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [mainGenre, setMainGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [isMusicUploaded, setIsMusicUploaded] = useState(false);
  const [isCoverUploaded, setIsCoverUploaded] = useState(false);

  const handleMusicUpload = () => {
    musicInputRef.current.click();
  };

  const handleCoverUpload = () => {
    coverInputRef.current.click();
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    // Code to handle file upload goes here
    if (type === 'music') {
      setIsMusicUploaded(true);
      toast.success('Music uploaded successfully!');
    } else if (type === 'cover') {
      setIsCoverUploaded(true);
      toast.success('Cover uploaded successfully!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && subtitle && mainGenre && duration && isMusicUploaded && isCoverUploaded) {
      toast.success('Your music uploaded successfully!');
    } else {
      toast.error('Please fill in all the fields and upload both music and cover.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col mb-5">
      <div className="flex justify-center w-full px-4 py-4">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-red-500 rounded-full mr-4"></div>
          <h1 className="text-white text-2xl font-bold">MY UPLOADS</h1>
        </div>
      </div>
      <div className="flex justify-end p-3 ">
        <a href="#" className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded mt-4">
          Home
        </a>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-black rounded-lg p-8 mt-8 flex flex-col md:flex-row">
          <div className="mb-8 md:mr-20 md:mb-0">
            <div className="mb-4">
              <img src={music} alt="Music" className="max-w-full max-h-[300px] h-auto rounded-lg border border-gray-500" />
            </div>
            <div className="text-white font-bold text-lg relative mb-4">
              <button onClick={handleMusicUpload} className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">
                Upload Music
              </button>
              <input
                type="file"
                ref={musicInputRef}
                onChange={(e) => handleFileUpload(e, 'music')}
                className="hidden"
              />
              <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
            </div>
            <div className="text-white font-bold text-lg relative mb-4">
              <button onClick={handleCoverUpload} className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">
                Upload Cover
              </button>
              <input
                type="file"
                ref={coverInputRef}
                onChange={(e) => handleFileUpload(e, 'cover')}
                className="hidden"
              />
              <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="title"
                  className="bg-gray-800 rounded-md p-2 w-full text-white"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subtitle"
                  className="bg-gray-800 rounded-md p-2 w-full text-white"
                  placeholder="Subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="mainGenre"
                  className="bg-gray-800 rounded-md p-2 w-full text-white "
                  placeholder="Main Genre"
                  value={mainGenre}
                  onChange={(e) => setMainGenre(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="genres" className="text-white">
                Duration (mm:ss)
                </label>

                <input
                  type="time"
                  id="duration"
                  className="bg-gray-800 rounded-md p-2 w-full text-white"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">
                <svg
                  className="inline-block h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Formold; 
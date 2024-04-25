import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
/*import MyProfile from './pages/MyProfile';
import MyMusic from './pages/MyMusic';
import Sidebar from './sidebar/Sidebar';
import sidebar_menu from './sidebar/sidebar_menu';
import Home from './components/Home';
import PaymentGateway from './components/PaymentGateway';
import Dashboard from './Dashboard';
import MyProfileEdit from './pages/MyProfileEdit';*/
import Chat from './chat/Chat';
import ChatPage from './chat/ChatPage';

function App() {
 /* const musicData = {
    coverImage: 'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
    musicFile: 'music_file.mp3',
    artistName: 'John Doe',
    title: 'Amazing Song',
    subtitle: 'The Best Hits',
    genre: 'Pop',
    duration: '3:45',
    releaseDate: '2023-04-20',
    link: 'https://example.com/amazing-song',
  };
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
            <Route path='/dashboard' element={<Dashboard data={musicData}/>} />
            <Route path='/myprofileedit' element={<MyProfileEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );*/
  const contacts = [
    {
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
      name: 'abv',
      status: 'online',
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
      name: 'sai',
      status: 'online',
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg',
      name: 'aman',
      status: 'online',
    },
  ];

  const getContactByName = (name) => {
    return contacts.find((contact) => contact.name === name);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat contacts={contacts} />} />
        <Route path="/chat/:name" element={<ChatPageWrapper getContactByName={getContactByName} />} />
      </Routes>
    </Router>
  );
}

const ChatPageWrapper = ({ getContactByName }) => {
  const { name } = useParams();
  const contact = getContactByName(name);

  return <ChatPage contact={contact} />;
};

export default App;

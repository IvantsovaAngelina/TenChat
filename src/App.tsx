import React from 'react';
import { ListChats } from './components/listChats/ListChats';
import { Chat } from './components/chat/Chat';
import { Profile } from './components/profile/Profile';

function App() {
  return (
    <div className='tenChat'>
      <ListChats/>
      <Chat/>
      <Profile/>
    </div>
  );
}

export default App;

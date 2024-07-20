import React, { useState } from 'react';
import { ListChats } from './components/listChats/ListChats';
import { Chat } from './components/chat/Chat';
import { Profile } from './components/profile/Profile';
import { IProfile } from './model/profile';

function App() {
  const [selectedProfile, setSelectedProfile] = useState<IProfile | null>(null);

  const handleProfileSelect = (profile: IProfile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className='tenChat'>
      <ListChats onProfileSelect={handleProfileSelect} />
      <Chat />
      <Profile profile={selectedProfile} />
    </div>
  );
}

export default App;
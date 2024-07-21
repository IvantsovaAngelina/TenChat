import React, { useState, useEffect } from 'react';
import { ListChats } from './components/listChats/ListChats';
import { Chat } from './components/chat/Chat';
import { Profile } from './components/profile/Profile';
import { ProfileHeader } from './components/profile/ProfileHeader';
import { IProfile } from './model/profile';
import { IChat } from './model/chat';
import { chats as initialChats } from './data/chat_data';
import { chatMessages } from './data/chat_messages';

function App() {
  const [selectedProfile, setSelectedProfile] = useState<IProfile | null>(null);
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [chats, setChats] = useState<IChat[]>(initialChats);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth >= 1024);

  const handleProfileSelect = (profile: IProfile, chat: IChat) => {
    setSelectedProfile(profile);
    setSelectedChat(chat);
  };

  const handleSendMessage = (message: string) => {
    if (selectedChat) {
      const chatData = chatMessages.find(chat => chat.idChat === selectedChat.idChat);
      if (chatData) {
        chatData.messages.push(message);
        chatData.dateLastMess.push(new Date());
      } else {
        chatMessages.push({ idChat: selectedChat.idChat, messages: [message], dateLastMess: [new Date()] });
      }

      const updatedChats = chats.map(chat =>
        chat.idChat === selectedChat.idChat ? { ...chat, lastMessage: message, inList: true } : chat
      );

      const sortedChats = updatedChats.sort((a, b) => {
        const aDate = chatMessages.find(c => c.idChat === a.idChat)?.dateLastMess.slice(-1)[0] || new Date(0);
        const bDate = chatMessages.find(c => c.idChat === b.idChat)?.dateLastMess.slice(-1)[0] || new Date(0);
        return bDate.getTime() - aDate.getTime();
      });

      setChats(sortedChats);
      setSelectedChat({ ...selectedChat });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='tenChat'>
      <ListChats onProfileSelect={handleProfileSelect} chats={chats} />
      <div className='tenChat-min'>
        {!isWideScreen && selectedProfile && <ProfileHeader profile={selectedProfile} />}
        <Chat 
          className={selectedProfile ? 'chat-selected' : 'chat-default'}
          selectedChat={selectedChat}
          onSendMessage={handleSendMessage}
        />
      </div>
      {isWideScreen && selectedProfile && <Profile profile={selectedProfile} />}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { ListChats } from './components/listChats/ListChats';
import { Chat } from './components/chat/Chat';
import { Profile } from './components/profile/Profile';
import { IProfile } from './model/profile';
import { IChat } from './model/chat';
import { chats as initialChats } from './data/chat_data';
import { chatMessages } from './data/chatMessages'; 

function App() {
  const [selectedProfile, setSelectedProfile] = useState<IProfile | null>(null);
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [chats, setChats] = useState<IChat[]>(initialChats);

  const handleProfileSelect = (profile: IProfile, chat: IChat) => {
    setSelectedProfile(profile);
    setSelectedChat(chat);
  };

  const handleSendMessage = (message: string) => {
    if (selectedChat) {
      const updatedChats = chats.map(chat => 
        chat.idChat === selectedChat.idChat
          ? { ...chat, lastMessage: message }
          : chat
      );
      setChats(updatedChats);

      const chatData = chatMessages.find(chat => chat.idChat === selectedChat.idChat);
      if (chatData) {
        chatData.messages.push(message);
        chatData.dateLastMess.push(new Date());
      } else {
        chatMessages.push({ idChat: selectedChat.idChat, messages: [message], dateLastMess: [new Date()] });
      }
    }
  };

  return (
    <div className='tenChat'>
      <ListChats onProfileSelect={handleProfileSelect} chats={chats} />
      <Chat 
        className={selectedProfile ? 'chat-selected' : 'chat-default'}
        selectedChat={selectedChat}
        onSendMessage={handleSendMessage}
      />
      {selectedProfile && <Profile profile={selectedProfile} />}
    </div>
  );
}

export default App;
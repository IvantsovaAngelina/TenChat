import React, { useState, useEffect } from 'react';
import { ChatItem } from './ChatItem';
import { profiles } from '../../data/profile_data';
import { Button, Modal, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IChat } from '../../model/chat';
import { IProfile } from '../../model/profile';
import { chatMessages } from '../../data/chat_messages';

interface ListChatsProps {
  onProfileSelect: (profile: IProfile, chat: IChat) => void;
  chats: IChat[];
}

export function ListChats({ onProfileSelect, chats }: ListChatsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatList, setChatList] = useState<IChat[]>(chats);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  useEffect(() => {
    setChatList(chats);
  }, [chats]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddChat = (chat: IChat) => {
    const updatedChats = chatList.map(c =>
      c.idChat === chat.idChat ? { ...c, inList: true } : c
    );
    setChatList(updatedChats);
    setIsModalOpen(false);
  };

  const handleChatSelect = (user: IProfile, chat: IChat) => {
    setSelectedChatId(chat.idChat);
    onProfileSelect(user, chat);
  };

  const availableChats = chatList.filter(chat => !chat.inList);

  const sortedChatList = chatList
    .filter(chat => chat.inList)
    .sort((a, b) => {
      const aDate = chatMessages.find(c => c.idChat === a.idChat)?.dateLastMess.slice(-1)[0] || new Date(0);
      const bDate = chatMessages.find(c => c.idChat === b.idChat)?.dateLastMess.slice(-1)[0] || new Date(0);
      return bDate.getTime() - aDate.getTime();
    });

  return (
    <div className="list-chat">
      <div className="list-chat-header">
        <Button className='add-chat-btn' shape="circle" onClick={showModal} icon={<PlusOutlined />} />
      </div>
      <div className='list-chat-item'>
        {
          sortedChatList.map(chat => {
            const user = profiles.find(p => p.idUser === chat.idUser);
            const isSelected = chat.idChat === selectedChatId;
            return user ? (
              <div key={chat.idChat} onClick={() => handleChatSelect(user, chat)}>
                <ChatItem chat={chat} user={user} isSelected={isSelected} />
              </div>
            ) : null;
          })
        }
      </div>

      <Modal title="Добавить контакт" 
             open={isModalOpen} 
             onOk={handleCancel} 
             onCancel={handleCancel}
             style={{ top: 20 }}>
        <List
          dataSource={availableChats}
          renderItem={(chat: IChat) => {
            const user = profiles.find(profile => profile.idUser === chat.idUser);
            return (
              <List.Item onClick={() => handleAddChat(chat)}>
                <div className='modal-item-user'>
                  <img src={chat.photo} alt={user?.nameUser} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                  <span className='item-user-name'>{user?.nameUser}</span>
                </div>
              </List.Item>
            );
          }}
        />
      </Modal>
    </div>
  );
}
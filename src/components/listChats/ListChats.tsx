import React, { useState } from 'react';
import { ChatItem } from './ChatItem';
import { chats as initialChats } from '../../data/chat_data';
import { profiles } from '../../data/profile_data';
import { Button, Modal, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IChat } from '../../model/chat';
import { IProfile } from '../../model/profile';

interface ListChatsProps {
  onProfileSelect: (profile: IProfile) => void;
}

export function ListChats({ onProfileSelect }: ListChatsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatList, setChatList] = useState<IChat[]>(initialChats);

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

  const availableChats = chatList.filter(chat => !chat.inList);

  return (
    <div className="list-chat">
      <div className="list-chat-header">
        <Button className='add-chat-btn' shape="circle" onClick={showModal} icon={<PlusOutlined />} />
      </div>
      <div className='list-chat-item'>
        {
          chatList.filter(chat => chat.inList).map(chat => {
            const user = profiles.find(p => p.idUser === chat.idUser);
            return user ? (
              <div key={chat.idChat} onClick={() => onProfileSelect(user)}>
                <ChatItem chat={chat} user={user} />
              </div>
            ) : null;
          })
        }
      </div>

      <Modal title="Добавить контакт" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
        <List
          dataSource={availableChats}
          renderItem={chat => {
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
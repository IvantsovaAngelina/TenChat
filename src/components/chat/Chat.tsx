import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IChat } from '../../model/chat';
import { chatMessages } from '../../data/chat_messages';

interface ChatProps {
  className?: string;
  selectedChat: IChat | null;
  onSendMessage: (message: string) => void;
}

export function Chat({ className, selectedChat, onSendMessage }: ChatProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedChat) {
      const chatData = chatMessages.find(chat => chat.idChat === selectedChat.idChat);
      setMessages(chatData ? chatData.messages : []);
    }
  }, [selectedChat]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className={`chat ${className}`}>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <Input
          placeholder="Написать сообщение"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={handleSendMessage}
        />
        <Button type="primary" icon={<EditOutlined />} onClick={handleSendMessage} />
      </div>
    </div>
  );
}
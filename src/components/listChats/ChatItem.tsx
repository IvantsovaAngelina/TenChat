import React from 'react';
import { IChat } from '../../model/chat';
import { IProfile } from '../../model/profile';
import { chatMessages } from '../../data/chatMessages';

interface ChatProps {
    chat: IChat;
    user: IProfile;
}

export function ChatItem({ chat, user }: ChatProps) {
    const chatData = chatMessages.find(c => c.idChat === chat.idChat);
    const lastMessage = chatData ? chatData.messages[chatData.messages.length - 1] : "Нет сообщений";
    const lastMessageDate = chatData ? chatData.dateLastMess[chatData.dateLastMess.length - 1] : null;
    const formattedLastMessageDate = lastMessageDate ? lastMessageDate.toLocaleDateString('ru-RU') : "Нет сообщений";

    return (
        <div className="item-chat">
            <div className="item-chat-img">
                <img className='item-chat-photo' src={chat.photo} alt="chat image" />
            </div>
            <div className="item-chat-context">
                <span className='item-chat-user'>{user.nameUser}</span>
                <div className='item-chat-mess'>
                    <span className='item-chat-lastmess'>{lastMessage}</span>
                    <span className='item-chat-date'>{formattedLastMessageDate}</span>
                </div>
            </div>
        </div>
    );
}
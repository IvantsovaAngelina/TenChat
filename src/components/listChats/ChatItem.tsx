import React from 'react';
import { IChat } from '../../model/chat';
import { IProfile } from '../../model/profile';

interface ChatProps {
    chat: IChat;
    user: IProfile;
}

export function ChatItem({ chat, user }: ChatProps) {
    const formattedDate = chat.dateLastMess.toLocaleDateString('ru-RU');

    return (
        <div className="item-chat">
            <div className="item-chat-img">
                <img className='item-chat-photo' src={chat.photo} alt="chat image" />
            </div>
            <div className="item-chat-context">
                <div className='item-chat-info'>
                    <span className='item-chat-user'>{user.nameUser}</span>
                    <span className='item-chat-date'>{formattedDate}</span>
                </div>
                <span className='item-chat-mess'>{chat.lastMessage}</span>
            </div>
        </div>
    );
}
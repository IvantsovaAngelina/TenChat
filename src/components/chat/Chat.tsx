import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const chatBodyRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat">
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
                <Button type="primary" className="chat-btn" icon={<EditOutlined />} onClick={handleSendMessage} />
            </div>
        </div>
    );
}
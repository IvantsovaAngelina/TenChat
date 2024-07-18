import { IChat } from '../model/chat';
import alex from '../img/alex.jpg';
import kotik from '../img/kotik.jpg';
import julian from '../img/julian.jpg';
import penguin from '../img/penguin.jpg';
import shrek from '../img/shrek.png';

export const chats: IChat[] = [
    {
        idChat: 1,
        idSuperUser: 0,
        idUser: 101,
        photo: alex,
        dateLastMess: new Date('2024-07-16T15:30:00'),
        lastMessage: "Привет! Как дела?",
        inList: true
    },
    {
        idChat: 2,
        idSuperUser: 0, 
        idUser: 102,
        photo: kotik,
        dateLastMess: new Date('2024-07-16T16:45:00'),
        lastMessage: "Не забудь про встречу завтра.",
        inList: false
    },
    {
        idChat: 3,
        idSuperUser: 0, 
        idUser: 103,
        photo: julian,
        dateLastMess: new Date('2024-07-17T09:20:00'),
        lastMessage: "Доброе утро!",
        inList: false
    },
    {
        idChat: 4,
        idSuperUser: 0, 
        idUser: 104,
        photo: penguin,
        dateLastMess: new Date('2024-07-17T10:15:00'),
        lastMessage: "Отправил документы на почту.",
        inList: true
    },
    {
        idChat: 5,
        idSuperUser: 0, 
        idUser: 105,
        photo: shrek,
        dateLastMess: new Date('2024-07-17T12:00:00'),
        lastMessage: "До встречи в офисе.",
        inList: false
    }
];
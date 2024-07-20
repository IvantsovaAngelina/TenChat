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
        inList: true
    },
    {
        idChat: 2,
        idSuperUser: 0, 
        idUser: 102,
        photo: kotik,
        inList: false
    },
    {
        idChat: 3,
        idSuperUser: 0, 
        idUser: 103,
        photo: julian,
        inList: false
    },
    {
        idChat: 4,
        idSuperUser: 0, 
        idUser: 104,
        photo: penguin,
        inList: true
    },
    {
        idChat: 5,
        idSuperUser: 0, 
        idUser: 105,
        photo: shrek,
        inList: false
    }
];
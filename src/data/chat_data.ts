import { IChat } from '../model/chat';
import alex from '../img/alex.jpg';
import kotik from '../img/kotik.jpg';
import julian from '../img/julian.jpg';
import penguin from '../img/penguin.jpg';
import shrek from '../img/shrek.png';
import rick from '../img/rickandmorty.jpg'
import tiger from '../img/tiger.jpg'
import lol from '../img/lol.jpg'
import lolbee from '../img/lolbee.jpg'
import panda from '../img/panda.jpg'
import kwaKit from '../img/kwaKit.jpg'
import cow from '../img/cow.jpg'


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
    },
    {
        idChat: 6,
        idSuperUser: 0,
        idUser: 106,
        photo: rick,
        inList: true
    },
    {
        idChat: 7,
        idSuperUser: 0, 
        idUser: 107,
        photo: tiger,
        inList: false
    },
    {
        idChat: 8,
        idSuperUser: 0, 
        idUser: 108,
        photo: lolbee,
        inList: false
    },
    {
        idChat: 9,
        idSuperUser: 0, 
        idUser: 109,
        photo: lol,
        inList: true
    },
    {
        idChat: 10,
        idSuperUser: 0, 
        idUser: 110,
        photo: panda,
        inList: false
    },
    {
        idChat: 11,
        idSuperUser: 0, 
        idUser: 111,
        photo: kwaKit,
        inList: false
    },
    {
        idChat: 12,
        idSuperUser: 0, 
        idUser: 112,
        photo: cow,
        inList: false
    }
];
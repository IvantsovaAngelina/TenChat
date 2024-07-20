import { IProfile } from '../model/profile';
import alex from '../img/alex.jpg';
import kotik from '../img/kotik.jpg';
import julian from '../img/julian.jpg';
import penguin from '../img/penguin.jpg';
import shrek from '../img/shrek.png';

export const profiles: IProfile[] = [
    {
        idUser: 101,
        image: alex,
        nameUser: 'Иван Петров'
    },
    {
        idUser: 102,
        image: kotik,
        nameUser: 'Анна Смирнова'
    },
    {
        idUser: 103,
        image: julian,
        nameUser: 'Сергей Иванов'
    },
    {
        idUser: 104,
        image: penguin,
        nameUser: 'Мария Кузнецова'
    },
    {
        idUser: 105,
        image: shrek,
        nameUser: 'Дмитрий Соколов'
    }
];
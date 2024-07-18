export interface IChat {
    idChat: number; 
    idSuperUser: number;
    idUser: number; 
    photo: string; 
    dateLastMess: Date; 
    lastMessage: string; 
    inList: boolean;
}
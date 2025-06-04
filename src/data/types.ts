export interface Chat {
  idChat: string;
  nombre: string;
  ultimoMsj: string;
  sinLeer: number;
  avatar: string;
}

export interface Mensaje {
    idMensj: string;
    texto: string;
    hora: Date;
    isUser: boolean;
}
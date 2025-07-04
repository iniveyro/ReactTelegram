export interface Chat {
  idChat: string;
  nombre: string;
  ultimoMsj: string;
  sinLeer: number;
  avatar: string;
  mensajes: Mensaje[]
}

export interface Mensaje {
  idMensj: string;
  texto: string;
  hora: Date;
  isUser: boolean;
}
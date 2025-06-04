import type { Chat } from './types';
import chica1 from '../assets/chica1.png';
import hombre1 from '../assets/hombre1.png';
import hombre2 from '../assets/hombre2.png';
import mujer2 from '../assets/mujer2.png';

export const mockChats: Chat[] = [
    { idChat: '1', nombre: 'Juan Pérez', ultimoMsj: '¡Hola! ¿Cómo estás?', sinLeer: 0, avatar:hombre1 },
    { idChat: '2', nombre: 'Ana García', ultimoMsj: 'Nos vemos mañana', sinLeer: 1, avatar: mujer2 },
    { idChat: '3', nombre: 'Carlos López', ultimoMsj: 'Revisa el documento', sinLeer: 5, avatar: hombre2 },
    { idChat: '4', nombre: 'Sofía Martínez', ultimoMsj: 'Gracias por tu ayuda', sinLeer: 0, avatar: chica1 },
];
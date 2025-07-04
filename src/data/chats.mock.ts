import type { Chat } from './types';
import chica1 from '../assets/chica1.png';
import hombre1 from '../assets/hombre1.png';
import hombre2 from '../assets/hombre2.png';
import mujer2 from '../assets/mujer2.png';
import { mockMensajesCarlos, mockMensajesJuan, mockMensajesAna, mockMensajesSofia } from './messages.mock';

export const mockChats: Chat[] = [
    { idChat: '1', nombre: 'Juan Pérez', ultimoMsj: mockMensajesJuan[mockMensajesJuan.length - 1].texto, sinLeer: 0, avatar:hombre1, mensajes:mockMensajesJuan },
    { idChat: '2', nombre: 'Ana García', ultimoMsj: mockMensajesAna[mockMensajesAna.length - 1].texto, sinLeer: 2, avatar: mujer2, mensajes:mockMensajesAna },
    { idChat: '3', nombre: 'Carlos López', ultimoMsj: mockMensajesCarlos[mockMensajesCarlos.length-1].texto, sinLeer: 1, avatar: hombre2, mensajes:mockMensajesCarlos },
    { idChat: '4', nombre: 'Sofía Martínez', ultimoMsj: mockMensajesSofia[mockMensajesSofia.length-1].texto, sinLeer: 0, avatar: chica1, mensajes:mockMensajesSofia }
];
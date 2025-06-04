import type { Mensaje } from './types';

export const mockMensajesJuan: Mensaje[] = [
    {
      idMensj: '1',
      texto: '¡Hola! ¿Cómo estás?',
      hora: new Date(Date.now() - 3600000),
      isUser: false,
    },
    {
      idMensj: '2',
      texto: '¡Bien, gracias! ¿Y tú?',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
  ];
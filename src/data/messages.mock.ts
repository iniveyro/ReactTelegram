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
      texto: 'Bien, gracias',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '3',
      texto: 'Y vos, como estas??',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '4',
      texto: 'Yo tambien, estoy bien.',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    },
    {
      idMensj: '5',
      texto: 'Perfecto',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '6',
      texto: 'Me alegro mucho por vos :)',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '7',
      texto: 'Queria preguntarte por el torneo de truco que estan organizando',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    },
    {
      idMensj: '8',
      texto: 'Me gustaria saber informacion del torneo y como inscribirme',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    },
    {
      idMensj: '9',
      texto: 'Sisi, como no',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '10',
      texto: 'Es un torneo a 30 tantos, sin flor y en duos, osea 2vs2.',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '11',
      texto: 'La inscripcion por pareja es de $5000, puede ser en efectivo o transferencia',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '12',
      texto: 'Genial, ahora no cuento con esa plata para realizar la inscripcion.',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    },
    {
      idMensj: '13',
      texto: 'Sera que puedo realizar una seña???',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    },
    {
      idMensj: '14',
      texto: 'Sisi, abonando la mitad de la inscipcion, te anoto al torno, lo que si... antes que empiece tenes que finalizar el pago.',
      hora: new Date(Date.now() - 3000000),
      isUser: true,
    },
    {
      idMensj: '15',
      texto: 'Joya, pasame el alias para realizar la seña. :)',
      hora: new Date(Date.now() - 3000000),
      isUser: false,
    }
  ];
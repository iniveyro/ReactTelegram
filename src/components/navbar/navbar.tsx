import type { FC } from 'react';
import styles from './navbar.module.css';
import chica1 from '../../assets/chica1.png';
import hombre1 from '../../assets/hombre1.png';
import hombre2 from '../../assets/hombre2.png';
import mujer2 from '../../assets/mujer2.png';
import type { Chat } from './types';

export const Navbar: FC = () => {
  // datos mokeados
  const chats: Chat[] = [
    { idChat: '1', nombre: 'Juan Pérez', ultimoMsj: '¡Hola! ¿Cómo estás?', sinLeer: 2, avatar:hombre1 },
    { idChat: '2', nombre: 'Ana García', ultimoMsj: 'Nos vemos mañana', sinLeer: 0, avatar: mujer2 },
    { idChat: '3', nombre: 'Carlos López', ultimoMsj: 'Revisa el documento', sinLeer: 5, avatar: hombre2 },
    { idChat: '4', nombre: 'Sofía Martínez', ultimoMsj: 'Gracias por tu ayuda', sinLeer: 0, avatar: chica1 },
  ];

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>Chats</h2>
      <ul className={styles.chatList}>
        {chats.map((chat) => (
          <li key={chat.idChat} className={styles.chatItem}>
          <img src={chat.avatar} alt={chat.nombre} className={styles.avatar} />
          <div className={styles.chatContent}>
            <h3>{chat.nombre}</h3>
            <p>{chat.ultimoMsj}</p>
          </div>
          {chat.sinLeer > 0 && (
            <span className={styles.unreadBadge}>{chat.sinLeer}</span>
          )}
        </li>
        ))}
      </ul>
    </nav>
  );
};
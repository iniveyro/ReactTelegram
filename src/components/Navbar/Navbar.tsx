import type { FC } from 'react';
import styles from './Navbar.module.css';
import { mockChats } from '../../data/chats.mock'; // Importa desde /data

export const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <h2>Chats</h2>
      <ul className={styles.chatList}>
        {mockChats.map((chat) => (
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
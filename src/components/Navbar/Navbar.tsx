import type { FC } from 'react';
import { Container } from '../Container/Container';
import styles from './Navbar.module.css';
import { mockChats } from '../../data/chats.mock';
import telegramLogo from '../../assets/telegramlogo.svg';

export const Navbar: FC = () => {
  return (
    <Container className={styles.navbar}>
      {/* Encabezado con logo y texto */}
      <div className={styles.header}>
        <img 
          src={telegramLogo} 
          alt="Telegram Logo" 
          className={styles.logo} 
        />
        <h1 className={styles.appTitle}>Telegram</h1>
      </div>
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
    </Container>
  );
};
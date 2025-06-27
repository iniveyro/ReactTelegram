import { useState } from 'react';
import { Container } from '../Container/Container';
import styles from './Navbar.module.css';
import { mockChats } from '../../data/chats.mock';
import telegramLogo from '../../assets/telegramlogo.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import type { Chat } from '../../data/types';

interface NavbarProps {
  onChatSelect: (chat: Chat) => void;
  selectedChatId?: string;
}

export const Navbar = ({ onChatSelect, selectedChatId }: NavbarProps) => {
  const [filteredChats, setFilteredChats] = useState(mockChats);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFilteredChats(
      mockChats.filter(chat => 
        chat.nombre.toLowerCase().includes(lowerQuery) ||
        chat.ultimoMsj.toLowerCase().includes(lowerQuery)
      )
    );
  };


  return (
    <Container className={styles.navbar}>
      <div className={styles.header}>
        <img src={telegramLogo} alt="Telegram Logo" className={styles.logo} />
        <h1 className={styles.appTitle}>Telegram</h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <h2>Chats</h2>
      <ul className={styles.chatList}>
        {filteredChats.map((chat) => (
          <li 
            key={chat.idChat}
            className={`${styles.chatItem} ${selectedChatId === chat.idChat ? styles.selected : ''}`}
            onClick={() => onChatSelect(chat)}
          >
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
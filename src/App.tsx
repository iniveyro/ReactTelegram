import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css';
import { ChatWindow } from './components/ChatWindow/ChatWindow';
import type { Chat } from './data/types';
import { useState } from 'react';

export const App = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className={styles.appContainer}>
      <Navbar 
        onChatSelect={setSelectedChat}
        selectedChatId={selectedChat?.idChat}
      />
      <ChatWindow chat={selectedChat} />
    </div>
  );
};

export default App;
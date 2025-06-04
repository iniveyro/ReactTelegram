import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css';
import { ChatWindow } from './components/ChatWindow/ChatWindow';
import { mockChats } from './data/chats.mock';
import { mockMensajesJuan } from './data/messages.mock';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <ChatWindow 
        contactName={mockChats[0].nombre} 
        contactAvatar={mockChats[0].avatar} 
        messages={mockMensajesJuan} 
      />
    </div>
  );
}

export default App;
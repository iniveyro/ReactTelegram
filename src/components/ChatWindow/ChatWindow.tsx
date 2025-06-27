import styles from './ChatWindow.module.css';
import { Container } from '../Container/Container';
import { Message } from '../Mensajes/Mensajes';
import { MessageInput } from '../InputMensajes/InputMensajes';
import type { Chat} from '../../data/types';

interface ChatWindowProps {
  chat: Chat | null;
}

export const ChatWindow = ({ chat }: ChatWindowProps) => {
  if (!chat) {
    return (
      <div className={styles.emptyState}>
        <p>Selecciona un chat para comenzar</p>
      </div>
    );
  }

  const handleSendMessage = (texto: string) => {
    // Lógica para enviar mensaje
  };

return (
  <Container className={styles.chatWindow}>
    <header className={styles.chatHeader}>
      <img src={chat.avatar} alt={chat.nombre} className={styles.avatar} />
      <h2>{chat.nombre}</h2>
    </header>

    <div className={styles.messagesContainer}>
      {chat.mensajes.map((message) => (
        <Message key={message.idMensj} message={message} />
      ))}
    </div>
    <MessageInput onSendMessage={handleSendMessage} />
  </Container>
);
};
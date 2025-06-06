import type { FC } from 'react';
import styles from './ChatWindow.module.css';
import { Container } from '../Container/Container';
import { Message } from '../Mensajes/Mensajes';
import { MessageInput } from '../InputMensajes/InputMensajes';
import type { Mensaje } from '../../data/types';

interface ChatWindowProps {
  contactName: string;
  contactAvatar: string;
  messages: Mensaje[];
}

export const ChatWindow: FC<ChatWindowProps> = ({
  contactName,
  contactAvatar,
  messages,
}) => {
  const handleSendMessage = (texto: string) => {
    // Lógica para enviar mensaje
  };

  return (
    <Container className={styles.chatWindow}>
      <header className={styles.chatHeader}>
        <img src={contactAvatar} alt={contactName} className={styles.avatar} />
        <h2>{contactName}</h2>
      </header>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <Message key={message.idMensj} message={message} />
        ))}
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </Container>
  );
};
import type { FC } from 'react';
import styles from './ChatWindow.module.css';
import { mockMensajesJuan } from '../../data/messages.mock'; // Importa desde /data
import juanAvatar from '../../assets/hombre1.png';
import type { Mensaje } from '../../data/types';
import { MessageInput } from '../InputMensajes/InputMensajes';

interface ChatWindowProps {
  contactName: string;
  contactAvatar: string;
  messages: Mensaje[];
}

export const ChatWindow: FC<ChatWindowProps> = ({
  contactName = 'Juan Pérez',
  contactAvatar = juanAvatar,
  messages = mockMensajesJuan, // Usa el mock por defecto
}) => {
  const handleSendMessage = (texto: string) => {
    const newMessage: Mensaje = {
      idMensj: Date.now().toString(),
      texto,
      hora: new Date(),
      isUser: true,
    };
  };

  return (
    <div className={styles.chatWindow}>
      <header className={styles.chatHeader}>
        <img src={contactAvatar} alt={contactName} className={styles.avatar} />
        <h2>{contactName}</h2>
      </header>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.idMensj}
            className={`${styles.message} ${
              message.isUser ? styles.userMessage : styles.contactMessage
            }`}
          >
            <p>{message.texto}</p>
            <span className={styles.timestamp}>
              {message.hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};
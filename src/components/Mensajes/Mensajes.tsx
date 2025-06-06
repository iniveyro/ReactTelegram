import type { FC } from 'react';
import styles from './Mensajes.module.css';
import type { Mensaje } from '../../data/types';

interface MessageProps {
  message: Mensaje;
}

export const Message: FC<MessageProps> = ({ message }) => {
  return (
    <div className={`${styles.message} ${message.isUser ? styles.userMessage : styles.contactMessage}`}>
      <p>{message.texto}</p>
      <span className={styles.timestamp}>
        {message.hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );
};
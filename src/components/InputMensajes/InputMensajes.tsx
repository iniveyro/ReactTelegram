import { useState, useRef } from 'react';
import type { FC } from 'react';
import styles from './InputMensajes.module.css'

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

export const MessageInput: FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
    }
  };

  return (
    <div className={styles.container}>
      {/* Botón adjuntar (clip) */}
      <button 
        className={styles.attachButton} 
        onClick={handleAttachClick}
        aria-label="Adjuntar archivo"
      >
        📎
      </button>

      {/* Input oculto para archivos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={styles.hiddenFileInput}
      />

      {/* Campo de texto */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Escribe un mensaje..."
        className={styles.textInput}
        rows={1}
      />

      {/* Botón enviar */}
      <button 
        className={styles.sendButton} 
        onClick={handleSend}
        disabled={!message.trim()}
      >
        ➤
      </button>
    </div>
  );
};
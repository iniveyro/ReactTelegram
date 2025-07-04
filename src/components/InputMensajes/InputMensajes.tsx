import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import styles from './InputMensajes.module.css';
import telegramSend from '../../assets/telegramsend.svg';
import telegramClip from '../../assets/telegramclip.svg';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

export const MessageInput: FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      alert(`Mensaje a enviar: "${message}"`);
      onSendMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    if (message === '' && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [message]);

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
      <button 
        className={styles.attachButton} 
        onClick={handleAttachClick}
        aria-label="Adjuntar archivo"
      >
        <img 
          src={telegramClip} 
          alt="Adjuntar" 
          className={styles.icon}
        />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={styles.hiddenFileInput}
      />
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Escribe un mensaje..."
        className={styles.textInput}
        rows={1}
      />

      <button 
        className={styles.sendButton} 
        onClick={handleSend}
        disabled={!message.trim()}
        aria-label="Enviar mensaje"
      >
        <img 
          src={telegramSend} 
          alt="Enviar" 
          className={styles.sendIcon} 
        />
      </button>
    </div>
  );
};
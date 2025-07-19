import { useParams } from 'react-router-dom';
import { mockChats } from '../../data/chats.mock';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import styles from './Chat.module.css';

export const Chat = () => {
  const { id } = useParams();
  const chat = mockChats.find(c => c.idChat === id);

  if (!chat) {
    return <div className={styles.notFound}>Chat no encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <ChatWindow chat={chat} />
    </div>
  );
};
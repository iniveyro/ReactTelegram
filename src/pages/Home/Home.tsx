import styles from './Home.module.css';
import { Navbar } from '../../components/Navbar/Navbar.tsx';

export const Home = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeContent}>
        <img 
          src="/telegram-logo.png" 
          alt="Telegram" 
          className={styles.logo}
        />
        <h1>Telegram Web</h1>
        <p>
          Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.
          <br />
          Usa Telegram en hasta 4 dispositivos vinculados.
        </p>
        
        <div className={styles.securityNotice}>
          <input 
            type="checkbox" 
            id="encryption" 
            checked 
            readOnly
          />
          <label htmlFor="encryption">
            Tus mensajes personales están cifrados de extremo a extremo
          </label>
        </div>
      </div>
    </div>
  );
};
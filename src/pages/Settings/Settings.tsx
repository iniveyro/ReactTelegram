import styles from './Settings.module.css';

export const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.settingsTitle}>Configuración</h1>
      
      <div className={styles.settingsSection}>
        <h2>Cuenta</h2>
        <button className={styles.settingsButton}>Cambiar foto de perfil</button>
        <button className={styles.settingsButton}>Configurar privacidad</button>
      </div>
      
      <div className={styles.settingsSection}>
        <h2>Notificaciones</h2>
        <button className={styles.settingsButton}>Sonidos y vibración</button>
        <button className={styles.settingsButton}>Modo silencioso</button>
      </div>
      
      <div className={styles.settingsSection}>
        <h2>Chats</h2>
        <button className={styles.settingsButton}>Tema</button>
        <button className={styles.settingsButton}>Fondo de chat</button>
      </div>
    </div>
  );
};
import { Navbar } from './components/navbar/navbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1>Contenido principal aquí</h1>
      </main>
    </div>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Chat } from './pages/Chat/Chat';
import { Settings } from './pages/Settings/Settings';
import { NotFound } from './pages/NotFound/NotFound';
import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
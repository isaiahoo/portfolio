import { useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FolderGrid from './components/FolderGrid/FolderGrid';
import ProjectList from './components/ProjectList/ProjectList';
import ContactStrip from './components/ContactStrip/ContactStrip';
import styles from './App.module.css';

export default function App() {
  useEffect(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('entered');
    });
  }, []);

  return (
    <div className={styles.page}>
      <HeroSection />

      <div
        className={styles.section}
        data-animate=""
        style={
          {
            '--animate-delay': '400ms',
            '--animate-y': '16px',
          } as React.CSSProperties
        }
      >
        <FolderGrid />
      </div>

      <div className={styles.section}>
        <ProjectList />
      </div>

      <div
        data-animate=""
        style={
          {
            '--animate-delay': '900ms',
            '--animate-y': '0px',
            '--animate-duration': '300ms',
          } as React.CSSProperties
        }
      >
        <ContactStrip />
      </div>
    </div>
  );
}

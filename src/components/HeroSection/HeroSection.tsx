import { heroData } from '../../data/data';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { name, primaryRole, secondaryRole, statusText, statusLink } = heroData;

  return (
    <header className={styles.hero}>
      <h1
        className={styles.greeting}
        data-animate=""
        style={
          {
            '--animate-delay': '0ms',
            '--animate-y': '12px',
          } as React.CSSProperties
        }
      >
        Hi, I am {name}.
      </h1>
      <p
        className={styles.role}
        data-animate=""
        style={
          {
            '--animate-delay': '120ms',
            '--animate-y': '12px',
          } as React.CSSProperties
        }
      >
        {primaryRole}
        {secondaryRole && <> &amp; {secondaryRole}</>}
      </p>
      <p
        className={styles.status}
        data-animate=""
        style={
          {
            '--animate-delay': '240ms',
            '--animate-y': '8px',
            '--animate-duration': '400ms',
          } as React.CSSProperties
        }
      >
        {statusText}{' '}
        {statusLink ? (
          <a href={statusLink.url} className={styles.statusLink}>
            {statusLink.label}
          </a>
        ) : null}
      </p>
    </header>
  );
}

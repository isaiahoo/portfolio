import { contactData } from '../../data/data';
import styles from './ContactStrip.module.css';

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect
        x="1"
        y="3"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M1 3.5l7 4.5 7-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 6h2.5v8H2V6zm1.25-5.5A1.25 1.25 0 114.5 1.75 1.25 1.25 0 013.25.5zM6.5 6H9v1.1C9.5 6.5 10.8 6 12 6c2.2 0 3 1.2 3 3.2V14h-2.5v-4.2c0-.6-.4-1.2-1.2-1.2S10 9.2 10 9.8V14H6.5V6z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 .5C3.85.5.5 3.85.5 8c0 3.09 2.01 5.71 4.8 6.64.35.06.48-.15.48-.34v-1.22c-1.96.43-2.37-.95-2.37-.95-.32-.81-1.02-1.22-1.02-1.22-.83-.57.06-.56.06-.56.92.06 1.41.95 1.41.95.82 1.36 2.15.97 2.67.74.08-.58.32-.97.58-1.19-2.04-.23-4.19-1.02-4.19-4.54 0-1 .37-1.82 1-2.47-.1-.24-.43-1.17.1-2.43 0 0 .82-.26 2.68 1-.78-.22-1.61-.33-2.44-.33s-1.66.11-2.44.33C3.26 2.22 4.08 1.96 4.08 1.96c.53 1.26.2 2.19.1 2.43.63.65 1 1.47 1 2.47 0 3.53-2.16 4.3-4.21 4.53.33.28.63.84.63 1.7v2.51c0 .19.12.41.49.34C13.49 13.71 15.5 11.09 15.5 8c0-4.15-3.35-7.5-7.5-7.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactStrip() {
  const { email, linkedinUrl, githubUrl } = contactData;

  return (
    <footer className={styles.strip}>
      <a href={`mailto:${email}`} className={styles.link}>
        <EmailIcon />
        <span>{email}</span>
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <GitHubIcon />
        <span>GitHub</span>
      </a>
    </footer>
  );
}

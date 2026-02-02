import styles from './StatusBadge.module.css';

type StatusVariant = 'live' | 'inProgress';

interface StatusBadgeProps {
  variant: StatusVariant;
}

const labels: Record<StatusVariant, string> = {
  live: 'Live',
  inProgress: 'In Progress',
};

export default function StatusBadge({ variant }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      <span
        className={`${styles.dot} ${variant === 'live' ? styles.dotLive : ''}`}
      />
      {labels[variant]}
    </span>
  );
}

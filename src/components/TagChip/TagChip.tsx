import styles from './TagChip.module.css';

interface TagChipProps {
  label: string;
}

export default function TagChip({ label }: TagChipProps) {
  return <span className={styles.chip}>{label}</span>;
}

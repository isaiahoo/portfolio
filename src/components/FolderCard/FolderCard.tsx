import { type FolderData } from '../../data/data';
import useEasterEgg from '../../hooks/useEasterEgg';
import TagChip from '../TagChip/TagChip';
import styles from './FolderCard.module.css';

interface FolderCardProps {
  data: FolderData;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FolderCard({ data, isOpen, onToggle }: FolderCardProps) {
  const { variant, label, items } = data;
  const { showCursor, showTag, typingText } = useEasterEgg(isOpen, variant);

  return (
    <div className={`${styles.folderContainer} ${styles[variant]}`}>
      <button
        className={`${styles.folder} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${label}`}
      >
        <div className={styles.paper}>
          {variant === 'skills' ? (
            <div className={styles.tagRow}>
              {items.map((item) => (
                <TagChip key={item.id} label={item.label} />
              ))}
              {showTag && (
                <TagChip label={typingText || '\u00A0'} />
              )}
              {showCursor && (
                <span className={styles.cursor}>|</span>
              )}
            </div>
          ) : (
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className={styles.listItem}
                  style={
                    {
                      '--stagger-delay': `${120 + index * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      onClick={(e) => e.stopPropagation()}
                      className={styles.itemLink}
                    >
                      <span className={styles.itemLabel}>{item.label}</span>
                      {item.sublabel && (
                        <span className={styles.itemSublabel}>
                          {item.sublabel}
                        </span>
                      )}
                    </a>
                  ) : (
                    <>
                      <span className={styles.itemLabel}>{item.label}</span>
                      {item.sublabel && (
                        <span className={styles.itemSublabel}>
                          {item.sublabel}
                        </span>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span className={styles.folderLabel}>{label}</span>
      </button>
    </div>
  );
}

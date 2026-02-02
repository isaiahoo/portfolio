import { motion } from 'framer-motion';
import { type FolderData } from '../../data/data';
import useEasterEgg from '../../hooks/useEasterEgg';
import TagChip from '../TagChip/TagChip';
import styles from './FolderCard.module.css';

interface FolderCardProps {
  data: FolderData;
  isOpen: boolean;
  onToggle: () => void;
  animationDelay?: number;
}

export default function FolderCard({ data, isOpen, onToggle, animationDelay = 0 }: FolderCardProps) {
  const { variant, label, items } = data;
  const { showCursor, showTag, typingText } = useEasterEgg(isOpen, variant);

  return (
    <motion.div
      className={`${styles.folderContainer} ${styles[variant]}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: animationDelay
      }}
      whileHover="hover"
    >
      <button
        className={`${styles.folder} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={`${label}`}
      >
        <motion.div
          className={styles.paper}
          variants={{
            rest: { y: 0 },
            hover: {
              y: isOpen ? 0 : -32,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
              }
            }
          }}
        >
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
                      '--stagger-delay': `${150 + index * 80}ms`,
                      '--paper-index': index,
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
        </motion.div>
        <span className={styles.folderLabel}>{label}</span>
      </button>
    </motion.div>
  );
}

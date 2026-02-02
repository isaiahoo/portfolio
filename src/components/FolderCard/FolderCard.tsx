import { motion } from 'framer-motion';
import { type FolderData } from '../../data/data';
import styles from './FolderCard.module.css';

interface FolderCardProps {
  data: FolderData;
  animationDelay?: number;
}

export default function FolderCard({ data, animationDelay = 0 }: FolderCardProps) {
  const { variant, label, items } = data;

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
    >
      <div className={styles.folder}>
        <div className={styles.paper}>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li
                key={item.id}
                className={styles.listItem}
                style={{
                  '--stagger-delay': `${150 + index * 80}ms`,
                  '--paper-index': index
                } as React.CSSProperties}
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
        </div>
        <span className={styles.folderLabel}>{label}</span>
      </div>
    </motion.div>
  );
}

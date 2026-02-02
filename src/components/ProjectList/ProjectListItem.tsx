import { type ProjectData } from '../../data/data';
import StatusBadge from '../StatusBadge/StatusBadge';
import TagChip from '../TagChip/TagChip';
import styles from './ProjectListItem.module.css';

interface ProjectListItemProps extends ProjectData {
  isExpanded: boolean;
  onToggle: () => void;
  animateIndex: number;
}

export default function ProjectListItem({
  name,
  shortDescription,
  longDescription,
  tags,
  status,
  repoUrl,
  demoUrl,
  isExpanded,
  onToggle,
  animateIndex,
}: ProjectListItemProps) {
  return (
    <button
      className={`${styles.item} ${isExpanded ? styles.expanded : ''}`}
      onClick={onToggle}
      aria-expanded={isExpanded}
      data-animate=""
      style={
        {
          '--animate-delay': `${600 + animateIndex * 100}ms`,
          '--animate-y': '0px',
          '--animate-duration': '300ms',
        } as React.CSSProperties
      }
    >
      <div className={styles.header}>
        <div className={styles.nameAndDesc}>
          <span className={styles.name}>{name}</span>
          <span className={styles.shortDesc}>{shortDescription}</span>
        </div>
        <div className={styles.badges}>
          {status && <StatusBadge variant={status} />}
          <div className={styles.tags}>
            {tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.detail}>
        <p className={styles.longDesc}>{longDescription}</p>
        <div className={styles.links}>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              → View Repo
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              → Live Demo
            </a>
          )}
        </div>
      </div>
    </button>
  );
}

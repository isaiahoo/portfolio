import { folderData } from '../../data/data';
import FolderCard from '../FolderCard/FolderCard';
import styles from './FolderGrid.module.css';

export default function FolderGrid() {
  return (
    <div className={styles.grid}>
      {folderData.map((folder, index) => (
        <FolderCard
          key={folder.id}
          data={folder}
          animationDelay={index * 0.15}
        />
      ))}
    </div>
  );
}

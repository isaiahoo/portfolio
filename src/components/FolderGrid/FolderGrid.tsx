import { useState } from 'react';
import { folderData } from '../../data/data';
import FolderCard from '../FolderCard/FolderCard';
import styles from './FolderGrid.module.css';

export default function FolderGrid() {
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);

  return (
    <div className={styles.grid}>
      {folderData.map((folder, index) => (
        <FolderCard
          key={folder.id}
          data={folder}
          isOpen={openFolderId === folder.id}
          onToggle={() =>
            setOpenFolderId((prev) =>
              prev === folder.id ? null : folder.id
            )
          }
          animationDelay={index * 0.15}
        />
      ))}
    </div>
  );
}

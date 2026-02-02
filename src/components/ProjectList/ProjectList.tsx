import { useState } from 'react';
import { projectData } from '../../data/data';
import ProjectListItem from './ProjectListItem';
import styles from './ProjectList.module.css';

export default function ProjectList() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.list}>
        {projectData.map((project, index) => (
          <ProjectListItem
            key={project.id}
            {...project}
            animateIndex={index}
            isExpanded={expandedProjectId === project.id}
            onToggle={() =>
              setExpandedProjectId((prev) =>
                prev === project.id ? null : project.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

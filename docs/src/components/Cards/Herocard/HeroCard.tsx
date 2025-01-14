import React from 'react';
import styles from './HeroCard.module.css';

type HeroCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  isLoading?: boolean; // Optional prop to show loading skeleton
};

const LoadingSkeleton = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonTitle}></div>
    <div className={styles.skeletonDescription}></div>
  </div>
);

const HeroCard: React.FC<HeroCardProps> = ({ title, description, children, isLoading }) => {
  return (
    <article className={styles.card} role="article">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className={styles.cardContent} aria-label={title}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
          {children && <div className={styles.cardChildren}>{children}</div>}
        </div>
      )}
    </article>
  );
};

export default HeroCard;

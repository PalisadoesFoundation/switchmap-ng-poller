import React from 'react';
import styles from './HeroCard.module.css';

type HeroCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode; 
  isLoading?: boolean;

};

const HeroCard: React.FC<HeroCardProps> = ({ title, description, children }) => {
  return (
    <article className={styles.card} role="article">
       <div className={styles.cardContent} aria-label={title}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        {children && <div className={styles.cardChildren}>{children}</div>}
      </div>
    </article>
  );
};

export default HeroCard;

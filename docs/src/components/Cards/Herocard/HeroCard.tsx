import React from 'react';
import styles from './HeroCard.module.css';

type HeroCardProps = {
  title: string;
  description: string;
  imageUrl?: string; // Optional: URL for a card image
  children?: React.ReactNode; // Optional: For adding custom content inside the card
};

const HeroCard: React.FC<HeroCardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        {children && <div className={styles.cardChildren}>{children}</div>}
      </div>
    </div>
  );
};

export default HeroCard;

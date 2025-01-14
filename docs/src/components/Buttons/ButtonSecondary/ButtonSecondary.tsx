import React from 'react';
import styles from './Secondary.module.css';

type SecondaryButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button 
      className={`${styles.SecondaryButton} ${disabled ? styles.disabled : ''}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;

import React from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button 
      className={`${styles.primaryButton} ${disabled ? styles.disabled : ''}`} 
      onClick={onClick} 
      disabled={disabled}
      role="button"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;

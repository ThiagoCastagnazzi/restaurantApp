import React from 'react';
import styles from './styles.module.css';

const Label = ({ name, label }) => {
  return (
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
  );
};

export default Label;

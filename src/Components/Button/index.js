import React from 'react';
import styles from './styles.module.css';

const index = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default index;

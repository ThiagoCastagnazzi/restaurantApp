import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="logo.png" alt="" className={styles.logo} />
      </a>
      <span className={styles.org}>MITG</span>
    </header>
  );
};

export default Header;

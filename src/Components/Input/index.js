import React from 'react';
import styles from './styles.module.css';

const Input = ({ id, name, type, onBlur }) => {
  const [value, setValue] = React.useState('');
  return (
    <input
      id={name}
      name={name}
      type={type}
      className={styles.input}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onBlur={onBlur}
      size="40"
    ></input>
  );
};

export default Input;

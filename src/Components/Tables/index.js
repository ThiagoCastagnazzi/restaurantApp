import React from 'react';
import styles from './styles.module.css';

const index = ({ id, status, valor_gasto }) => {
  return (
    <div className={styles.table} data-id={id} data-valor_gasto={valor_gasto}>
      <div className={status ? styles.red : styles.yellow}>
        <h3> Mesa: {id}</h3>
      </div>
      <div>
        {status ? (
          <span>{convertFloatToString(valor_gasto)}</span>
        ) : (
          <span>Livre</span>
        )}
      </div>
    </div>
  );
};

function convertFloatToString(valor) {
  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valor);
  //return String(valor).replace('.', ',');
}

export default index;

import React from 'react';
import Tables from '../../Components/Tables';
import styles from './styles.module.css';

let dados = [
  { id: 1, status: 1, observacao: 'Nenhuma', valor_gasto: 30.0, empresa: 1 },
  { id: 2, status: 1, observacao: 'Nenhuma', valor_gasto: 20.0, empresa: 1 },
  { id: 3, status: 1, observacao: 'Nenhuma', valor_gasto: 40.0, empresa: 1 },
  { id: 4, status: 1, observacao: 'Nenhuma', valor_gasto: 50.0, empresa: 1 },
  { id: 5, status: 1, observacao: 'Nenhuma', valor_gasto: 60.35, empresa: 1 },
  { id: 6, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 7, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 8, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 9, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 10, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 11, status: 1, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 12, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 13, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 14, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
  { id: 15, status: 0, observacao: 'Nenhuma', valor_gasto: 0.0, empresa: 1 },
];

const index = () => {
  return (
    <div>
      <h1 className="text-center"> Mesas </h1>
      <div className={styles.main}>
        {dados.map(({ id, status, valor_gasto }) => {
          return (
            <Tables
              key={id}
              status={status}
              id={id}
              valor_gasto={valor_gasto}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;

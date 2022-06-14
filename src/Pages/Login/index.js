import React from 'react';
import styles from './styles.module.css';
import Label from '../../Components/Label';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import '../../App.css';

const index = () => {
  return (
    <section className={`${styles.login} container`}>
      <form className={styles.form}>
        <Label name="name" label="Nome" />
        <Input id="nome" name="nome" type="text" />
        <Label name="password" label="Senha" />
        <Input id="password" name="password" type="password" />
        <Button>Entrar</Button>
        <div className={styles.link}>
          <a className={styles.link} href="/">
            Cadastre-se
          </a>
          <a className={styles.link} href="/">
            Esqueci minha senha
          </a>
        </div>
      </form>
      <img className={styles.login} src="pizza-background.jpeg" alt="" />
    </section>
  );
};

export default index;

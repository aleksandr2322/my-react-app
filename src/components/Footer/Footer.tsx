import React from "react";
import styles from "../../assets/styles/Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.foot_all}>
      <div className={styles.footer__right}>
        <p className={styles.footer__text}>talentmagnet.com</p>
        <p className={styles.footer__text}>Мы поддерживаем команду самых разных молодых креативщиков и инженеров.</p>
        <p className={styles.footer__text}>© 2023 talentmagnet.com Авторское право и все остальные права защищены.</p>
      </div>
      <div className={styles.foot_left}>
        <a className={styles.footer__link} href="#terms">Условия и положения</a> · 
        <a className={styles.footer__link} href="#privacy">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
);

export default Footer;
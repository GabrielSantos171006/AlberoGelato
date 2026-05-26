import styles from '../app/page.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img src="https://www.adgelati.com.br/wp-content/uploads/2019/07/alberodeigelati-mobile.png" alt="Logo Gelateria" />
      <h1>Gelatos artesanais premium</h1>
    </section>
  );
}

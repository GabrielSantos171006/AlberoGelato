import styles from '../app/page.module.css';

export default function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <h1>Sobre nós</h1>
      <div className={styles['sobre-conteudo']}>
        <img src="https://revistamenu.com.br/wp-content/uploads/sites/24/2024/03/albero-dei-gelati-rua-dos-pinheiros-bruno-geraldi-1.jpg" alt="Interior da Gelateria" />
        
        <div className={styles.textos}>
          <div>
            <h3>História</h3>
            <p>Nascemos do desejo de elevar o sorvete a uma obra de arte gastronômica. Mais do que uma gelateria, somos um laboratório de sabores.</p>
          </div>
          <div>
            <h3>Técnicas</h3>
            <p>A excelência está nos detalhes. Respeitamos o tempo exato de maturação das nossas bases e o ponto perfeito de congelamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

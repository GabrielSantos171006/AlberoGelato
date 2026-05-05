'use client';
import styles from "./page.module.css";

import { useState } from 'react';
// Se você for usar o CSS global, o layout.js já deve estar importando o globals.css.
// Portanto, não precisamos importar o page.module.css aqui.

export default function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState('all');

  const produtos = [
    { id: 1, category: 'fruta', img: 'https://revistaanamaria.com.br/wp-content/uploads/2024/02/gelato-de-morango.jpg', nome: 'Morango', alt: 'Gelato de Morango' },
    { id: 2, category: 'chocolate', img: 'https://chefrichardrobert.wordpress.com/wp-content/uploads/2018/11/sorv.jpg', nome: 'Chocolate Belga', alt: 'Gelato de Chocolate Belga' },
    { id: 3, category: 'fruta', img: 'https://panelaterapia.com/wp-content/uploads/2012/12/manga.png', nome: 'Manga', alt: 'Gelato de Manga' }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsappClick = () => {
    alert("Não disponível no momento");
  };

  const produtosFiltrados = produtos.filter(
    produto => filtroAtivo === 'all' || produto.category === filtroAtivo
  );

  return (
    <>
      <header>
        <div><strong>Gelato</strong></div>
        <nav>
          <a href="#sobre" onClick={(e) => handleScroll(e, '#sobre')}>Sobre nós</a>
          <a href="#produtos" onClick={(e) => handleScroll(e, '#produtos')}>Produtos</a>
        </nav>
      </header>

      <section className={styles.banner}>
        <img src="https://www.adgelati.com.br/wp-content/uploads/2019/07/alberodeigelati-mobile.png" alt="Logo Gelateria" />
        <h1>Gelatos artesanais premium</h1>
      </section>

      <section className={styles.sobre} id={styles.sobre}>
        <h1>Sobre nós</h1>
        <div className={styles.sobre-conteudo}>
          <img src="https://revistamenu.com.br/wp-content/uploads/sites/24/2024/03/albero-dei-gelati-rua-dos-pinheiros-bruno-geraldi-1.jpg" alt="Interior da Gelateria" />
          
          <div className={styles.textos}>
            <div>
              <h3>História</h3>
              <p>Nascemos do desejo de elevar o sorvete a uma obra de arte gastronômica. Mais do que uma gelateria, somos um laboratório de sabores. Buscamos incansavelmente a combinação perfeita entre o clássico e o contemporâneo para surpreender os paladares mais exigentes.</p>
            </div>
            
            <div>
              <h3>Técnicas</h3>
              <p>A excelência está nos detalhes. Respeitamos o tempo exato de maturação das nossas bases e o ponto perfeito de congelamento. O resultado é um gelato de alta densidade, com menos ar e uma cremosidade que derrete suavemente, liberando camadas intensas de sabor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.produtos} id={styles.produtos}>
        <h1>Produtos</h1>
        
        <div className={styles.filtros}>
          <button 
            className={`${styles.filtro} ${filtroAtivo === styles.all ? styles.ativo : ''}`} 
            onClick={() => setFiltroAtivo('all')}
          >
            Todos
          </button>
          <button 
            className={`${styles.fruta} ${filtroAtivo === 'fruta' ? styles.ativo : ''}`}
            onClick={() => setFiltroAtivo('fruta')}
          >
            Frutas
          </button>
          <button 
            lassName={`${filtroAtivo === 'chocolate' ? styles.ativo : ''}`} 
            onClick={() => setFiltroAtivo('chocolate')}
          >
            Chocolate
          </button>
        </div>

        <div className={styles.cards}>
          {produtosFiltrados.map((produto) => (
            <div className={styles.card} key={produto.id}>
              <img src={produto.img} alt={produto.alt} />
              <div className={styles.box}></div>
              <p>{produto.nome}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <strong>Gelato</strong><br />
          Rua: Joaquim Antunes, 391 – CEP: 05415-010
        </div>
        
        <div className={styles.redes}>
          <a href="https://www.instagram.com/albero_br/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          
          <a href="https://www.facebook.com/albero.br/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          
          <img 
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
            alt="WhatsApp" 
            style={{ cursor: 'pointer' }}
            onClick={handleWhatsappClick} 
          />
        </div>
      </footer>
    </>
  );
}
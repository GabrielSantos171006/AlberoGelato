'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';
import { produtosData } from '../data/produtos';

export default function SecaoProdutos() {
  const [filtroAtivo, setFiltroAtivo] = useState('all');

  // Filtra os produtos com base na categoria ativa
  const produtosFiltrados = produtosData.filter(
    produto => filtroAtivo === 'all' || produto.category === filtroAtivo
  );

  return (
    <section className={styles.produtos} id="produtos">
      <h1>Nossos Gelatos</h1>
      <p className={styles.subtituloSecao}>Escolha sua categoria favorita e descubra os sabores</p>
      
      {/* NOVOS FILTROS ADICIONADOS */}
      <div className={styles.filtros}>
        <button 
          className={filtroAtivo === 'all' ? styles.ativo : ''} 
          onClick={() => setFiltroAtivo('all')}
        >
          Todos
        </button>
        <button 
          className={filtroAtivo === 'leite' ? styles.ativo : ''} 
          onClick={() => setFiltroAtivo('leite')}
        >
          À Base de Leite
        </button>
        <button 
          className={filtroAtivo === 'fruta' ? styles.ativo : ''} 
          onClick={() => setFiltroAtivo('fruta')}
        >
          À Base de Água (Frutas)
        </button>
        <button 
          className={filtroAtivo === 'chocolate' ? styles.ativo : ''} 
          onClick={() => setFiltroAtivo('chocolate')}
        >
          Chocolates
        </button>
      </div>

      <div className={styles.cards}>
        {produtosFiltrados.map((produto) => (
          <Link href={`/produto/${produto.id}`} key={produto.id} style={{ textDecoration: 'none' }}>
            <div className={styles.card}>
              <div className={styles.containerImagem}>
                <img src={produto.img} alt={produto.nome} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.tagCategoria}>
                  {produto.category === 'fruta' ? 'água' : produto.category}
                </span>
                <h3>{produto.nome}</h3>
                <p className={styles.precoCard}>{produto.preco}</p>
                <span className={styles.btnVerMais}>Ver Detalhes</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
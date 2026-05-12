'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css'; // Ajuste o caminho do CSS se necessário
import { produtosData } from './data/produtos';

export default function SecaoProdutos() {
  const [filtroAtivo, setFiltroAtivo] = useState('all');

  const produtosFiltrados = produtosData.filter(
    produto => filtroAtivo === 'all' || produto.category === filtroAtivo
  );

  return (
    <section className={styles.produtos} id="produtos">
      <h1>Produtos</h1>
      
      <div className={styles.filtros}>
        <button onClick={() => setFiltroAtivo('all')}>Todos</button>
        <button onClick={() => setFiltroAtivo('fruta')}>Frutas</button>
        <button onClick={() => setFiltroAtivo('chocolate')}>Chocolate</button>
      </div>

      <div className={styles.cards}>
        {produtosFiltrados.map((produto) => (
          /* O href aponta para a rota dinâmica que vamos criar */
          <Link href={`/produto/${produto.id}`} key={produto.id}>
            <div className={styles.card}>
              <img src={produto.img} alt={produto.nome} />
              <p>{produto.nome}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

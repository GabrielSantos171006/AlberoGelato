import Link from 'next/link';
import Header from '../../../components/Header';
import { produtosData } from '../../../data/produtos';
import styles from '../../page.module.css';

export default async function ProdutoDetalhe({ params }) {
  const parametros = await params;
  const produtoId = parseInt(parametros.id);
  const produto = produtosData.find(p => p.id === produtoId);

  if (!produto) {
    return (
      <>
        <Header />
        <main style={{ padding: '100px', textAlign: 'center' }}>
          <h1>Produto não encontrado :(</h1>
          <Link href="/" className={styles.btnVoltar}>
            Voltar para a Home
          </Link>
        </main>
      </>
    );
  }

  return (
    <div style={{ background: '#fdfaf6', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <Link href="/" className={styles.btnVoltar}>
          &larr; Voltar para o menu
        </Link>

        <div style={{ display: 'flex', gap: '40px', marginTop: '30px', flexWrap: 'wrap' }}>
          
          {/* Coluna 1: Imagem */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src={produto.img} 
              alt={produto.nome} 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
            />
          </div>

          {/* Coluna 2: Informações */}
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            <h1 style={{ color: '#4b2e2b', fontSize: '2.5rem', marginBottom: '10px' }}>{produto.nome}</h1>
            <p style={{ color: '#6f4e37', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>{produto.preco}</p>
            
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
              {produto.descricao}
            </p>

            <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #6f4e37', marginBottom: '25px' }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>Ingredientes:</strong> {produto.ingredientes}
              </p>
              <p>
                <strong>Informações de Dieta:</strong> <span style={{ color: '#d9534f', fontWeight: 'bold' }}>{produto.alergenicos}</span>
              </p>
            </div>

            {/* BOTÃO DO IFOOD */}
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/albero-dei-gelati---sorvete-italiano-pinheiros/dbc921ee-576d-427e-aa05-9f116a1f34f6"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                padding: '15px 30px', 
                background: '#ea1d2c', 
                color: '#fff', 
                borderRadius: '8px', 
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(234,29,44,0.3)'
              }}
            >
              Pedir no iFood
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
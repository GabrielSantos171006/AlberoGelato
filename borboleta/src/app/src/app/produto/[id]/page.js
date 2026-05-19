import Link from 'next/link';
import Header from '../../../components/Header';
import { produtosData } from '../../../data/produtos';

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
          <Link href="/">
            <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
              Voltar para a Home
            </button>
          </Link>
        </main>
      </>
    );
  }

  return (
    <div style={{ background: '#fdfaf6', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <Link href="/" style={{ textDecoration: 'none', color: '#6f4e37', fontWeight: 'bold', fontSize: '1.1rem' }}>
          &larr; Voltar para o menu
        </Link>

        <div style={{ display: 'flex', gap: '40px', marginTop: '30px', flexWrap: 'wrap' }}>
          
          {/* Coluna 1: Imagem */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src={produto.img} 
              alt={`Gelato de ${produto.nome}`} 
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover', 
                borderRadius: '15px', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)' 
              }} 
            />
          </div>

          {/* Coluna 2: Informações */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <span style={{ 
              background: '#d2b48c', 
              color: '#3e2c23', 
              padding: '5px 15px', 
              borderRadius: '20px', 
              fontSize: '0.9rem', 
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              textTransform: 'uppercase'
            }}>
              A base de {produto.category === 'fruta' ? 'água' : 'leite'}
            </span>

            <h1 style={{ color: '#4b2e2b', fontSize: '3rem', margin: '15px 0' }}>
              {produto.nome}
            </h1>
            
            <h2 style={{ color: '#6f4e37', fontSize: '2rem', marginBottom: '20px' }}>
              {produto.preco}
            </h2>

            <p style={{ color: '#3e2c23', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
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

            {/* BOTÃO DO IFOOD RECONFIGURADO */}
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/albero-dei-gelati---sorvete-italiano-pinheiros/dbc921ee-576d-427e-aa05-9f116a1f34f6" /* ⬅️ SUBSITUA ESTE LINK PELO LINK REAL DA LOJA */
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textAlign: 'center',
                textDecoration: 'none',
                padding: '15px 30px', 
                background: '#ea1d2c', /* Vermelho característico do iFood */
                color: '#fff', 
                borderRadius: '8px', 
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(234, 29, 44, 0.3)',
                transition: 'background 0.3s'
              }}
            >
              Pedir pelo iFood
            </a>

          </div>
        </div>
      </main>
    </div>
  );
}
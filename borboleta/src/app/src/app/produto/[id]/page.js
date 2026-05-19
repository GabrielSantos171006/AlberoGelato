import Link from 'next/link';
import Header from '../../../components/Header';
import { produtosData } from '../../../data/produtos';

// 1. Adicionamos a palavra 'async' antes da função
export default async function ProdutoDetalhe({ params }) {
  
  // 2. Usamos 'await' para esperar o Next.js carregar os parâmetros da URL
  const parametros = await params;
  
  // 3. Agora sim convertemos o ID para número e fazemos a busca
  const produtoId = parseInt(parametros.id);
  const produto = produtosData.find(p => p.id === produtoId);

  // Se o ID não existir, mostra a mensagem de erro
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

  // Se encontrar, renderiza a página do produto
  return (
    <>
      <Header />
      <main style={{ padding: '50px', textAlign: 'center', background: '#fdfaf6', minHeight: '80vh' }}>
        <img 
          src={produto.img} 
          alt={produto.nome} 
          style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} 
        />
        <h1 style={{ color: '#4b2e2b', marginTop: '20px', fontSize: '2.5rem' }}>
          Gelato de {produto.nome}
        </h1>
        <p style={{ color: '#6f4e37', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Categoria: {produto.category}
        </p>
        
        <p style={{ maxWidth: '600px', margin: '20px auto', color: '#3e2c23' }}>
          Uma deliciosa e refrescante opção artesanal feita com ingredientes selecionados. 
          Perfeito para os amantes de gelatos premium da categoria {produto.category}.
        </p>
        
        <Link href="/">
          <button style={{ 
            marginTop: '30px', 
            padding: '12px 25px', 
            background: '#6f4e37', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '25px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            &larr; Voltar para os sabores
          </button>
        </Link>
      </main>
    </>
  );
}
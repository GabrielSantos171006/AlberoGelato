import Link from 'next/link';
import Header from '../../../components/Header';
import { produtosData } from '../../../data/produtos';

// A prop "params" contém o que foi passado na URL
export default function ProdutoDetalhe({ params }) {
  // Converte o ID da URL para número e busca no array
  const produtoId = parseInt(params.id);
  const produto = produtosData.find(p => p.id === produtoId);

  // Se o ID não existir, mostra mensagem de erro
  if (!produto) {
    return <h1>Produto não encontrado</h1>;
  }

  // Se o ID existir, renderiza a página com os dados dele
  return (
    <>
      <Header />
      <main style={{ padding: '50px', textAlign: 'center' }}>
        <img src={produto.img} alt={produto.nome} style={{ width: '300px' }} />
        <h1>Gelato de {produto.nome}</h1>
        <p>Categoria: {produto.category}</p>
        
        <Link href="/">
          <button style={{ marginTop: '20px' }}>Voltar para Home</button>
        </Link>
      </main>
    </>
  );
}

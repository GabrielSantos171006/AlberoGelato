import Header from '../components/Header';
import SecaoProdutos from '../components/SecaoProdutos';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Adicione seu componente Banner e Sobre aqui depois */}
        <SecaoProdutos />
      </main>
    </>
  );
}
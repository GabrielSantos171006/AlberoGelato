import Header from '../components/Header';
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';
import SecaoProdutos from '../components/SecaoProdutos';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Sobre />
        <SecaoProdutos />
      </main>
    </>
  );
}

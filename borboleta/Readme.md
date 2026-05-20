# Albero Gelato

---

## Integrantes

- Gabriel Gomes dos Santos (10748012)  
- Kaue Trigolo Damaceno (10748319)  
- Henrique Orlando da Silva Rosa (10753777)  
- Pedro Pizane Stach Ferreira (10753060)

---

## Processo de Ideação

O processo de ideação deste projeto partiu da necessidade de profissionalizar a presença digital da gelateria Albero Gelato.

Atualmente, muitas das informações do negócio encontram-se dispersas em redes sociais, o que dificulta o acesso rápido por parte dos clientes. A partir disso, o grupo identificou a oportunidade de centralizar essas informações em uma plataforma web moderna, funcional e intuitiva.

A proposta do projeto vai além de um site institucional, buscando criar uma ferramenta que contribua diretamente para a experiência do usuário, permitindo acesso facilitado ao cardápio, informações da loja e canais de contato.

Com a evolução do projeto (Etapa 2), foi introduzido o conceito de aplicação dinâmica, onde os dados deixam de ser estáticos e passam a ser consumidos via API, simulando um cenário real de mercado.

---

## Evolução do Projeto (Etapa 2)

Nesta etapa, o projeto foi evoluído de um site estático para uma aplicação web estruturada, com foco em dinamismo e escalabilidade.

As principais melhorias planejadas foram:

- Separação entre interface e dados  
- Consumo de informações via API interna  
- Estruturação de rotas utilizando Next.js  

Foram definidas as seguintes rotas:

- **Rota simples:** `/sobre`  
- **Rota dinâmica:** `/produtos/[id]`  

A rota dinâmica permite que cada produto possua sua própria página, carregando suas informações de forma individual a partir de um identificador único.

Essa abordagem torna a aplicação mais próxima de sistemas reais utilizados no mercado.

---

## Caráter Extensionista

O projeto possui caráter extensionista ao aplicar conhecimentos acadêmicos para apoiar diretamente uma empreendedora autônoma.

Ao desenvolver uma solução digital para a gelateria, o grupo contribui para:

- Fortalecimento da presença digital do negócio  
- Aumento da visibilidade da marca  
- Melhoria na comunicação com clientes  
- Incentivo ao empreendedorismo feminino  

Dessa forma, o projeto gera impacto social e econômico, conectando a universidade com a comunidade.

---

## Protótipo - Wireframe (Etapa 2)

### Página Inicial (Home)

> <img width="296" height="560" alt="image" src="https://github.com/user-attachments/assets/aa3d20be-fe89-4907-92e4-daa3d645d35d" />

**Descrição da Interface:**
A página inicial apresenta um cabeçalho com o nome da gelateria e um menu de navegação, permitindo acesso às páginas "Início", "Sobre" e "Produtos".
Logo abaixo, há um banner principal com destaque visual e uma chamada para ação, direcionando o usuário para o cardápio.
Na sequência, encontra-se a seção de filtros, onde o usuário pode selecionar categorias de produtos (como frutas ou chocolate), influenciando diretamente os itens exibidos na tela.
Os produtos são apresentados em formato de cards, contendo imagem e nome. Esses dados são carregados dinamicamente por meio de uma API interna.

**Navegação:**
Ao clicar em um produto, o usuário é redirecionado para uma página individual, utilizando uma rota dinâmica baseada no ID do item (`/produtos/[id]`).
O menu superior permite navegar para a página "Sobre", enquanto o botão de ação no banner pode direcionar para a seção de produtos.

**Comportamento:**
- Os produtos são atualizados dinamicamente via API  
- O filtro altera os itens exibidos sem recarregar a página  
- A navegação entre páginas ocorre de forma direta pelo menu e pelos cards

---

### Página Sobre (/sobre)

<img width="293" height="403" alt="image" src="https://github.com/user-attachments/assets/4d62f37b-fdd7-4786-8a60-1636a4fc2bc5" />

**Descrição da Interface:**
A página "Sobre" mantém o mesmo cabeçalho da página inicial, garantindo consistência na navegação.
O conteúdo principal apresenta informações institucionais da gelateria, como história, proposta e métodos de produção, organizados em blocos de texto e imagem para facilitar a leitura.

**Navegação:**
O acesso a essa página é feito por meio do menu superior (rota simples: `/sobre`).
O usuário pode retornar à página inicial ou navegar para outras seções utilizando o mesmo menu presente no topo.

**Comportamento:**
- Página estática (não depende de API)  
- Conteúdo fixo, voltado para apresentação institucional  
- Mantém padrão visual e estrutural do restante da aplicação

---

### Página de Produto (/produtos/[id])

<img width="307" height="401" alt="image" src="https://github.com/user-attachments/assets/bfdc1fe6-046f-4428-a466-77f2001f86a2" />

**Descrição da Interface:**
A página de produto apresenta um layout focado no item selecionado, exibindo sua imagem em destaque, nome, categoria e descrição detalhada.
As informações são organizadas de forma clara para facilitar a visualização e compreensão do produto.

**Navegação:**
Essa página é acessada a partir do clique em um produto na página inicial.
A navegação ocorre por meio de uma rota dinâmica (`/produtos/[id]`), onde o ID do produto define qual conteúdo será exibido.
Também há um botão ou opção de retorno, permitindo que o usuário volte para a listagem de produtos.

**Comportamento:**
- Ao carregar a página, o sistema identifica o ID presente na URL  
- Uma requisição é feita à API para buscar os dados do produto específico  
- O conteúdo exibido é gerado dinamicamente com base na resposta da API  
- Cada produto possui uma página única sem necessidade de criação manual de múltiplas páginas

---

## Fluxo de navegação

**Descrição da Interface:**
O fluxo representa a estrutura de navegação entre as páginas da aplicação.
Ele demonstra como o usuário percorre o sistema desde a página inicial até páginas internas.

**Navegação:**
- Home → acesso principal  
- Home → Sobre (via menu)  
- Home → Produto (via clique em card)  
- Produto → retorno para Home  

**Comportamento:**
- A navegação é baseada em rotas do Next.js  
- A rota dinâmica permite múltiplos produtos com uma única estrutura  
- O fluxo foi pensado para ser simples e intuitivo, reduzindo a quantidade de cliques necessários

---

## 💻 Arquitetura e Códigos-Fonte

Abaixo está o detalhamento de cada arquivo que compõe a aplicação desenvolvida nesta Etapa 2.

### 1. Banco de Dados Local (API Interna)
Arquivo responsável por armazenar as informações de todos os produtos, permitindo o carregamento dinâmico e o roteamento baseado em IDs.

**Arquivo:** `src/data/produtos.js`
```javascript
export const produtosData = [
  { 
    id: 1, 
    category: 'fruta', 
    img: '[https://images.unsplash.com/photo-1567206563066-11633932eedc?q=80&w=600](https://images.unsplash.com/photo-1567206563066-11633932eedc?q=80&w=600)', 
    nome: 'Fragola',
    preco: 'R$ 18,00',
    descricao: 'Feito com morangos frescos orgânicos selecionados a dedo. Uma explosão de sabor natural e muito refrescante.',
    ingredientes: 'Água, morangos frescos, açúcar orgânico e suco de limão.',
    alergenicos: 'Zero lactose. Não contém glúten.'
  },
  { 
    id: 2, 
    category: 'chocolate', 
    img: '[https://chefrichardrobert.wordpress.com/wp-content/uploads/2018/11/sorv.jpg](https://chefrichardrobert.wordpress.com/wp-content/uploads/2018/11/sorv.jpg)', 
    nome: 'Chocolate Belga',
    preco: 'R$ 22,00',
    descricao: 'O clássico e sofisticado cacau belga 70%. Textura aveludada, alta densidade e um sabor intenso que derrete na boca.',
    ingredientes: 'Leite integral, creme de leite fresco, cacau em pó belga 70%, açúcar e gema de ovo.',
    alergenicos: 'Contém lactose. Contém derivados de leite e ovo.'
  },
  { 
    id: 3, 
    category: 'fruta', 
    img: '[https://panelaterapia.com/wp-content/uploads/2012/12/manga.png](https://panelaterapia.com/wp-content/uploads/2012/12/manga.png)', 
    nome: 'Manga',
    preco: 'R$ 18,00',
    descricao: 'A verdadeira essência do verão. Preparado com mangas Palmer bem maduras, entregando uma cremosidade surpreendente para um sorbet.',
    ingredientes: 'Água, polpa de manga Palmer in natura, açúcar e um toque de maracujá.',
    alergenicos: 'Zero lactose. Não contém glúten. Produto vegano.'
  },
  { 
    id: 4, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600](https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600)', 
    nome: 'Café Branco',
    preco: 'R$ 20,00',
    descricao: 'Uma infusão inovadora onde os grãos de café especial maturam diretamente no leite fresco.',
    ingredientes: 'Leite integral, creme de leite fresco, grãos de café especial e açúcar.',
    alergenicos: 'Contém lactose. Contém derivados de leite.'
  },
  { 
    id: 5, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=600](https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=600)', 
    nome: 'Banana com Crocante',
    preco: 'R$ 20,00',
    descricao: 'Gelato cremoso de banana caramelizada artesanalmente, combinado com pedaços crocantes de castanhas salpicadas.',
    ingredientes: 'Leite integral, banana in natura, açúcar, creme de leite e crocante de castanhas.',
    alergenicos: 'Contém lactose. Contém castanhas e derivados de leite.'
  },
  { 
    id: 6, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600](https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600)', 
    nome: 'Gelato Canastra',
    preco: 'R$ 22,00',
    descricao: 'Uma homenagem à gastronomia brasileira. Gelato suave feito com o autêntico Queijo da Canastra.',
    ingredientes: 'Leite integral, Queijo da Canastra artesanal, creme de leite fresco e açúcar.',
    alergenicos: 'Contém lactose. Contém derivados de leite.'
  },
  { 
    id: 7, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600](https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600)', 
    nome: 'Pistache',
    preco: 'R$ 24,00',
    descricao: 'O ouro verde das gelaterias. Feito com uma pasta pura de pistaches selecionados.',
    ingredientes: 'Leite integral, creme de leite fresco, pasta pura de pistache e açúcar.',
    alergenicos: 'Contém lactose. Contém pistache e derivados de leite.'
  },
  { 
    id: 8, 
    category: 'fruta', 
    img: '[https://images.unsplash.com/photo-1560252813-c676679d494a?q=80&w=600](https://images.unsplash.com/photo-1560252813-c676679d494a?q=80&w=600)', 
    nome: 'Cambuci',
    preco: 'R$ 18,00',
    descricao: 'Sorbet refrescante feito com o fruto nativo Cambuci. Apresenta uma acidez cítrica perfeita.',
    ingredientes: 'Água, polpa de Cambuci pura, açúcar orgânico.',
    alergenicos: 'Zero lactose. Não contém glúten. Produto vegano.'
  },
  { 
    id: 9, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=600](https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=600)', 
    nome: 'Spirulina',
    preco: 'R$ 20,00',
    descricao: 'Um gelato superalimento de tom azul-esverdeado natural.',
    ingredientes: 'Leite integral, creme de leite, extrato natural de baunilha, spirulina azul e açúcar.',
    alergenicos: 'Contém lactose. Contém derivados de leite.'
  },
  { 
    id: 10, 
    category: 'leite', 
    img: '[https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600](https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600)', 
    nome: 'Gelato Uvaia',
    preco: 'R$ 20,00',
    descricao: 'A perfeita união da cremosidade do leite com o toque aveludado e levemente ácido da Uvaia.',
    ingredientes: 'Leite integral, polpa de uvaia, creme de leite fresco e açúcar.',
    alergenicos: 'Contém lactose. Contém derivados de leite.'
  }
];
```
2. Estilização Global
Contém as regras genéricas de tipografia, resets, design responsivo para cabeçalho e rodapé.

Arquivo: src/app/globals.css

```
/* SCROLL SUAVE PARA OS LINKS DO MENU */
html {
    scroll-behavior: smooth;
}

/* RESET BÁSICO E PADRÕES */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fdfaf6;
    color: #3e2c23;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

/* HEADER */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: #4b2e2b;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.logoContainer strong {
    font-size: 1.6rem;
    font-family: 'Georgia', serif;
    letter-spacing: 1px;
    text-transform: uppercase;
}

nav {
    display: flex;
    gap: 20px;
}

nav a {
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

nav a:hover {
    color: #d2b48c;
}

/* FOOTER */
footer {
    background: #4b2e2b;
    color: #fff;
    padding: 30px 40px;
    margin-top: auto; /* Empurra o footer pro final da tela caso a página seja curta */
}

.footerConteudo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footerInfo strong {
    font-size: 1.3rem;
    display: inline-block;
    margin-bottom: 10px;
}

.footerInfo p {
    font-size: 0.9rem;
    opacity: 0.8;
}

.footerRedes {
    text-align: right;
}

.iconesRedes {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    justify-content: flex-end;
}

/* TRAVA DE TAMANHO DOS ÍCONES (AGORA GLOBAL E COM CORES ORIGINAIS!) */
.iconesRedes img {
    width: 32px !important;
    height: 32px !important;
    object-fit: contain;
    transition: transform 0.3s;
    cursor: pointer;
}

.iconesRedes img:hover {
    transform: scale(1.15);
}

.footerDireitos {
    width: 100%;
    text-align: center;
    padding-top: 15px;
    font-size: 0.8rem;
    opacity: 0.5;
}

/* RESPONSIVO (TELAS DE CELULAR) */
@media(max-width: 768px) {
    header {
        flex-direction: column;
        padding: 15px 20px;
        gap: 15px;
    }

    .footerConteudo {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .footerRedes {
        text-align: center;
    }

    .iconesRedes {
        justify-content: center;
    }
}
```
3. Estilos Modulares (CSS Modules)
Estilos focados exclusivamente para a renderização interna da página inicial, sem conflito de classes.

Arquivo: src/app/page.module.css
```
/* BANNER - AGORA COM COR SÓLIDA */
.banner {
    background: #5c3a21; /* Cor sólida de chocolate quente */
    text-align: center;
    padding: 100px 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
}

.banner img {
    width: 120px;
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
}

.banner h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.3); /* Sombra mais suave */
}

/* SOBRE */
.sobre {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.sobre h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    color: #4b2e2b;
}

.sobre-conteudo {
    display: flex;
    align-items: center;
    gap: 40px;
}

.sobre-conteudo img {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    object-fit: cover;
}

.textos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
}

.textos div {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-left: 5px solid #d2b48c;
}

.textos h3 {
    margin-bottom: 10px;
    color: #6f4e37;
}

/* PRODUTOS */
.produtos {
    padding: 80px 20px;
    background: #f5e9dc;
}

.produtos h1 {
    text-align: center;
    font-size: 2rem;
    color: #4b2e2b;
    margin-bottom: 20px;
}

.subtituloSecao {
    text-align: center;
    color: #6f4e37;
    font-size: 1.1rem;
    margin-bottom: 30px;
}

/* FILTROS */
.filtros {
    text-align: center;
    margin-bottom: 40px;
}

.filtros button {
    margin: 5px;
    padding: 10px 25px;
    border: 2px solid #6f4e37;
    background: transparent;
    color: #6f4e37;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
}

.filtros button:hover, 
.filtros button.ativo { 
    background: #6f4e37;
    color: #fff;
}

/* CARDS */
.cards {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    background: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}

/* IMAGEM DO CARD (CORRIGIDA) */
.containerImagem {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
}

.containerImagem img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.containerImagem img:hover {
    transform: scale(1.05); /* Dá um efeito legal de zoom na foto ao passar o mouse */
}

/* ESTILOS DOS TEXTOS E BOTÕES DENTRO DO CARD */
.cardInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 10px 0 5px;
}

.tagCategoria {
    background: #f5e9dc;
    color: #6f4e37;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 1px;
}

.cardInfo h3 {
    color: #4b2e2b;
    font-size: 1.4rem;
    margin: 5px 0;
    text-align: center;
}

.precoCard {
    color: #6f4e37;
    font-size: 1.2rem;
    font-weight: 900;
}

.btnVerMais {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #fff;
    background: #d2b48c;
    padding: 8px 25px;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.3s;
}

/* Efeito no botão quando o mouse passa por cima do card inteiro */
.card:hover .btnVerMais {
    background: #6f4e37;
}

/* RESPONSIVO EXCLUSIVO DAS CLASSES */
@media(max-width: 768px) {
    .banner h1 {
        font-size: 2rem;
    }

    .sobre-conteudo {
        flex-direction: column;
        text-align: center;
    }

    .sobre-conteudo img {
        max-width: 100%;
    }

    .textos {
        flex-direction: column;
    }

    .textos div {
        border-left: none;
        border-top: 5px solid #d2b48c;
    }
}
```
4. Componentes Reutilizáveis
Estes arquivos comportam partes visuais que podem ser consumidas em toda a aplicação.

Arquivo: src/components/Header.js
```
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <strong>Albero Dei Gelati</strong>
        </Link>
      </div>
      <nav>
        <a href="#sobre">Sobre nós</a>
        <a href="#produtos">Sabores</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
```
Arquivo: src/components/Banner.js
```
import styles from '../app/page.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img src="https://www.adgelati.com.br/wp-content/uploads/2019/07/alberodeigelati-mobile.png" alt="Logo Gelateria" />
      <h1>Gelatos artesanais premium</h1>
    </section>
  );
}
```
Arquivo: src/components/Sobre.js
```
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
```
Arquivo: src/components/SecaoProdutos.js
```
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
```
Arquivo: src/components/Footer.js
```
'use client';
export default function Footer() {
  const handleWhatsappClick = () => {
    alert("Atendimento via WhatsApp indisponível no momento. Por favor, utilize o iFood!");
  };

  return (
    <footer id="contato">
      <div className="footerConteudo">
        <div className="footerInfo">
          <strong>Albero Dei Gelati</strong>
          <p>Rua: Joaquim Antunes, 391 – Pinheiros</p>
          <p>CEP: 05415-010 – São Paulo - SP</p>
        </div>
        
        <div className="footerRedes">
          <p>Siga nossas redes:</p>
          <div className="iconesRedes">
            <a href="https://www.instagram.com/albero_br/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/albero.br/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
            </a>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
              alt="WhatsApp" 
              style={{ cursor: 'pointer' }}
              onClick={handleWhatsappClick} 
            />
          </div>
        </div>
      </div>
      <div className="footerDireitos">
        <p>&copy; 2026 Albero Dei Gelati. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
```
5. Renderização Central de Rotas (Next.js)
A arquitetura central que monta todas as páginas da SPA.

Página Principal
Arquivo: src/app/page.js
```
import Header from '../components/Header';
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';
import SecaoProdutos from '../components/SecaoProdutos';
import Footer from '../components/Footer'; // Importando o footer

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Sobre />
        <SecaoProdutos />
      </main>
      <Footer /> {/* Adicionado o footer aqui */}
    </>
  );
}
```
Rota Dinâmica e Integração
Arquivo: src/app/produto/[id]/page.js
```
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
```

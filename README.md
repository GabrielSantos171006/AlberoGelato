# Albero Gelato

### Nomes e RA's
- Gabriel Gomes dos Santos (10748012)
- Kaue Trigolo Damaceno (10748319)
- Henrique Orlando da Silva Rosa (10753777)
- Pedro Pizane Stach Ferreira (10753060)

### Processo de Ideação
O processo de ideação deste projeto partiu da necessidade de profissionalizar a presença digital da gelateria. Entendemos que, após alguns debates em grupo visando um projeto viavel, a criação de um site para uma empreendedora autônoma seria o mais recomendável, o site não deve ser apenas informativo, mas uma ferramenta de conversão e fidelização.
Achamos coerente desenvolver o site para centralizar as informações que hoje ficam dispersas em redes sociais, permitindo que o cliente encontre o cardápio, localização e os canais de contato de forma imediata. Dentro dessa lógica, definimos como essencial a implementação de um cardápio dinâmico e visual.

### Caráter Extensionista
Este projeto tem como ação extensionista promover a integração entre os conhecimentos adquiridos em sala de aula e a comunidade externa. Ao aplicar técnicas de desenvolvimento web e design para fortalecer o negócio de uma empreendedora autônoma que é prima de um dos nossos integrantes, o projeto cumpre a função social da extensão, tendo um impacto social e econômico ao apoiar o empreendedorismo feminino.

### Protótipo - Wireframe (Desktop)

![WhatsApp Image 2026-03-03 at 20 20 07](https://github.com/user-attachments/assets/35e69ce0-cca8-4ab0-bad3-388f9a31cee5)

<hr>

### Protótipo - Wireframe (Mobile)

<img width="1920" height="1080" alt="Wireframe Flowchart Whiteboard in Purple Violet Adjacent Colour Blocks Style" src="https://github.com/user-attachments/assets/007c326c-f152-484e-aaf9-082469a013c1" />

<hr>


### CÓDIGO HTML

```<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gelateria</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div><strong>Gelato</strong></div>
        <nav>
            <a href="#sobre">Sobre nós</a>
            <a href="#produtos">Produtos</a>
        </nav>
    </header>

    <section class="banner">
        <img src="https://www.adgelati.com.br/wp-content/uploads/2019/07/alberodeigelati-mobile.png" alt="Logo Gelateria">
        <h1>Gelatos artesanais premium</h1>
    </section>

    <section class="sobre" id="sobre">
        <h1>Sobre nós</h1>
        <div class="sobre-conteudo">
            <img src="https://revistamenu.com.br/wp-content/uploads/sites/24/2024/03/albero-dei-gelati-rua-dos-pinheiros-bruno-geraldi-1.jpg" alt="Interior da Gelateria">
            
            <div class="textos">
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

    <section class="produtos" id="produtos">
        <h1>Produtos</h1>
        
        <div class="filtros">
            <button data-filter="all" class="ativo">Todos</button>
            <button data-filter="fruta">Frutas</button>
            <button data-filter="chocolate">Chocolate</button>
        </div>

        <div class="cards">
            <div class="card" data-category="fruta">
                <img src="https://revistaanamaria.com.br/wp-content/uploads/2024/02/gelato-de-morango.jpg" alt="Gelato de Morango">
                <div class="box"></div>
                <p>Morango</p>
            </div>

            <div class="card" data-category="chocolate">
                <img src="https://chefrichardrobert.wordpress.com/wp-content/uploads/2018/11/sorv.jpg" alt="Gelato de Chocolate Belga">
                <div class="box"></div>
                <p>Chocolate Belga</p>
            </div>

            <div class="card" data-category="fruta">
                <img src="https://panelaterapia.com/wp-content/uploads/2012/12/manga.png" alt="Gelato de Manga">
                <div class="box"></div>
                <p>Manga</p>
            </div>
        </div>
    </section>

    <footer>
        <div>
            <strong>Gelato</strong><br>
            Rua: Joaquim Antunes, 391 – CEP: 05415-010
        </div>
        
        <div class="redes">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### CÓDIGO CSS

```
/* RESET BÁSICO */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #fdfaf6;
    color: #3e2c23;
    line-height: 1.6;
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

header strong {
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
}

nav {
    display: flex;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

nav a:hover {
    color: #d2b48c;
}

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
.filtros button.ativo { /* Adicionado o estado ativo gerenciado pelo JS */
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

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
}

.box {
    display: none; 
}

.card p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4b2e2b;
}

/* FOOTER */
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background: #4b2e2b;
    color: #fff;
    flex-wrap: wrap;
}

.redes {
    display: flex;
    align-items: center;
}

.redes img {
    width: 30px;
    margin-left: 15px;
    transition: transform 0.3s;
    filter: invert(1);
}

.redes img:hover {
    transform: scale(1.2);
}

/* RESPONSIVO */
@media(max-width: 768px) {
    header {
        flex-direction: column;
        padding: 15px 20px;
        gap: 15px;
    }

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

    footer {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .redes img {
        margin: 0 10px;
    }
}
```

### CÓDIGO JAVASCRIPT

```// FEATURE 1: SCROLL SUAVE
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); 
        const id = this.getAttribute("href");
        const section = document.querySelector(id);

        if(section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// FEATURE 2: FILTRO DE PRODUTOS MELHORADO
const botoes = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        // 1. Remove o visual de "ativo" de todos os botões
        botoes.forEach(b => b.classList.remove("ativo"));
        
        // 2. Adiciona o visual de "ativo" apenas no botão clicado
        botao.classList.add("ativo");

        // 3. Executa o filtro
        const filtro = botao.getAttribute("data-filter");

        cards.forEach(card => {
            const categoria = card.getAttribute("data-category");

            // IMPORTANTE: Usamos "flex" em vez de "block" para não quebrar o layout do CSS!
            if(filtro === "all" || filtro === categoria) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
```

### TUTORIAL HTML
Estrutura do documento

O código começa definindo que o documento utiliza HTML5 e que o idioma da página é português do Brasil. Agora também incluímos a tag viewport para garantir que o site funcione bem em celulares.



Cabeçalho (Header)

O header representa o topo da página. Nele estão dois elementos principais:



- Logo: escrito em texto forte (strong).


- Menu de navegação (nav): contém os links com os IDs (#sobre, #produtos) que guiam o JavaScript.



Banner

A primeira seção da página funciona como um destaque inicial.
Ela possui uma imagem menor (logo) e um texto de impacto para atrair o cliente logo na entrada.



Seção “Sobre nós”

Apresenta a empresa e sua origem. Ela contém:



- Um título principal.


- Uma imagem de alta qualidade do ambiente.


- Dois blocos de conteúdo organizados (História e Técnicas) para facilitar a leitura do usuário.



Seção “Produtos”

Essa área apresenta o cardápio interativo. Ela possui:



- Botões de filtro: Equipados com o atributo data-filter para separar as categorias.


- Cards de produtos: Cada card usa o atributo data-category para conversar com o filtro. Eles contêm a imagem real do produto (substituindo o antigo "box") e o nome do sabor.



Rodapé (Footer)

Reúne informações de encerramento da página. Contém o endereço da gelateria e ícones das redes sociais (Instagram, Facebook e WhatsApp) para contato direto.



###  TUTORIAL CSS
Estilo geral

Adicionamos um "reset" básico (* { box-sizing: border-box; margin: 0; padding: 0; }) para evitar barras de rolagem indesejadas. Definimos a fonte Arial e cores inspiradas em café/chocolate para um tom acolhedor.



Header

Usa Flexbox para alinhar logo à esquerda e menu à direita.
O atributo position: sticky; top: 0; faz com que o menu acompanhe o usuário enquanto ele desce a página.



Banner

Utiliza uma cor sólida de fundo (#5c3a21) em vez da imagem cinza inicial, dando um contraste sofisticado com a fonte branca.



Imagens e Cards (Produtos e Sobre)

Para evitar que fotos de tamanhos diferentes quebrem o site, aplicamos a propriedade object-fit: cover; junto com medidas fixas. Isso faz com que as imagens se adaptem perfeitamente dentro das caixas arredondadas.



Botões e Interatividade

Os botões do filtro receberam estilização transparente com bordas. Quando passamos o mouse (:hover) ou quando o botão recebe a classe gerada pelo JS (.ativo), as cores se invertem, indicando a seleção para o usuário.



Responsividade (Mobile)

Utilizamos a regra @media(max-width: 768px) para garantir que, quando o site for aberto em celulares, elementos que estavam lado a lado (como menu, textos e rodapé) fiquem empilhados em formato de coluna (flex-direction: column), facilitando a leitura na tela pequena.



### TUTORIAL JAVASCRIPT
Objetivo

O JavaScript adiciona duas interatividades fundamentais ao site: a rolagem suave do menu e o filtro inteligente de produtos.



Scroll Suave (Menu)

O código intercepta o clique do usuário nos links de navegação (e.preventDefault()), lê para qual seção o link aponta e usa o comando nativo scrollIntoView({ behavior: "smooth" }) para deslizar a tela suavemente, criando um aspecto premium.



Seleção de Filtros

Nós mapeamos todos os botões e todos os cards de gelatos presentes na tela.



Lógica do Botão Ativo

Quando um botão é clicado, o código limpa a classe ativo de todos os botões e a coloca apenas no botão recém-clicado. Isso muda a cor dele no CSS, dando um feedback visual claro para o cliente.



Lógica de Ocultar/Exibir

O script lê o valor data-filter do botão clicado (ex: "fruta").
Em seguida, ele verifica todos os cards. Se o data-category do card for igual ao do botão, o script muda o CSS do card para display: flex (visível). Se for diferente, ele muda para display: none (invisível).



Resultado

Com esse JavaScript o site deixa de ser apenas uma vitrine estática e passa a ser uma aplicação dinâmica. O cliente navega suavemente pelas seções e consegue encontrar o sabor de sorvete exato que procura com um clique simples.

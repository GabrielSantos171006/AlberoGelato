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
        <title>Wireframe</title>
        <link rel="stylesheet" href="style.css">
    </head>


    <body>

    <!-- Cabeçalho com logo e menu -->
    <header>

    <div>Logo</div>

    <nav>
        <a href="#sobre">Sobre nós</a>
        <a href="#produtos">Produtos</a>
    </nav>

    </header>


    <!-- Banner com imagem central -->
    <section class="banner">

        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="90">

    </section>


    <!-- Seção Sobre nós -->
    <section class="sobre" id="sobre">

        <h1>Sobre nós</h1>

        <div class="sobre-conteudo">

            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="60">

        <div class="textos">

        <div>
            <h3>História</h3>

            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ut totam deserunt debitis labore temporibus vero atque in necessitatibus cum. Qui, fugiat quibusdam? Necessitatibus qui expedita, aspernatur eveniet quibusdam aliquam.
            </p>
    </div>

    <div>
        <h3>Técnicas</h3>

        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, unde natus! Quibusdam corrupti ipsam, molestiae alias cumque aspernatur cupiditate dolore magnam recusandae quam consequatur maxime repellat soluta, tenetur eius vero!
        </p>
    </div>

    </div>

    </div>

    </section>


    <!-- Seção Produtos -->
    <section class="produtos" id="produtos">

        <h1>Produtos</h1>

        <div class="cards">

            <div class="card">
            <div class="box"></div>
                <p>Produto x</p>
            </div>

            <div class="card">
            <div class="box"></div>
            <p>Produto y</p>
        </div>

        <div class="card">
        <div class="box"></div>
            <p>Produto z</p>
        </div>

        </div>

    </section>


    <!-- Rodapé -->
    <footer>

        <div>Logo</div>

        <div>
            Rua: xxxx, yy – CEP: 1111-111
        </div>

        <div class="redes">

            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png">

        </div>

    </footer>

    <script src="script.js"></script>
    </body>
</html>
```

### CÓDIGO CSS

```
body{
    font-family: Arial;
    margin:0;
}

/* HEADER */
header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    background:#ddd;
}

nav a{
    margin-left:20px;
    text-decoration:none;
    color:black;
}

/* BANNER */
.banner{
    background:#ddd;
    text-align:center;
    padding:60px;
}

/* SOBRE */
.sobre{
    padding:40px;
}

.sobre-conteudo{
    display:flex;
    align-items:flex-start;
    gap:60px;
}

.textos{
    display:flex;
    gap:60px;
}

/* PRODUTOS */
.produtos{
    padding:40px;
}

.cards{
    display:flex;
    justify-content:space-around;
    margin-top:40px;
}

.card{
    text-align:center;
}

.box{
    width:150px;
    height:150px;
    border:3px solid #999;
    margin-bottom:10px;
}

/* FOOTER */
footer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
}

.redes img{
    width:30px;
    margin-left:10px;
}
```

### CÓDIGO JAVASCRIPT

```// Seleciona todos os links do menu
const links = document.querySelectorAll("nav a");

// Para cada link, adiciona o evento de clique
links.forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault(); // impede o comportamento padrão

        // Pega o id da seção (ex: #sobre)
        const id = this.getAttribute("href");

        // Seleciona a seção correspondente
        const section = document.querySelector(id);

        // Faz o scroll suave até a seção
        section.scrollIntoView({
            behavior: "smooth"
        });

    });
});

```
### TUTORIAL HTML

Estrutura do documento

O código começa definindo que o documento utiliza HTML5 e que o idioma da página é português do Brasil.
Dentro da estrutura principal do HTML existem duas partes importantes:<br>
	    <br>- head: contém informações internas da página, como a codificação de caracteres e o título que aparece na aba do navegador.
	    <br>- body: contém todo o conteúdo visível do site.
        <br>
        <br>
Cabeçalho (Header)

O header representa o topo da página.
Nele estão dois elementos principais:<br>
	<br>- Logo: espaço reservado para o nome ou imagem da empresa.
	<br>- Menu de navegação (nav): contém os links para as seções “Sobre nós” e “Produtos”.

Esses links permitem a navegação dentro do site.
<br>
<br>

Banner

A primeira seção da página funciona como um banner principal, contendo uma imagem central.
Essa área serve para destacar visualmente o início do site.

<br>
<br>
Seção “Sobre nós”

Essa seção apresenta informações sobre a empresa.

Ela contém:<br>
	<br>- um título principal
	<br>- um ícone ilustrativo
	<br>- dois blocos de conteúdo:
	<br>- História: explica a origem ou trajetória da empresa.
	<br>- Técnicas: descreve métodos ou formas de trabalho.

Os textos utilizam parágrafos para organizar a leitura.
<br>
<br>

Seção “Produtos”

Essa área apresenta os produtos oferecidos.

A estrutura possui três blocos (cards), cada um representando um produto.
Cada produto possui:<br>
	<br>- um espaço para imagem
	<br>- o nome do produto

Essa organização facilita a visualização e comparação dos itens.

<br>
<br>
Rodapé (Footer)

O footer representa o rodapé da página.

Ele contém:
	<br>- o logo da empresa o endereço ícones de redes sociais (Instagram, Facebook e WhatsApp)

O rodapé geralmente reúne informações institucionais e formas de contato.
<br>
<br>

Organização da página

O site segue uma estrutura simples e organizada: <br>
	<br>1.	Header – logo e menu
	<br>2.	Banner – imagem principal
	<br>3.	Sobre nós – informações da empresa
	<br>4.	Produtos – exibição dos produtos
	<br>5.	Footer – endereço e redes sociais

Essa organização ajuda a manter o site claro e fácil de navegar.

### TUTORIAL CSS

Estilo geral

Define a fonte Arial e remove margens do navegador para deixar o layout limpo.
<br>
<br>

Header

Usa Flexbox para alinhar:<br>
<br>- logo à esquerda
<br>- menu à direita

Os links recebem espaçamento, cor preta e sem sublinhado.
<br>
<br>

Banner

Centraliza a imagem e adiciona fundo cinza e espaçamento para destaque.
<br>
<br>

Sobre nós

Organiza os elementos lado a lado com Flexbox:
<br>- ícone + textos
<br>- História e Técnicas ficam em colunas
<br>
<br>

Produtos

Exibe os produtos em linha com Flexbox.

Cada produto:<br>
<br>- fica centralizado
<br>- possui uma caixa (imagem) e nome
<br>
<br>

Footer

Alinha logo, endereço e redes sociais em uma linha usando Flexbox.
<br>
<br>

Redes sociais

Define tamanho dos ícones e espaçamento entre eles.
<br>
<br>

Resumo geral

O CSS usa principalmente Flexbox para:
<br>- alinhar elementos
<br>- criar espaçamentos
<br>- organizar o layout conforme o wireframe

### TUTORIAL JAVASCRIPT

Objetivo

O JavaScript adiciona interatividade ao site, permitindo que o menu navegue até as seções com scroll suave.
<br>
<br>

Seleção dos elementos

O código seleciona todos os links do menu de navegação.

Isso permite aplicar ações quando o usuário clicar em “Sobre nós” ou “Produtos”.
<br>
<br>

Evento de clique

Para cada link, é adicionado um evento de clique.

Quando o usuário clica:
<br>- o comportamento padrão do link é bloqueado
<br>- o código assume o controle da navegação
<br>
<br>

Identificação da seção

O script pega o valor do href (ex: #sobre ou #produtos)
e usa isso para encontrar a seção correspondente na página.
<br>
<br>

Scroll suave

A função scrollIntoView é usada para rolar a página até a seção desejada.

A opção behavior: "smooth" faz com que o movimento seja suave, melhorando a experiência do usuário.
<br>
<br>

Resultado

Com esse JavaScript:
<br>- o menu funciona corretamente
<br>- a navegação fica mais fluida
<br>- o site deixa de ser estático e ganha interatividade
<br>
<br>

Resumo geral

O JavaScript:
<br>- captura cliques no menu
<br>- identifica a seção clicada
<br>- faz o scroll suave até ela

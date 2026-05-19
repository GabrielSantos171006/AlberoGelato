# Albero Dei Gelati - E-commerce e Vitrine Digital

### Nomes e RA's
- Gabriel Gomes dos Santos (10748012)
- Kaue Trigolo Damaceno (10748319)
- Henrique Orlando da Silva Rosa (10753777)
- Pedro Pizane Stach Ferreira (10753060)

---

## Processo de Ideação
O processo de ideação deste projeto partiu da necessidade de profissionalizar a presença digital da gelateria. Entendemos que, após alguns debates em grupo visando um projeto viável, a criação de um site para uma empreendedora autônoma seria o mais recomendável. O site não deve ser apenas informativo, mas uma ferramenta de conversão e fidelização.

Achamos coerente desenvolver o site para centralizar as informações que hoje ficam dispersas em redes sociais, permitindo que o cliente encontre o cardápio, localização e os canais de contato de forma imediata. Dentro dessa lógica, definimos como essencial a implementação de um cardápio dinâmico, visual e com direcionamento direto para a plataforma de vendas (iFood).

---

## Caráter Extensionista
Este projeto tem como ação extensionista promover a integração entre os conhecimentos adquiridos em sala de aula e a comunidade externa. Ao aplicar técnicas de desenvolvimento web, design e frameworks modernos (Next.js/React) para fortalecer o negócio de uma empreendedora autônoma, o projeto cumpre a função social da extensão, tendo um impacto social e econômico ao apoiar o empreendedorismo feminino.

---

## Protótipos Iniciais (Wireframes)

**Desktop:**
![Wireframe Desktop](https://github.com/user-attachments/assets/35e69ce0-cca8-4ab0-bad3-388f9a31cee5)

**Mobile:**
<img width="1920" height="1080" alt="Wireframe Mobile" src="https://github.com/user-attachments/assets/007c326c-f152-484e-aaf9-082469a013c1" />

---

## Tecnologias Utilizadas
O projeto evoluiu de uma estrutura estática básica (HTML/CSS/JS) para uma **Single Page Application (SPA)** escalável utilizando as tecnologias mais recentes do mercado:

* **Next.js (App Router):** Framework principal para renderização, roteamento dinâmico e otimização.
* **React.js:** Biblioteca para construção de interfaces baseadas em componentes interativos.
* **CSS Modules:** Metodologia de estilização local para evitar conflitos de escopo no design.
* **JavaScript (ES6+):** Lógica de programação para manipulação de dados e estados.

---

## Estrutura do Projeto
Para garantir escalabilidade, a aplicação foi dividida em três pilares principais dentro da pasta `src`:

* **`app/`**: Configurações de rotas (`page.js`), rotas dinâmicas (`produto/[id]/page.js`) e estilos globais e modulares.
* **`components/`**: Peças de interface reutilizáveis e independentes.
* **`data/`**: Banco de dados local simulado contendo o catálogo completo.

---

## Arquitetura e Código-Fonte

Abaixo está o detalhamento de cada arquivo que compõe a aplicação. 

### 1. Banco de Dados Local
Arquivo responsável por armazenar as informações de todos os produtos (ID, categoria, foto, nome, ingredientes e alergênicos). Utilizado para alimentar dinamicamente a vitrine e as páginas de detalhes.

**Caminho do arquivo:** `src/data/produtos.js`
```javascript
[COLE AQUI O CÓDIGO DO ARQUIVO produtos.js]
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

#### Protótipo - Wireframe (Etapa 2)

### Página Inicial (Home)


> <img width="296" height="560" alt="image" src="https://github.com/user-attachments/assets/aa3d20be-fe89-4907-92e4-daa3d645d35d" />

## Descrição da Interface:

A página inicial apresenta um cabeçalho com o nome da gelateria e um menu de navegação, permitindo acesso às páginas "Início", "Sobre" e "Produtos".

Logo abaixo, há um banner principal com destaque visual e uma chamada para ação, direcionando o usuário para o cardápio.

Na sequência, encontra-se a seção de filtros, onde o usuário pode selecionar categorias de produtos (como frutas ou chocolate), influenciando diretamente os itens exibidos na tela.

Os produtos são apresentados em formato de cards, contendo imagem e nome. Esses dados são carregados dinamicamente por meio de uma API interna.

## Navegação:

Ao clicar em um produto, o usuário é redirecionado para uma página individual, utilizando uma rota dinâmica baseada no ID do item (/produtos/[id]).

O menu superior permite navegar para a página "Sobre", enquanto o botão de ação no banner pode direcionar para a seção de produtos.

## Comportamento:

- Os produtos são atualizados dinamicamente via API  
- O filtro altera os itens exibidos sem recarregar a página  
- A navegação entre páginas ocorre de forma direta pelo menu e pelos cards

---

### Página Sobre (/sobre)


<img width="293" height="403" alt="image" src="https://github.com/user-attachments/assets/4d62f37b-fdd7-4786-8a60-1636a4fc2bc5" />

## Descrição da Interface:

A página "Sobre" mantém o mesmo cabeçalho da página inicial, garantindo consistência na navegação.

O conteúdo principal apresenta informações institucionais da gelateria, como história, proposta e métodos de produção, organizados em blocos de texto e imagem para facilitar a leitura.

## Navegação:

O acesso a essa página é feito por meio do menu superior (rota simples: /sobre).

O usuário pode retornar à página inicial ou navegar para outras seções utilizando o mesmo menu presente no topo.

## Comportamento:

- Página estática (não depende de API)  
- Conteúdo fixo, voltado para apresentação institucional  
- Mantém padrão visual e estrutural do restante da aplicação

---

### Página de Produto (/produtos/[id])


<img width="307" height="401" alt="image" src="https://github.com/user-attachments/assets/bfdc1fe6-046f-4428-a466-77f2001f86a2" />

## Descrição da Interface:

A página de produto apresenta um layout focado no item selecionado, exibindo sua imagem em destaque, nome, categoria e descrição detalhada.

As informações são organizadas de forma clara para facilitar a visualização e compreensão do produto.

## Navegação:

Essa página é acessada a partir do clique em um produto na página inicial.

A navegação ocorre por meio de uma rota dinâmica (/produtos/[id]), onde o ID do produto define qual conteúdo será exibido.

Também há um botão ou opção de retorno, permitindo que o usuário volte para a listagem de produtos.

## Comportamento:

- Ao carregar a página, o sistema identifica o ID presente na URL  
- Uma requisição é feita à API para buscar os dados do produto específico  
- O conteúdo exibido é gerado dinamicamente com base na resposta da API  
- Cada produto possui uma página única sem necessidade de criação manual de múltiplas páginas

---

# Fluxo de navegação

## Descrição da Interface:

O fluxo representa a estrutura de navegação entre as páginas da aplicação.

Ele demonstra como o usuário percorre o sistema desde a página inicial até páginas internas.

## Navegação:

- Home → acesso principal  
- Home → Sobre (via menu)  
- Home → Produto (via clique em card)  
- Produto → retorno para Home  

## Comportamento:

- A navegação é baseada em rotas do Next.js  
- A rota dinâmica permite múltiplos produtos com uma única estrutura  
- O fluxo foi pensado para ser simples e intuitivo, reduzindo a quantidade de cliques necessários

---

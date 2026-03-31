// FEATURE 1: SCROLL SUAVE
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
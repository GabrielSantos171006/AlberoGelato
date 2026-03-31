// FEATURE 1: SCROLL SUAVE
// Seleciona todos os links do menu
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
        if(section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// FEATURE 2: FILTRO DE PRODUTOS
const botoes = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const filtro = botao.getAttribute("data-filter");

        cards.forEach(card => {
            const categoria = card.getAttribute("data-category");

            if(filtro === "all" || filtro === categoria) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
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
        section.scrollIntoView({
            behavior: "smooth"
        });

    });
});
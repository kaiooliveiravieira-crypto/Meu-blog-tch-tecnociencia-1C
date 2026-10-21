// Seleciona todos os botões de reação do blog
const botoes = document.querySelectorAll(".reaction-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", botaoClicado);
});

function botaoClicado(event) {
    // Localiza a tag <span> interna que contém o número do contador
    let contador = event.currentTarget.querySelector("span");
    
    // Incrementa a contagem atual
    let valorAtual = parseInt(contador.textContent);
    contador.textContent = valorAtual + 1;

    // Efeito visual de animação ao clicar no botão
    event.currentTarget.style.transform = "scale(1.15)";
    setTimeout(() => {
        event.currentTarget.style.transform = "none";
    }, 150);
}

// Alternar Modo Escuro / Claro
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Altera o ícone do botão conforme o modo ativo
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "☀️";
        themeToggleBtn.setAttribute("title", "Alternar Modo Claro");
    } else {
        themeToggleBtn.textContent = "🌙";
        themeToggleBtn.setAttribute("title", "Alternar Modo Escuro");
    }
});

// Interação com o Mascote Pixelado do Curry
const curryWidget = document.getElementById("curry-widget");
const speechBubble = document.getElementById("speech-bubble");

const frases = [
    "4× Campeão da NBA! 🏆",
    "Night Night! 😴🏆",
    "Maior arremessador da história! 👌",
    "Golden State Warriors! 💙💛",
    "2× MVP da NBA! ⭐"
];

let indiceFrase = 0;

curryWidget.addEventListener("click", () => {
    // Alterna/Ativa a animação de erguer o troféu
    curryWidget.classList.toggle("active");

    if (curryWidget.classList.contains("active")) {
        speechBubble.textContent = frases[indiceFrase];
        indiceFrase = (indiceFrase + 1) % frases.length;
    } else {
        speechBubble.textContent = "Clique em mim! 🏆";
    }
});
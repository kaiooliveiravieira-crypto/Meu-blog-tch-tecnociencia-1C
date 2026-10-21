
const botoes = document.querySelectorAll(".reaction-btn");

botoes.forEach(botao => {
    botao.addEventListener("click", botaoClicado);
});

function botaoClicado(event) {
    
    let contador = event.currentTarget.querySelector("span");
    
    
    let valorAtual = parseInt(contador.textContent);
    contador.textContent = valorAtual + 1;

    
    event.currentTarget.style.transform = "scale(1.15)";
    setTimeout(() => {
        event.currentTarget.style.transform = "none";
    }, 150);
}


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

    curryWidget.classList.toggle("active");

    if (curryWidget.classList.contains("active")) {
        speechBubble.textContent = frases[indiceFrase];
        indiceFrase = (indiceFrase + 1) % frases.length;
    } else {
        speechBubble.textContent = "Clique em mim! 🏆";
    }
});
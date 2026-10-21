
const translations = {
    pt: {
        author: "Por: Kaio Felipe de Oliveira Vieira",
        heroTitle: "QUEM É STEPHEN CURRY?",
        heroSubtitle: "Aqui você vai aprender mais sobre a NBA e principalmente sobre o jogador Stephen Curry",
        card1Title: "PARA INÍCIO DE CONVERSA",
        card1Text: "Stephen Curry é um jogador profissional de basquete norte-americano, conhecido por revolucionar o esporte com sua habilidade excepcional nos arremessos de três pontos. Ele atua como armador e é considerado um dos maiores jogadores da história da NBA.",
        card2Title: "2× MVP da Temporada Regular",
        card2Text: "(2015 e 2016), sendo o primeiro e único jogador a vencer o prêmio de forma unânime na história da liga em 2016.",
        card3Title: "O EFEITO CURRY",
        card3Text: "O impacto de Stephen Curry em quadra vai muito além dos pontos que ele marca. O conceito de \"Curry Gravity\" (Gravidade de Curry) descreve a forma como sua presença atrai múltiplos defensores para fora do garrafão, mesmo quando ele está sem a posse da bola. O pavor de seus arremessos de longa distância força os adversários a dobrarem a marcação na linha de três, criando caminhos livres para enterradas e arremessos desmarcados de seus companheiros. Curry não apenas pontua; ele transforma o posicionamento tático de todo o time rival.",
        card4Title: "THE CAREER",
        card4Highlight: "(Carreira do Curry)",
        card4Sub: "Draft e Início (2009)",
        card4Text: "Selecionado na 7ª posição do Draft da NBA de 2009 pelo Golden State Warriors, franquia na qual construiu toda a sua carreira profissional.",
        sourceLabel: "Fonte:",
        widgetDefault: "Clique em mim! 🏆",
        curryQuotes: [
            "4× Campeão da NBA! 🏆",
            "Night Night! 😴🏆",
            "Maior arremessador da história! 👌",
            "Golden State Warriors! 💙💛",
            "2× MVP da NBA! ⭐"
        ]
    },
    en: {
        author: "By: Kaio Felipe de Oliveira Vieira",
        heroTitle: "WHO IS STEPHEN CURRY?",
        heroSubtitle: "Here you will learn more about the NBA and especially about Stephen Curry",
        card1Title: "TO GET STARTED",
        card1Text: "Stephen Curry is an American professional basketball player, renowned for revolutionizing the sport with his exceptional three-point shooting skills. He plays as a point guard and is considered one of the greatest players in NBA history.",
        card2Title: "2× Regular Season MVP",
        card2Text: "(2015 and 2016), becoming the first and only unanimous MVP winner in league history in 2016.",
        card3Title: "THE CURRY EFFECT",
        card3Text: "Stephen Curry's impact on the court goes far beyond scoring points. The concept of \"Curry Gravity\" describes how his presence pulls multiple defenders away from the paint, even without the ball. The fear of his long-range shots forces opponents to double-team him at the three-point line, creating open lanes for dunks and uncluttered shots for his teammates. Curry doesn't just score; he reshapes the entire rival defense.",
        card4Title: "THE CAREER",
        card4Highlight: "(Curry's Career)",
        card4Sub: "Draft & Early Career (2009)",
        card4Text: "Drafted 7th overall in the 2009 NBA Draft by the Golden State Warriors, the franchise where he has spent his entire professional career.",
        sourceLabel: "Source:",
        widgetDefault: "Click on me! 🏆",
        curryQuotes: [
            "4× NBA Champion! 🏆",
            "Night Night! 😴🏆",
            "Greatest shooter ever! 👌",
            "Golden State Warriors! 💙💛",
            "2× NBA MVP! ⭐"
        ]
    },
    es: {
        author: "Por: Kaio Felipe de Oliveira Vieira",
        heroTitle: "¿QUIÉN ES STEPHEN CURRY?",
        heroSubtitle: "Aquí aprenderás más sobre la NBA y especialmente sobre Stephen Curry",
        card1Title: "PARA EMPEZAR",
        card1Text: "Stephen Curry es un jugador profesional de baloncesto estadounidense, famoso por revolucionar el deporte con su increíble habilidad en los tiros de tres puntos. Juega como base y es considerado uno de los mejores jugadores de la historia de la NBA.",
        card2Title: "2× MVP de la Temporada Regular",
        card2Text: "(2015 y 2016), siendo el primer y único jugador en ganar el premio de forma unánime en la historia de la liga en 2016.",
        card3Title: "EL EFECTO CURRY",
        card3Text: "El impacto de Stephen Curry en la cancha va mucho más allá de sus puntos. El concepto de \"Curry Gravity\" (Gravedad de Curry) describe cómo su presencia atrae a múltiples defensores fuera de la zona, incluso sin el balón. El pánico a sus tiros de larga distancia obliga a los rivales a doblar la marca en la línea de tres, generando espacio para sus compañeros. Curry no solo anota; transforma toda la táctica rival.",
        card4Title: "THE CAREER",
        card4Highlight: "(Carrera de Curry)",
        card4Sub: "Draft e Inicio (2009)",
        card4Text: "Elegido en la 7.ª posición del Draft de la NBA de 2009 por los Golden State Warriors, franquicia en la que ha desarrollado toda su carrera.",
        sourceLabel: "Fuente:",
        widgetDefault: "¡Haz clic en mí! 🏆",
        curryQuotes: [
            "¡4× Campeón de la NBA! 🏆",
            "¡Night Night! 😴🏆",
            "¡El mejor tirador de la historia! 👌",
            "¡Golden State Warriors! 💙💛",
            "¡2× MVP de la NBA! ⭐"
        ]
    }
};

let currentLang = "pt";


const langSelect = document.getElementById("lang-select");

langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    const dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (dict[key]) {
            element.textContent = dict[key];
        }
    });

    
    if (!curryWidget.classList.contains("active")) {
        speechBubble.textContent = dict.widgetDefault;
    }
}


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


const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "☀️";
        themeToggleBtn.setAttribute("title", "Alternar Modo Claro");
    } else {
        themeToggleBtn.textContent = "🌙";
        themeToggleBtn.setAttribute("title", "Alternar Modo Escuro");
    }
});


const curryWidget = document.getElementById("curry-widget");
const speechBubble = document.getElementById("speech-bubble");

let indiceFrase = 0;

curryWidget.addEventListener("click", () => {
    curryWidget.classList.toggle("active");
    const dict = translations[currentLang];

    if (curryWidget.classList.contains("active")) {
        speechBubble.textContent = dict.curryQuotes[indiceFrase];
        indiceFrase = (indiceFrase + 1) % dict.curryQuotes.length;
    } else {
        speechBubble.textContent = dict.widgetDefault;
    }
});
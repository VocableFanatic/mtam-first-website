//Modo escuro
function darkMode() {
    var element = document.body;

    // Verifica se o modo escuro está ativado atualmente
    var isDarkMode = element.classList.contains("dark-mode");

    // Inverte o estado do modo escuro
    element.classList.toggle("dark-mode");

    // Atualiza o estado no localStorage
    localStorage.setItem("darkMode", !isDarkMode);
}






// Verifica se o modo escuro estava ativado ao carregar a página anteriormente
window.onload = function() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
};


//Responsável pela rolagem suave até o conteúdo desejado
function rolarParaSecao(secaoId) {
    var secao = document.getElementById(secaoId); //colocar o id da seção desejada direto no button on click
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
    }
}

//Botões de aumentar ou diminuir
var fonts = [];

function obterTamanhoFonte() {
    var elements = document.querySelectorAll('.tamanhoItem');
    elements.forEach(element => {
        var size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        size = parseFloat(size);
        fonts.push(size);
    });
}

function changeFontSize(type) {
    var elements = document.querySelectorAll('.tamanhoItem');

    if (type === 'normal') {
        obterTamanhoFonte(); // Chama para obter os tamanhos originais antes do reset
    }

    elements.forEach((element, index) => {
        var size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        size = parseFloat(size);

        if (type === 'increase') {
            element.style.fontSize = (size + 5) + "px";
        } else if (type === 'decrease') {
            element.style.fontSize = (size - 5) + "px";
        } else if (type === 'normal') {
            element.style.fontSize = fonts[index] + 'px';
        }
    });
}

// Chame a função para obter tamanhos de fonte originais quando a página carregar
document.addEventListener('DOMContentLoaded', obterTamanhoFonte);




//função para recolhível
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("recolhivel");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});

//slides da página PTlinguas


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let quadrados = document.getElementsByClassName("quadrado");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < quadrados.length; i++) {
        quadrados[i].style.backgroundColor = ""; // Remove a cor de fundo de todos os quadrados
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Identifica os quadrados associados ao slide atual e muda a cor de todos eles
    let slideNumber = slideIndex; // Usando slideIndex diretamente
    let quadradosAssociados = document.querySelectorAll(`[data-slide-index="${slideNumber}"]`);

    quadradosAssociados.forEach(quadrado => {
        quadrado.style.backgroundColor = "red"; // Substitua "cor desejada" pela cor que você deseja aplicar
    });
}

//Versão que esconde os quadrados

//let slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}

//function currentSlide(n) {
//    showSlides(slideIndex = n);
//}

//function showSlides(n) {
//    let i;
//    let slides = document.getElementsByClassName("mySlides");
//    let dots = document.getElementsByClassName("dot");
//    let quadrados = document.getElementsByClassName("quadrado");

//    if (n > slides.length) { slideIndex = 1 }
//    if (n < 1) { slideIndex = slides.length }

//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    for (i = 0; i < quadrados.length; i++) {
//        quadrados[i].style.backgroundColor = ""; // Remove a cor de fundo de todos os quadrados
//        quadrados[i].style.display = "none"; // Esconde todos os quadrados
//    }

//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";

// Identifica os quadrados associados ao slide atual e muda a cor de todos eles
//    let slideNumber = slideIndex; // Usando slideIndex diretamente
//    let quadradosAssociados = document.querySelectorAll(`[data-slide-index="${slideNumber}"]`);

//    quadradosAssociados.forEach(quadrado => {
//        quadrado.style.backgroundColor = "red"; // Substitua "cor desejada" pela cor que você deseja aplicar
//        quadrado.style.display = "block"; // Mostra o quadrado associado ao slide atual
//    });
//}
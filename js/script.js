//ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if(url.includes(href)) {
       link.classList.add("ativo")
    }
}

links.forEach(ativarLink)


//ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativo = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas)

//galeria de bicicleta
const galeria = document.querySelectorAll('.bicicletas-img img');
const galeriaContainer = document.querySelector('.bicicletas-img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 920px)').matches;
    if (media) {
    galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if (window.SimpleAnime) {
    new SimpleAnime();
}
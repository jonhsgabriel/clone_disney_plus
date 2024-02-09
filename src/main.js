document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll',function(){
        const posicaoatual = this.window.scrollY;

        if(posicaoatual > alturaHero) { 
            exibelementosHeader();
        }else {
            ocultaElementosHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }

    for (let i = 0; i < questions.length; i++ ) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

})

function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++ ) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultaElementosHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibelementosHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}
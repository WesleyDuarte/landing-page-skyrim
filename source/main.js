document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0;i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const tabAlvo = botao.target.dataset.tabButton;
            const tab = document.querySelector( `[data-tab-id=${tabAlvo}]`);
            escondeTodasTabs();
            tab.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0;i<buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}

function escondeTodasTabs(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');
    

    for(let i = 0; i < tabContainer.length; i++){
        tabContainer[i].classList.remove('shows__list--is-active')
    }
}
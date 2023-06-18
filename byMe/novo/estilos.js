//Só para deixar ativo o botão do cabecalho quando selecionado.
const botoesDoCabecalho = document.querySelectorAll('.cabecalho_nav_lista_item_pseudo')

botoesDoCabecalho.forEach((link) => {
    console.log(link.getBoundingClientRect())
    link.addEventListener('click', (linkSelecionado) => {
        const itemASerRetirado = document.querySelector('.cabecalho_nav_lista_item_ativo')? document.querySelector('.cabecalho_nav_lista_item_ativo'):'';
        if(itemASerRetirado){
            if(linkSelecionado.target.getBoundingClientRect().left > itemASerRetirado.getBoundingClientRect().left){
                for(i=linkSelecionado.target.getBoundingClientRect().left;i<itemASerRetirado.getBoundingClientRect().left;i++){
                    itemASerRetirado.getBoundingClientRect().left += 0.1;
                }
            }
            


            itemASerRetirado.classList.remove('cabecalho_nav_lista_item_ativo')
        }
        linkSelecionado.target.classList.add('cabecalho_nav_lista_item_ativo')
    })
})

// bottom:35.5
// height: 21
// left: 307.828125
// right: 346.078125
// top: 14.5
// width: 38.25
// x: 307.828125
// y: 14.5
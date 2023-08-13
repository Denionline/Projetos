const menuLateral = document.querySelector('.menu_lateral-menu')
const botaoMenu = document.querySelector('.menu_icon-menu-container')
const botaoCloseMenu = document.querySelector('.menu_lateral_close_container')
const corpoDoBotaoClose = document.querySelector('.menu_lateral_close-icon')
const itensDoMenuLateral = document.querySelectorAll('.menu_lateral-menu-item')

botaoMenu.addEventListener('click', () => {
    setTimeout(() => {
        itensDoMenuLateral.forEach(item => {
            item.style.display = 'flex'
            console.log('Mostrando itens')
        })
    }, 200)
    menuLateral.style.display = 'flex';
    menuLateral.style.height = '80%';
    botaoCloseMenu.style.display = 'block'
    corpoDoBotaoClose.style.display = 'flex'
    console.log('Abrindo menu')
})

botaoCloseMenu.addEventListener('click', () => {
    menuLateral.style.height = '0';
    botaoCloseMenu.style.display = 'none';
    corpoDoBotaoClose.style.display = 'none';
    itensDoMenuLateral.forEach(item => {
        item.style.display = 'none';
    })
})
const menuLateral = document.querySelector('.menu_opened-menu')
const botaoMenu = document.querySelector('.menu_icon-menu-container')
const botaoCloseMenu = document.querySelector('.menu_opened-icon-close')

botaoMenu.addEventListener('click', () => {
    menuLateral.style.display = 'flex';
    botaoCloseMenu.style.display = 'block'
})

botaoCloseMenu.addEventListener('click', () => {
    menuLateral.style.display = 'none';
    botaoCloseMenu.style.display = 'none';
})
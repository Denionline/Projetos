const popUpXmlGerado = document.querySelector('.pop-up_xmlGerado');
const popUpXmlGeradoBaixar = document.querySelector('.pop-up_xmlGerado_baixarXML');
const iconClose = document.querySelector('.icon-close');

popUpXmlGeradoBaixar.addEventListener('click', () => {
    transformObjectToXML();
})

iconClose.addEventListener('click', () => {
    fechaPopUpXmlGerado();
})
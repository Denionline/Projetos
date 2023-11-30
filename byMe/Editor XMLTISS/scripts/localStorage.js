// Adiciona Objeto ao Storage
function adicionaAoStorage(objetoXML){
    localStorage.setItem('objetoXML', JSON.stringify(objetoXML));
}
// Obtem Objeto do Storage
function obtemObjeto(){
    return JSON.parse(localStorage.getItem('objetoXML'));
}

// Adiciona links do XML no Storage
function adicionaMensagemTISSstorage(node){
    localStorage.setItem('mensagemTISS', JSON.stringify(node));
}
// Obtem links do XML no Storage
function obtemMensagemTISSstorage(){
    return JSON.parse(localStorage.getItem('mensagemTISS'));
}

// Adiciona configurações desejadas na página
function adicionaDefinicoesDaPagNoStorage(definicoes){
    localStorage.setItem('definicoesPag', JSON.stringify(definicoes));
}
// Obtem configurações desejadas da página
function obtemDefinicoesDaPagNoStorage(){
    return JSON.parse(localStorage.getItem('definicoesPag'));
}
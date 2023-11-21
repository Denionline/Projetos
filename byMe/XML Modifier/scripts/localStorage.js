function adicionaAoStorage(objetoXML){
    localStorage.setItem('objetoXML', JSON.stringify(objetoXML));
}
function obtemObjeto(){
    return JSON.parse(localStorage.getItem('objetoXML'));
}

function adicionaMensagemTISSstorage(node){
    localStorage.setItem('mensagemTISS', JSON.stringify(node));
}
function obtemMensagemTISSstorage(){
    return JSON.parse(localStorage.getItem('mensagemTISS'));
}
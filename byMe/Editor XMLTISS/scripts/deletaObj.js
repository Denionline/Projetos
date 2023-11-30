function deletaObj(){
    localStorage.clear();
    campoNomeDoArquivo.value = '';
    fechaCaixaXML();
    abreLoading();
    fechaLoading();
    abreInput();
}
function abreCaixaXML() {
    box.style.display = 'flex';
    boxOut.style.display = 'flex';
    
    setTimeout(() => {
        box.style.opacity = '1';
        boxOut.style.opacity = '1';
        caixaOpcoesAdicionais.style.display = 'flex'
    }, 1000)
}
function fechaCaixaXML() {
    box.style.display = 'none';
    boxOut.style.display = 'none';
    caixaOpcoesAdicionais.style.display = 'none'

    box.style.opacity = '0';
    boxOut.style.opacity = '0';
}

function abreLoading() {
    loading.style.height = '30%';
}
function fechaLoading() {
    setTimeout(() => {
        loading.style.height = '0';
    }, 500)
}

function abreInput() {
    caixaInputFile.style.display = 'block';
    setTimeout(() => {
        caixaInputFile.style.opacity = '1';
    }, 1000)
    inputFile.value = '';
}
function fechaInput() {
    caixaInputFile.style.opacity = '0';
    caixaInputFile.style.display = 'none';
}

function abrePopUpDeletaObj(){
    abreBloqueioTela();
    popUpConfirmaDeleteObj.style.top = '20px';
}
function fechaPopUpDeletaObj(){
    fechaBloqueioTela();
    popUpConfirmaDeleteObj.style.top = '-30%';
}

function abrePopUpXmlGerado(){
    abreBloqueioTela();
    popUpXmlGerado.style.top = '3%';
    popUpXmlGerado.style.left = '2%';
}
function fechaPopUpXmlGerado(){
    fechaBloqueioTela();
    popUpXmlGerado.style.top = '-120px';
    popUpXmlGerado.style.left = '-420px';
}

function abreBloqueioTela(){
    bloqueioDeTela.style.display = 'block';
}
function fechaBloqueioTela(){
    bloqueioDeTela.style.display = 'none';
}
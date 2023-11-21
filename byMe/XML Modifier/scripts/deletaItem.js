function adicionaEscutadorLixeira(){
    const botoesDeletar = document.querySelectorAll('.icon-lixeira');
    botoesDeletar.forEach(botaoDelete => {
        botaoDelete.addEventListener('click', botao => {
            let objetoDoXML = obtemObjeto();
            
            if(botao.target.parentElement.classList[0] == 'box_body_guia_detalhes_procs_proc'){
                // Verifica procedimentos                
                let idGuia = parseInt(botao.target.parentElement.parentElement.parentElement.parentElement.id)-1;
                let idItem = parseInt(botao.target.parentElement.id)-1;
                deletaProcedimento(objetoDoXML, idGuia, idItem);

            }else if(botao.target.parentElement.parentElement.classList[0] == 'box_body_guia'){
                // Verifica guias
                let idGuia = parseInt(botao.target.parentElement.parentElement.id)-1;
                deletaGuia(objetoDoXML, idGuia);

            }else{
                // Verifica Despesas
                let idGuia = parseInt(botao.target.parentElement.parentElement.parentElement.parentElement.parentElement.id)-1;
                let idItem = parseInt(botao.target.parentElement.parentElement.id)-1;
                deletaDespesa(objetoDoXML, idGuia, idItem);

            }
        })
    })
}

function deletaGuia(objetoDoXML, idGuia){
    let guias = objetoDoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:guiasTISS'];
    guias.splice(idGuia, 1);
    adicionaAoStorage(objetoDoXML);
    atualizaDados();
}

function deletaProcedimento(objetoDoXML, idGuia, idItem){
    let procedimentos = objetoDoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:guiasTISS'][idGuia]['ans:procedimentosExecutados'];
    procedimentos.splice(idItem, 1);
    adicionaAoStorage(objetoDoXML);
    atualizaDados();
}

function deletaDespesa(objetoDoXML, idGuia, idItem){
    let despesas = objetoDoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:guiasTISS'][idGuia]['ans:outrasDespesas'];
    despesas.splice(idItem, 1);
    adicionaAoStorage(objetoDoXML);
    atualizaDados();
}
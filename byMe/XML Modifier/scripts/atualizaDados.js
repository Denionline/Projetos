const campoGuiasXML = document.querySelector('.box_body');
const cabecalhoDoXML = {
    campoCodigoDoPrestador: document.querySelector('.box_top_item_valor'),
    campoNumeroDoProtocolo: document.querySelector('.box_top_numeroDoProtocolo_valor'),
    campoRegistroANS: document.querySelector('.box_top_ans_valor'),
    camposVersaoXML: document.querySelector('.box_top_versao_valor')
};

function atualizaDados() {

    caixaInputFile.style.display = 'none';
    box.style.display = 'flex';
    btnToXML.style.display = 'block';
    btnToDeleteObj.style.display = 'block';

    campoGuiasXML.innerHTML = '';
    
    let objetoDoXML = obtemObjeto();

    const cabecalhoXML = objetoDoXML['ans:mensagemTISS']['ans:cabecalho'];
    
    const numeroDoProtocolo = objetoDoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:numeroLote'];
    const codigoDoPrestador = cabecalhoXML['ans:origem']['ans:identificacaoPrestador']['ans:codigoPrestadorNaOperadora'];
    const versaoXML = cabecalhoXML['ans:Padrao'] ? cabecalhoXML['ans:Padrao'] : cabecalhoXML['ans:versaoPadrao'];
    const registroANS = cabecalhoXML['ans:destino']['ans:registroANS'];

    cabecalhoDoXML.campoCodigoDoPrestador.value = codigoDoPrestador;
    cabecalhoDoXML.camposVersaoXML.innerText = versaoXML;
    cabecalhoDoXML.campoRegistroANS.value = registroANS;
    cabecalhoDoXML.campoNumeroDoProtocolo.value = numeroDoProtocolo;

    const guiasXML = objetoDoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:guiasTISS'];

    for (g = 0; g < guiasXML.length; g++) {
        let guia = guiasXML[g];

        let arrayProcedimentos = guia['ans:procedimentosExecutados'] ? guia['ans:procedimentosExecutados'] : "";
        let arrayDespesas = guia['ans:outrasDespesas'] ? guia['ans:outrasDespesas'] : "";

        arrayProcedimentos.length > 0 ? guia['ans:procedimentosExecutados'] : delete guia['ans:procedimentosExecutados'];
        arrayDespesas.length > 0 ? guia['ans:outrasDespesas'] : delete guia['ans:outrasDespesas'];

        let procedimentos = guia['ans:procedimentosExecutados'] ? guia['ans:procedimentosExecutados'] : "";
        let despesas = guia['ans:outrasDespesas'] ? guia['ans:outrasDespesas'] : "";
        
        let numeroGuiaPrestador = guia['ans:cabecalhoGuia']['ans:numeroGuiaPrestador'];

        campoGuiasXML.innerHTML += guiaHTML(guia, numeroGuiaPrestador, g+1);

        if (procedimentos) {
            for (p = 0; p < procedimentos.length; p++) {
                let campoProcedimentos = document.querySelector(`.box_body_guia_detalhes_cabecalho_procs-${numeroGuiaPrestador}`);
                campoProcedimentos.innerHTML += procedimentoHTML(procedimentos[p], p+1, numeroGuiaPrestador);
            }
        } else {
            document.querySelector(`.box_body_guia_detalhes_cabecalho_procs-${numeroGuiaPrestador}`).style.display = 'none';
        }

        if (despesas) {
            for (d = 0; d < despesas.length; d++) {
                let campoDespesas = document.querySelector(`.box_body_guia_detalhes_outras-${numeroGuiaPrestador}`);
                campoDespesas.innerHTML += despesaHTML(despesas[d], d+1, numeroGuiaPrestador);
            }
        } else {
            document.querySelector(`.box_body_guia_detalhes_outras-${numeroGuiaPrestador}`).style.display = 'none';
        }
    }

    adicionaEscutadorPencil();
    adicionaEscutadorLixeira();
    atualizaValores();
    atualizaSequencial();
}
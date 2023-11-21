function guiaHTML(guia, numeroGuiaPrestador, id){
    let numeroGuiaOperadora = guia['ans:dadosAutorizacao']['ans:numeroGuiaOperadora'];
    let numeroCarteirinha = guia['ans:dadosBeneficiario']['ans:numeroCarteira'];
    let senha = guia['ans:dadosAutorizacao']['ans:senha'] == undefined ? "" : guia['ans:dadosAutorizacao']['ans:senha'];

    return `
        <div class="box_body_guia box_body_guia-${numeroGuiaPrestador}" id="${id}">
            <div class="box_body_guia_resumo">
                <div class="box_body_guia_resumo_numeroCarteira">
                    <span class="box_body_guia_resumo_descricao box_body_guia_resumo_numeroCarteira_descricao">Carteirinha:</span>
                    <input class="box_body_guia_resumo_valor box_body_guia_resumo_numeroCarteira_valor-${numeroGuiaPrestador}" id="numeroCarteirinha" value="${numeroCarteirinha}" disabled>
                    <img src="imgs/pencil.png" class="icon-pencil" id="${id}" alt="Ícone para alterar">
                </div>
                <div class="box_body_guia_resumo_guiaPrestador">
                    <span class="box_body_guia_resumo_descricao box_body_guia_resumo_guiaPrestador_descricao">Guia do prestador:</span>
                    <input class="box_body_guia_resumo_valor box_body_guia_resumo_guiaPrestador_valor" id="numeroGuiaPrestador" value="${numeroGuiaPrestador}" disabled>
                    <img src="imgs/pencil.png" class="icon-pencil" id="${id}" alt="Ícone para alterar">
                </div>
                <div class="box_body_guia_resumo_guiaOperadora">
                    <span class="box_body_guia_resumo_descricao box_body_guia_resumo_guiaOperadora_descricao">Guia da operadora:</span>
                    <input class="box_body_guia_resumo_valor box_body_guia_resumo_guiaOperadora_valor" id="numeroGuiaOperadora" value="${numeroGuiaOperadora}" disabled>
                    <img src="imgs/pencil.png" class="icon-pencil" id="${id}" alt="Ícone para alterar">
                </div>
                <div class="box_body_guia_resumo_senha">
                    <span class="box_body_guia_resumo_descricao box_body_guia_resumo_senha_descricao">Senha:</span>
                    <input class="box_body_guia_resumo_valor box_body_guia_resumo_senha_valor" id="senha" value="${senha}" disabled>
                    <img src="imgs/pencil.png" class="icon-pencil" id="${id}" alt="Ícone para alterar">
                </div>
                <img src="imgs/lixeira.png" class="icon-lixeira" alt="Ícone de lixeira">
            </div>
            <div class="box_body_guia_detalhes">
                <div class="box_body_guia_detalhes_cabecalho_procs box_body_guia_detalhes_cabecalho_procs-${numeroGuiaPrestador}">
                    <div class="box_body_guia_detalhes_cabecalho_procs_titulo">Procedimentos</div>
                    <div class="box_body_guia_detalhes_cabecalho_procs_proc">
                        <div class="box_body_guia_detalhes_cabecalho_procs_proc_tabela">Tabela</div>
                        <div class="box_body_guia_detalhes_cabecalho_procs_proc_nome">Descrição</div>
                        <div class="box_body_guia_detalhes_cabecalho_procs_proc_codigo">Código</div>
                        <div class="box_body_guia_detalhes_cabecalho_procs_proc_data">Data</div>
                        <div class="box_body_guia_detalhes_cabecalho_procs_proc_valor">Valor</div>
                    </div>
                    <!-- Procedimentos -->
                    
                </div>
                <div class="box_body_guia_detalhes_outras box_body_guia_detalhes_outras-${numeroGuiaPrestador}">
                    <div class="box_body_guia_detalhes_outras_titulo">Materiais e Medicamentos</div>
                    <div class="box_body_guia_detalhes_outras_cabecalho_despesa">
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_tabela">Tabela</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_nome">Descrição</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_codigo">Código</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_data">Data</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_unidade">UN</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_qtde">Qtde</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_valorU">Valor Unitário</div>
                        <div class="box_body_guia_detalhes_outras_cabecalho_despesa_valor">Valor Total</div>
                    </div>
                    <!-- Materiais e Medicamentos -->
                                            
                </div>
            </div>

            <div class="box_body_guia_totais box_body_guia_totais-${numeroGuiaPrestador}">
                <div class="box_body_guia_totais_procedimentos">
                    <div class="box_body_guia_totais_procedimentos_descricao">Total procedimentos</div>
                    <div class="box_body_guia_totais_item_valor box_body_guia_totais_procedimentos_valor"></div>
                </div>
                <div class="box_body_guia_totais_materiais">
                    <div class="box_body_guia_totais_materiais_descricao">Total materiais</div>
                    <div class="box_body_guia_totais_item_valor box_body_guia_totais_materiais_valor"></div>            
                </div>
                <div class="box_body_guia_totais_medicamentos">
                    <div class="box_body_guia_totais_medicamentos_descricao">Total medicamentos</div>
                    <div class="box_body_guia_totais_item_valor box_body_guia_totais_medicamentos_valor"></div>            
                </div>
                <div class="box_body_guia_totais_geral">
                    <div class="box_body_guia_totais_geral_descricao">Total geral</div>
                    <div class="box_body_guia_totais_item_valor box_body_guia_totais_geral_valor"></div>
                </div>
            </div>

        </div>
    `
}

function procedimentoHTML(procedimento, id, numeroGuiaPrestador){
    let dataDoProcedimento = formatData(procedimento['ans:dataExecucao']);
    let codigoDoProcedimento = procedimento['ans:procedimento']['ans:codigoProcedimento'];
    let codigoDaTabela = procedimento['ans:procedimento']['ans:codigoTabela'];
    let descricaoProcedimento = procedimento['ans:procedimento']['ans:descricaoProcedimento'];
    let valorTotalDoProcedimento = formatValue(procedimento['ans:valorTotal']);

    return `
        <div class="box_body_guia_detalhes_procs_proc box_body_guia_detalhes_procs_proc-${numeroGuiaPrestador}" id="${id}">
            <div class="box_body_guia_detalhes_procs_proc-itens box_body_guia_detalhes_procs_proc_tabela">
                <input class="box_body_guia_detalhes_procs_proc_item" id="codigoDaTabela" value="${codigoDaTabela}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_procs_proc-itens box_body_guia_detalhes_procs_proc_nome">
                <input class="box_body_guia_detalhes_procs_proc_item" id="descricaoProcedimento" value="${descricaoProcedimento}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_procs_proc-itens box_body_guia_detalhes_procs_proc_codigo">
                <input class="box_body_guia_detalhes_procs_proc_item" id="codigoDoProcedimento" value="${codigoDoProcedimento}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_procs_proc-itens box_body_guia_detalhes_procs_proc_data">
                <input class="box_body_guia_detalhes_procs_proc_item" id="dataDoProcedimento" value="${dataDoProcedimento}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_procs_proc-itens box_body_guia_detalhes_procs_proc_valor">
                <input class="box_body_guia_detalhes_procs_proc_item" id="valorTotalDoProcedimento" value="${valorTotalDoProcedimento}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <img src="imgs/lixeira.png" class="icon-lixeira" alt="Ícone de lixeira">
        </div>
    `
}

function despesaHTML(despesa, id, numeroGuiaPrestador){
    let tabelaDaDespesa = despesa['ans:servicosExecutados']['ans:codigoTabela'];
    let descricaoDaDespesa = despesa['ans:servicosExecutados']['ans:descricaoProcedimento'];
    let codigoDaDespesa = despesa['ans:servicosExecutados']['ans:codigoProcedimento'];
    let dataDaDespesa = formatData(despesa['ans:servicosExecutados']['ans:dataExecucao']);
    let unidadeDaDespesa = despesa['ans:servicosExecutados']['ans:unidadeMedida'];
    let qtdeDaDespesa = despesa['ans:servicosExecutados']['ans:quantidadeExecutada'];
    let valorUnDaDespesa = formatValue(despesa['ans:servicosExecutados']['ans:valorUnitario']);
    let valorDaDespesa = formatValue(despesa['ans:servicosExecutados']['ans:valorTotal']);

    return `
        <div class="box_body_guia_detalhes_outras_despesa box_body_guia_detalhes_outras_despesa-${numeroGuiaPrestador}" id="${id}">
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_tabela" id="tabelaDaDespesa" value="${tabelaDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input type="text" class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_nome" id="descricaoDaDespesa" value="${descricaoDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_codigo" id="codigoDaDespesa" value="${codigoDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_data" id="dataDaDespesa" value="${dataDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_unidade" id="unidadeDaDespesa" value="${unidadeDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_qtde" id="qtdeDaDespesa" value="${parseInt(qtdeDaDespesa)}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_valorU" id="valorUnDaDespesa" value="${valorUnDaDespesa}" disabled>
                <img src="imgs/pencil.png" class="icon-pencil"  id="${id}" alt="Ícone para alterar">
            </div>
            <div class="box_body_guia_detalhes_outras_despesa_itens">
                <input class="box_body_guia_detalhes_outras_despesa_item box_body_guia_detalhes_outras_despesa_valor" id="valorDaDespesa" value="${valorDaDespesa}" disabled>
            </div>
            <div class="despesa_icon-lixeira">
                <img src="imgs/lixeira.png" class="icon-lixeira" alt="Ícone de lixeira">
            </div>
        </div>
    `
}
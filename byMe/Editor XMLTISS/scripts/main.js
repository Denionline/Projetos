const caixaInputFile = document.querySelector('.caixaInputXML');
const box = document.querySelector('.box');
const btnToXML = document.querySelector('#btnToXML');
const btnToDeleteObj = document.querySelector('#btnToDeleteObj');
const loading = document.querySelector('#loading');
const inputFile = document.querySelector('#fileXML');
const boxOut = document.querySelector('.caixaBtn');
const campoNomeDoArquivo = document.querySelector('#nomeDoArquivo');
const bloqueioDeTela = document.querySelector('.bloqueio_pop-up');
const caixaOpcoesAdicionais = document.querySelector('.opcoesAdicionais');
const campoQtdeGuiasSelecionadas = document.querySelector('.box_info_qtdeDeGuiasSelecionadas_valor');

inputFile.addEventListener('change', (event) => {
    abreLoading();
    fechaInput();

    setTimeout(() => {
        const fileXML = event.target.files[0];
        let arquivoXML;
        if (fileXML) {
            const reader = new FileReader();

            reader.onload = (event) => {
                arquivoXML = event.target.result;

                const decoder = new TextDecoder('ISO-8859-1');
                const arquivoUTF8 = decoder.decode(new Uint8Array(arquivoXML));

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(arquivoUTF8, "text/xml");
                const jsonData = parseXML(xmlDoc.documentElement);
                adicionaAoStorage(jsonData);
                atualizaDados();
            };
            reader.readAsArrayBuffer(fileXML, 'UTF-8');
        }
    }, 1000);
});

btnToXML.addEventListener('click', abrePopUpXmlGerado);
btnToDeleteObj.addEventListener('click', abrePopUpDeletaObj);
// bloqueioDeTela.addEventListener('click', () => {
//     fechaPopUpDeletaObj();
//     fechaPopUpXmlGerado(); 
// })

if (obtemObjeto()) {
    if (obtemCookie('temaDaPag')) {
        let objetoDoCookie = JSON.parse(obtemCookie('temaDaPag'));
        alteraCor(objetoDoCookie.tema);
    }
    atualizaDados();
} else {
    fechaLoading();
    abreInput();
}
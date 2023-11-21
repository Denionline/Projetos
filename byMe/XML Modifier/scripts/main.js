const caixaInputFile = document.querySelector('.caixaInputXML');
const box = document.querySelector('.box');
const btnToXML = document.querySelector('#btnToXML');
const btnToDeleteObj = document.querySelector('#btnToDeleteObj');
const inputFile = document.querySelector('#fileXML');

inputFile.addEventListener('change', (event) => {
    const fileXML = event.target.files[0];
    let arquivoXML;

    if (fileXML && !obtemObjeto()) {
        const reader = new FileReader();
        reader.onload = (event) => {
            arquivoXML = event.target.result;
            
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(arquivoXML, "text/xml");
            const jsonData = parseXML(xmlDoc.documentElement);
            adicionaAoStorage(jsonData);
            atualizaDados();
        }

        reader.readAsText(fileXML);
    }
});

btnToXML.addEventListener('click', transformObjectToXML);
btnToDeleteObj.addEventListener('click', deletaObj);

if(obtemObjeto()){
    atualizaDados();
}

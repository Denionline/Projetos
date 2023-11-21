function transformObjectToXML(){
    let objetoXML = obtemObjeto();
    let nomeDoArquivo = objetoXML['ans:mensagemTISS']['ans:prestadorParaOperadora']['ans:loteGuias']['ans:numeroLote'];
    let objetoEmXML = jsonToXml(objetoXML);
    let blob = new Blob([objetoEmXML], { type: 'application/xml' });
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${nomeDoArquivo}.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function jsonToXml(json) {
    let mensagemTISS = obtemMensagemTISSstorage();
    var xml = ``

    function convertNode(obj, parentKey) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === 'ans:guiasTISS' && Array.isArray(obj[key])) {
                    xml += '<ans:guiasTISS>';
                    for (var i = 0; i < obj[key].length; i++) {
                        xml += '<ans:guiaSP-SADT>';
                        convertNode(obj[key][i], 'ans:guiaSP-SADT');
                        xml += '</ans:guiaSP-SADT>';
                    }
                    xml += '</ans:guiasTISS>';
                } else if (key === 'ans:outrasDespesas' && Array.isArray(obj[key])) {
                    xml += '<ans:outrasDespesas>';
                    for (var j = 0; j < obj[key].length; j++) {
                        xml += '<ans:despesa>';
                        convertNode(obj[key][j], 'ans:despesa');
                        xml += '</ans:despesa>';
                    }
                    xml += '</ans:outrasDespesas>';
                } else if (key === 'ans:procedimentosExecutados' && Array.isArray(obj[key])) {
                    xml += '<ans:procedimentosExecutados>';
                    for (var j = 0; j < obj[key].length; j++) {
                        xml += '<ans:procedimentoExecutado>';
                        convertNode(obj[key][j], 'ans:procedimentoExecutado');
                        xml += '</ans:procedimentoExecutado>';
                    }
                    xml += '</ans:procedimentosExecutados>';
                } else {

                    if(key === 'ans:mensagemTISS'){
                        xml += '<' + key + ` xmlns:ans="${mensagemTISS.ans}" xmlns:xsi="${mensagemTISS.xsi}" xsi:schemaLocation="${mensagemTISS.schemaLocation}">`;
                    }else{
                        xml += '<' + key + '>';
                    }

                    if (typeof obj[key] === 'object') {
                        convertNode(obj[key], key);
                    } else {
                        xml += obj[key];
                    }

                    xml += '</' + key + '>';
                }
            }
        }
    }

    convertNode(json);
    return '<?xml version="1.0" encoding="ISO-8859-1" ?>' + xml;
}

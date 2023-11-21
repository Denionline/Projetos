function deletaObj(){
    localStorage.clear();
    
    caixaInputFile.style.display = 'block';
    box.style.display = 'none';
    btnToXML.style.display = 'none';
    btnToDeleteObj.style.display = 'none';
    inputFile.value = ''
}
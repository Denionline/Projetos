const listaTeclas = document.querySelectorAll('.tecla')

for (i=0;i<listaTeclas.length;i++){
    const tecla = listaTeclas[i]
    const som = tecla.classList[1]
    tecla.addEventListener('click', () => {
        document.querySelector(`#som_${som}`).play()
    })
}
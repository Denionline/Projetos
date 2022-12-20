let resposta = document.querySelector('.resposta')
let imagem = document.createElement('img')
imagem.setAttribute('id', 'foto')

document.querySelector('#botao_sim').addEventListener('click', () => {
    imagem.setAttribute('src', 'img/risada.jpeg')
    resposta.appendChild(imagem)
})

document.querySelector('#botao_nao').addEventListener('click', () => {
    imagem.setAttribute('src', 'img/desconfiado.jpeg')
    resposta.appendChild(imagem)
}) 
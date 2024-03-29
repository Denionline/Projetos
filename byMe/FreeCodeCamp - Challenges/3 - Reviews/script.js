const container = document.querySelector('.container-author')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

const randomBtn = document.querySelector('.random-btn')

let seqAuthor = 0;

nextBtn.addEventListener('click', () => {
    seqAuthor += 1;
    if(seqAuthor > authors.length - 1){
        seqAuthor = 0
    }
    carregaDados()
})

prevBtn.addEventListener('click', () => {
    seqAuthor -= 1;
    if(seqAuthor < 0){
        seqAuthor = authors.length - 1;
    }
    carregaDados()
})

randomBtn.addEventListener('click', () => {
    seqAuthor = parseInt(Math.random() * (3 - 0) + 0)
    carregaDados()
})

function carregaDados(){
    container.innerHTML = `
    <div class="img-container">
        <img src="${authors[seqAuthor].img}" id="person-img" alt=""/>
    </div>
    <h4 id="author">${authors[seqAuthor].name}</h4>
    <p id="job">${authors[seqAuthor].job}</p>
    <p id="info">${authors[seqAuthor].text}</p>
    `
}
carregaDados()
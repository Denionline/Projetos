let itemDaLista = document.querySelectorAll('.item');
        const listaDeItens = document.querySelector('.itens');
        const botao = document.querySelector('#btn');
        const campo = document.querySelector('#campo');
        const botaoDelete = document.querySelector('#btnD');
        const botaoSelecionarTudo = document.querySelector('#slT');
        let objeto = {};
        

        botaoSelecionarTudo.addEventListener('click', selecionaTudo)
        botaoDelete.addEventListener('click', () => {
            deleteItem()
        })
        botao.addEventListener('click', () => {
            if(campo.value){
                cadastroItem();
            }
        })
        campo.addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                if(campo.value){
                    cadastroItem();
                }
            }
        })
        
        listaDeItens.addEventListener('click', e => {            
            // listaDeItens.children[parseInt(e.target.id)].children[0].checked = true;
            for(i=0;i<listaDeItens.children.length;i++){
                if(listaDeItens.children[i].id == e.target.id){
                    if(listaDeItens.children[i].children[0].checked){
                        listaDeItens.children[i].children[0].checked = false
                    }else{
                        listaDeItens.children[i].children[0].checked = true;
                    }
                }
            }
        })

        itensJaCadastrados()
        function itensJaCadastrados(){
            serie = parseInt(localStorage.getItem('Numero da sequencia'));
            if(localStorage){
                for(id=1;id<=serie;id++){
                    if(JSON.parse(localStorage.getItem(id))){
                        let nome = JSON.parse(localStorage.getItem(id))
                        let html = `
                        <a class="item" id="${id}">
                            <input type="checkbox">
                            <span>${nome.nome}</span>
                        </a>`
                        listaDeItens.innerHTML += html;
                    }
                }
            }
            itemDaLista = document.querySelectorAll('.item');
        }

        function teste(){
            localStorage.setItem('Numero da sequencia', serie=2)
            console.log(localStorage.getItem('Numero da sequencia'))
        }

        function cadastroItem(){
            serie = localStorage.getItem('Numero da sequencia');
            if(!localStorage.getItem('Numero da sequencia')){
                localStorage.setItem('Numero da sequencia', serie=0)
            }
            serie = parseInt(serie) + 1;
            let item = document.createElement('a');
            let checkbox = document.createElement('input');
            let nome = document.createElement('span');
            nome.innerText = campo.value;
            checkbox.type = 'checkbox'
            item.classList.add('item');
            item.id = serie;
            listaDeItens.appendChild(item);
            item.appendChild(checkbox);
            item.appendChild(nome);
            
            objeto.nome = campo.value;
            localStorage.setItem(serie, JSON.stringify(objeto))
            localStorage.setItem('Numero da sequencia', serie)

            console.log(serie);
            campo.value = '';
        }

        function deleteItem(){
            serie = parseInt(localStorage.getItem('Numero da sequencia'));
            for(i=0;i<listaDeItens.children.length;i++){
                if(listaDeItens.children[i].children[0].checked === true){
                    localStorage.removeItem(listaDeItens.children[i].id)
                    listaDeItens.removeChild(listaDeItens.children[i])
                    deleteItem()
                }
            }
        }

        function selecionaTudo(){
            for(i=0;i<listaDeItens.children.length;i++){
                if(listaDeItens.children[i].children[0].checked){
                    listaDeItens.children[i].children[0].checked = false;
                }else{
                    listaDeItens.children[i].children[0].checked = true;
                }
            }  
        }
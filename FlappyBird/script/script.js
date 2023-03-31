const sprites = new Image();
sprites.src = './sprites.png';

const som_HIT = new Audio();
som_HIT.src = './efects/hit.wav';
const som_PULO = new Audio();
som_PULO.src = './efects/pulo.wav';

let frames = 0;
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
    sourceX: 390,
    sourceY: 0,
    sourceYWidth: 275,
    sourceYHeight: 204,
    destinationX: 0, 
    destinationY: canvas.height - 204,
    destinationWidth: 275,
    destinationHeight: 204,

    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.sourceX, planoDeFundo.sourceY,
            planoDeFundo.sourceYWidth, planoDeFundo.sourceYHeight,
            planoDeFundo.destinationX, planoDeFundo.destinationY,
            planoDeFundo.destinationWidth, planoDeFundo.destinationHeight,
        );

        contexto.drawImage(
            sprites,
            planoDeFundo.sourceX, planoDeFundo.sourceY,
            planoDeFundo.sourceYWidth, planoDeFundo.sourceYHeight,
            (planoDeFundo.destinationX + planoDeFundo.destinationWidth), planoDeFundo.destinationY,
            planoDeFundo.destinationWidth, planoDeFundo.destinationHeight,
        );
    },
};

function criaChao(){
    const chao = {
        sourceX: 0,
        sourceY: 610,
        sourceYWidth: 224,
        sourceYHeight: 112,
        destinationX: 0, 
        destinationY: canvas.height - 112,
        destinationWidth: 224,
        destinationHeight: 112,
    
        atualiza(){
            const movimentoDoChao = 1;
            const repeteEm = chao.sourceYWidth / 2;
            const movimentacao = chao.destinationX - movimentoDoChao;

            chao.destinationX = movimentacao % repeteEm;
        },
    
        desenha(){
            contexto.drawImage(
                sprites,
                chao.sourceX, chao.sourceY,
                chao.sourceYWidth, chao.sourceYHeight,
                chao.destinationX, chao.destinationY,
                chao.destinationWidth, chao.destinationHeight,
            );
            contexto.drawImage(
                sprites,
                chao.sourceX, chao.sourceY,
                chao.sourceYWidth, chao.sourceYHeight,
                (chao.destinationX + chao.destinationWidth), chao.destinationY,
                chao.destinationWidth, chao.destinationHeight,
            );
        }
    };
    return chao;
};

function fazColisao(flappyBird, chao){
    const flappyBirdY = flappyBird.destinationY + flappyBird.destinationHeight;
    const chaoY = globais.chao.destinationY;

    if(flappyBirdY >= chaoY){
        return true;
    }else{
        return false;
    }
}

function criaFlappyBird(){
    const flappyBird = {
        sourceX: 0,
        sourceY: 0,
        sourceYWidth: 34,
        sourceYHeight: 24,
        destinationX: 10, 
        destinationY: 50,
        destinationWidth: 34,
        destinationHeight: 24,
        pulo: 4.6,
        pula(){
            som_PULO.play();
            flappyBird.velocidade = - flappyBird.pulo;
        },
    
        gravidade: 0.25,
        velocidade: 0,
    
        atualiza(){
            if(fazColisao(flappyBird, globais.chao)){
                som_HIT.play();

                setTimeout(() => {
                    mudaParaTela(Telas.INICIO);
                },500);

                return;
            }
    
            flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
            flappyBird.destinationY = flappyBird.destinationY + flappyBird.velocidade;
        },
        frameAtual: 0,

        atualizaOFrameAtual(){
            const intervaloDeFrames = 0;
            const passouDoIntervalo = frames % intervaloDeFrames === 0;
            if(passouDoIntervalo){
                const baseDoIncremento = 1;
                const incremento = baseDoIncremento + flappyBird.frameAtual;
                const baseRepeticao = flappyBird.movimentos.length;
                flappyBird.frameAtual = incremento % baseRepeticao;
            };
            // console.log('Incremento = ' + incremento)
            // console.log('baseRepeticao = ' + baseRepeticao)
            // console.log('frameAtual = ' + flappyBird.frameAtual)
        },

        movimentos: [
            { sourceX: 0, sourceY: 0, },
            { sourceX: 0, sourceY: 26, },
            { sourceX: 0, sourceY: 52, },
        ],
    
        desenha(){
            flappyBird.atualizaOFrameAtual();
            const { sourceX, sourceY } = flappyBird.movimentos[flappyBird.frameAtual];
            contexto.drawImage(
                sprites,
                sourceX, sourceY,
                flappyBird.sourceYWidth, flappyBird.sourceYHeight,
                flappyBird.destinationX, flappyBird.destinationY,
                flappyBird.destinationWidth, flappyBird.destinationHeight,
            );
        }   
    };
    return flappyBird;
};


const mensagemGetReady = {
    sourceX: 134,
    sourceY: 0,
    sourceYWidth: 174,
    sourceYHeight: 152,
    destinationX: (canvas.width / 2) - 174 / 2,
    destinationY: 50,
    destinationWidth: 174,
    destinationHeight: 152,

    desenha(){
        contexto.drawImage(
            sprites,
            mensagemGetReady.sourceX, mensagemGetReady.sourceY,
            mensagemGetReady.sourceYWidth, mensagemGetReady.sourceYHeight,
            mensagemGetReady.destinationX, mensagemGetReady.destinationY,
            mensagemGetReady.destinationWidth, mensagemGetReady.destinationHeight,
        );
    }
};

const globais = {};
let telaAtiva = {};

function mudaParaTela(novaTela){
    telaAtiva = novaTela;

    if(telaAtiva.inicializa){
        telaAtiva.inicializa();
    }
};

function criaCanos(){
    const canos = {
        largura: 52,
        altura: 400,
        chao: {
            sourceX: 0,
            sourceY: 169,
        },
        ceu: {
            sourceX: 52,
            sourceY: 169,
        },
        espaço: 80,

        desenha(){
            canos.pares.forEach(function(par) {
                const yRandom = par.y;
                const espacamentoEntreOsCanos = 90;
    
                //Cano do Céu -----------------------------------------------------
                const canoCeuX = par.x;
                const canoCeuY = yRandom;
                contexto.drawImage(
                    sprites,
                    canos.ceu.sourceX, canos.ceu.sourceY,
                    canos.largura, canos.altura,
                    canoCeuX, canoCeuY,
                    canos.largura, canos.altura,
                );
    
                //Cano do Céu -----------------------------------------------------
                const canoChaoX = par.x;
                const canoChaoY = canos.altura + espacamentoEntreOsCanos + yRandom;
                contexto.drawImage(
                    sprites,
                    canos.chao.sourceX, canos.chao.sourceY,
                    canos.largura, canos.altura,
                    canoChaoX, canoChaoY,
                    canos.largura, canos.altura,
                );

                par.canoCeu = {
                    x: canoCeuX,
                    y: canos.altura + canoCeuY
                }
                par.canoChao = {
                    x: canoCeuX,
                    y: canoCeuY
                }
            })
        },

        temColisaoComOFlappyBird(par){
            const cabecaDoFlappy = globais.flappyBird.destinationY;
            const peDoFlappy = globais.flappyBird.destinationY + globais.flappyBird.sourceYHeight;

            if(globais.flappyBird.destinationX >= par.x){
                if(cabecaDoFlappy <= par.canoCeu.y){
                    return true;
                }
                if(peDoFlappy >= par.canoChao.y){
                    return true;
                }
                return false;
            }
        },

        pares:[],

        atualiza(){
            const passou100Frames = frames % 100 === 0;

            if(passou100Frames){
                canos.pares.push({
                        x: canvas.width,
                        y: -150 * (Math.random() + 1),
                });
            }
            canos.pares.forEach(function(par){
                par.x = par.x - 2;

                if(canos.temColisaoComOFlappyBird(par)){
                    som_HIT.play()
                };

                if(par.x + canos.largura <= 0){
                    canos.pares.shift();
                };
            });
        },
    };
    return canos;
};

const Telas = {
    INICIO:{
        inicializa(){
            globais.flappyBird = criaFlappyBird();
            globais.canos = criaCanos();
            globais.chao = criaChao();
        },
        desenha(){
            planoDeFundo.desenha();
            globais.flappyBird.desenha();            
            globais.chao.desenha();
            mensagemGetReady.desenha();
        },
        click(){
            mudaParaTela(Telas.JOGO)
        },
        atualiza(){            
        }
    }
};

Telas.JOGO = {
    desenha(){
        planoDeFundo.desenha();
        globais.flappyBird.desenha();
        globais.canos.desenha();
        globais.chao.desenha();
    },
    click(){
        globais.flappyBird.pula();
    },
    atualiza(){
        globais.flappyBird.atualiza();
        globais.chao.atualiza();
        globais.canos.atualiza();
    }
};

function loop(){
    telaAtiva.desenha();
    telaAtiva.atualiza();

    frames = frames + 1;

    requestAnimationFrame(loop);
}

canvas.addEventListener('click', () => {
    if(telaAtiva.click){
        telaAtiva.click();
    }
})

mudaParaTela(Telas.INICIO);
loop();
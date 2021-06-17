
// definições de funções globais globais 
function mudaParaBanner1(){
    document.getElementById('banner-img1').style.marginLeft = '0%'
    document.getElementById('banner-img2').style.right = '-100%'
    document.getElementById('label1-banner').style.backgroundColor = '#252525'
    document.getElementById('label2-banner').style.backgroundColor = 'white'
    document.getElementById('label1-banner').style.width = '300px'
    document.getElementById('label2-banner').style.width = '150px'
}

function mudaParaBanner2(){
    document.getElementById('banner-img1').style.marginLeft = '-100%'
    document.getElementById('banner-img2').style.right = '0px'
    document.getElementById('label1-banner').style.backgroundColor = 'white'
    document.getElementById('label2-banner').style.backgroundColor = '#252525'
    document.getElementById('label1-banner').style.width = '150px' 
    document.getElementById('label2-banner').style.width = '300px'

}


//abre menu
function abreMenu(){

	var abreMenu = document.getElementById('menu');
    abreMenu.style.left = '0px';

}
//fecha menu
function fechaMenu(){
    var fecha = document.getElementById('menu');

    fecha.style.left = '-800px';

}

//botões banner
function botaoBanner(botao){

    if (botao === 'botao2') {
        mudaParaBanner2()

    }else if (botao === 'botao1') {
        mudaParaBanner1()
    }

}

function botaoBannerMobile(botao){
    if (botao === 'botao2'){
        mudaParaBanner2()
    }else if (botao === 'botao1'){
        mudaParaBanner1()
    }
}

//banner automatico
setInterval(function(){
    mudaParaBanner2()
}, 5000)

setInterval(function(){
    mudaParaBanner1()
}, 10000)
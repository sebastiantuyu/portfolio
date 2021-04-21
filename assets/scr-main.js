
// CONSULTAR MEDIOS DE PAG

var win = window.matchMedia('screen and (max-width:767px)');
var x = document.getElementById('form');
var y = true;



var menu = document.querySelector('#menu');
const btn = document.querySelector('#menu-btn');
btn.addEventListener('click', onOff);
win.addListener(show);

function show(event){
    console.log(event.matches);
}

function action(){
    
    if (y) {
        //x.style.visibility = 'hidden';
        setTimeout(() => {  x.style.display='none'; }, 1050);
        x.style.opacity =0;
        y = false;
    }else{
        x.style.opacity=0;
        y = true;
    }
}


function onOff(){
    console.log('ok');

    if(!menu.classList.contains('active')){
       menu.classList.add('active');
       }else{
        menu.classList.remove('active');
       }
}
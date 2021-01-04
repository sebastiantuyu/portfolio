
var x = document.getElementById('form');
var y = true;

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


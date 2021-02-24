let mob = false
let x = document.getElementById('img-container')
if (window.innerWidth<1024){
  x = document.getElementById('img-container-mobile')
  mob = true
}else{
  //let x = document.getElementById('img-container')
}
//let x = document.getElementById('img-container')

window.addEventListener('scroll',function(e){
  if(this.scrollY>=this.innerHeight){
        setTimeout(function(){
          if(mob){x.scroll({left: 200,behavior: "smooth"});}
          else{x.scroll({top: 500,behavior: "smooth"});}

                },1000)
        }  
        })
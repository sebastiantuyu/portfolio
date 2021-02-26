let mob = false
let x = document.getElementById('img-container')
let bSection = document.getElementById('bSection')

if (window.innerWidth<1024){
  x = document.getElementById('img-container-mobile')
  let bMenu = document.getElementById('b-menu')
  bMenu.addEventListener('click',function(){
    if(!bSection.classList.contains('m-transition')){
      bSection.classList.add('m-transition')
    }else{
      bSection.classList.remove('m-transition')
    }
  })
  var titlePro = document.getElementById('p-title')
  var descrPro = document.getElementById('p-descr')
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

function closeMenu(){
  console.log("ok")
  if(bSection.classList.contains('m-transition')){
    console.log("ok")
    bSection.classList.remove('m-transition')
  }
}

function Manimations(){
    let main = document.getElementById('main-div')
    let bar = document.getElementById('brand-bar')
    setTimeout(function(){
      main.classList.add('main-tran')
      bar.style.opacity =1;
    },200)
}

function redirectTo(e){
  let scroll_size = 0

  if(e == 'biog'){
      scroll_size =  window.innerHeight
  }
  else if(e=='proyect'){
    scroll_size = window.innerHeight*2
  }
    
  
  console.log(scroll)
  bSection.classList.remove('m-transition')
  /*window.scroll({top: scroll,behavior: "smooth"});*/
  setTimeout(function(){
    window.scroll({top: scroll_size,behavior: "smooth"})
  },250)
}


function mLeft(){
    titlePro.innerHTML = "Previous"
}

function mRight(){
  titlePro.innerHTML = "Next"
}
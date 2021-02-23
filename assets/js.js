let x = document.getElementById('img-container')
window.addEventListener('scroll',function(e){
  if(this.scrollY>=this.innerHeight){
  setTimeout(function(){
x.scroll({
    top: 500,
    behavior: "smooth"
  });
  },1000)
}  
})
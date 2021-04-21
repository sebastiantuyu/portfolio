function hideHelper(){
    var h = document.getElementById('i-helper')
    if(h.style.display == 'none'){
      h.style.display='flex';
    }else{
      h.style.display='none';
    }
  }
  
  function hideApps(){
    var h = document.getElementById('i-apps')
    if(h.style.display == 'none' || h.style.display == ""){
      h.style.display='flex';
    }else{
      h.style.display='none';
    }
  }

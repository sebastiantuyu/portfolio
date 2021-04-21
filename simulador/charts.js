var y = document.getElementById("amount-tag");
var x = document.getElementById("amount");
const yoyRange = document.getElementById("yoy")
const yTag = document.getElementById("yoy-tag")

let a1,a2,a3,a4
let namesApps = []
let appsDesk = []
var yoy = [0,0,0,0,0,0,0,0,0,0];
var savings = [0,0,0,0,0,0,0,0,0,0];
let dataMeta =[['Year', 'Invirtiendo', 'Sin invertir']];
const apps = {
    'cetes':{
        'yoy':4,
        'url':'img/cetes.png',
        'link':'http://cetesdirecto.com/',
        },
    'fmexicana':{
        'yoy':9,
        'url':'img/fmexicana.png',
        'link':'https://financieramexicana.com/',
        },
    'finsus':{
        'yoy':10,
        'url':'img/finsus.png',
        'link':'https://www.finsus.app/',
        },
    'kubo':{
        'yoy':10,
        'url':'img/kubo.png',
        'link':'https://www.kubofinanciero.com/Kubo/Portal/index.xhtml',
        },
    'supert':{
        'yoy':10,
        'url':'img/sptasas.png',
        'link':'https://supertasas.com/',
        },
    'ladrillos':{
        'yoy':12,
        'url':'img/ladrillos.png',
        'link':'https://www.100ladrillos.com/',
        },
    'monific':{
            'yoy':13,
            'url':'img/monific.png',
            'link':'https://monific.com/',
        },
    'briq':{
        'yoy':16,
        'url':'img/briq.png',
        'link':'https://www.briq.mx/',
    },
    'doopla':{
        'yoy':18,
        'url':'img/doopla.png',
        'link':'https://www.doopla.mx/invierte-tu-dinero',
    },
    'snowball':{
        'yoy':20,
        'url':'img/snowball.png',
        'link':'http://snowball.mx/',
    },
    'wortev':{
        'yoy':24,
        'url':'img/wortev.png',
        'link':'https://wortev.capital/',
        },
    'bitso':{
        'yoy':25,
        'url':'img/bitso.png',
        'link':'https://bitso.com/',
    },
    'gbm':{
        'yoy':25,
        'url':'img/gbm.png',
        'link':'https://www.gbmhomebroker.com/',
    },
    'bursanet':{
        'yoy':25,
        'url':'img/bursanet.png',
        'link':'https://www.bursanet.mx/',
    },
    'flink':{
        'yoy':25,
        'url':'img/flink.png',
        'link':'https://miflink.com/',
    },
    'bitcoin':{
        'yoy':25,
        'url':'img/bitcoin.png',
        'link':'https://bitcoin.org/',
    },

}


function amountChange(){
  y.innerHTML = x.value;
  drawChart(x.value*1000);
}

function yoyChange(){
    yTag.innerHTML = yoyRange.value
    yoyA.innerHTML = yoyRange.value
    drawChart(x.value*1000);
    updateApps(yoyRange.value)
}


function setData(){
    if(window.innerWidth>=1024){
        a1 = document.getElementById('app-1')
        a2 = document.getElementById('app-2')
        a3 = document.getElementById('app-3')
        a4 = document.getElementById('app-4')
        yoyA = document.getElementById('y-a')

    }else{
        a1 = document.getElementById('app-m-1')
        a2 = document.getElementById('app-m-2')
        a3 = document.getElementById('app-m-3')
        a4 = document.getElementById('app-m-4')
        yoyA = document.getElementById('y-b')
    }

    appsDesk.push(a1)
    appsDesk.push(a2)
    appsDesk.push(a3)
    appsDesk.push(a4)
    addingEvents()
    yTag.innerHTML = yoyRange.value
    yoyA.innerHTML = yoyRange.value
    /*appsDesk.map(values => {
        setImage(values)
    })*/
    getNames()
    updateApps(yoyRange.value)


}

function getNames(){
    for (values in apps){
        namesApps.push(values)
    }
}

function addingEvents(){
    appsDesk.map(values =>{
        values.addEventListener('click',function(){
            window.location.replace(values.dataset.link)
        })
    })
}


function setImage(image,disp='flex'){
    if(image.dataset.view == 'hid'){
        image.style.display='none'
        return false
    }else{
        image.style.display=disp
        return true
    }

}

function hideEmpty(number){
    let tot = appsDesk.length-1
    let k = 0
    for(let j=tot;j>=0;j--){
        if(k<=number){
            setImage(appsDesk[j])
        }
        k++
    }
}

function updateApps(valueY){
    
    let matches = []
    let links = []
    let big = false
    /* MODIFICAR APPS PARA VISTA B */
    for (values in apps){
        if (apps[values].yoy>=valueY){
            matches.push(apps[values].url)
            links.push(apps[values].link)
        }
    }

    if(matches == 0){
        matches = []
        for (values in apps){
            if (apps[values].yoy<=valueY){
                matches.push(apps[values].url)
                links.push(apps[values].link)
            }
        }
        big = true
    }
    
    if(matches.length<3){
        let count = 0
        appsDesk.map((values,index)=>{
            /* SE AGREGAN EN ORDEN NORMAL */
                if(matches[index]){
                    appsDesk[index].src = matches[index]
                    appsDesk[index].dataset.link = links[index]
                    appsDesk[index].dataset.view = 'vis'
                    count++
                }else{
                    appsDesk[index].dataset.view='hid'
                    
                }
                setImage(appsDesk[index])
        })
    }else{
                if(big){
                        let j =0
                        for(let k=(matches.length-1);k>=0;k--){
                            /* SE AGREGAN EN ORDEN INVERSO */
                            if(j<4){
                                appsDesk[j].src = matches[k]
                                appsDesk[j].dataset.link = links[k]
                                appsDesk[j].dataset.view = 'vis'
                                setImage(appsDesk[j])
                                
                            }
                            j++    
                        }

                        /*  ------------------------   */
                }else{
                    let j =0
                    for(let k=0;k<matches.length;k++){
                        /* SE AGREGAN EN ORDEN NORMAL */
                        if(j<4){
                            appsDesk[j].src = matches[k]
                            appsDesk[j].dataset.link = links[k]
                            appsDesk[j].dataset.view = 'vis'
                            setImage(appsDesk[j])
                            
                        }
                        j++
                }
            }
    }
}



/* ONLINE FUNCTIONS */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(value) {
  
  
  this.value = parseInt(value);
  processData(value,yoyRange.value);

  
    var data = google.visualization.arrayToDataTable(dataMeta);
    var options = {
      hAxis: {title: 'Años', titleTextStyle: {color: '#333333'}, ticks: [{v:1,f:"1"},{v:5,f:"5"},{v:8,f:"8"},{v:10,f:"10"}]},
      legend:'bottom',
      backgroundColor: 'transparent',
      vAxis: {format: 'currency',textPosition:'outside'},
      curveType: 'function',
      vAxis: {title: 'Pesos (M X N)',minVal:0, ticks: [ {v:25000,f:"25k"},{v:50000,f:"50k"},{v:100000,f:"100k"},{v:300000,f:"300k"},{v:500000,f:"500k"}] },
      };

        options.vAxis.ticks = getTicks(options.vAxis.ticks)

        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
  
}


function processData(value,roy){
  
  let i;  
  this.value = parseInt(value);
  for(i=0;i<yoy.length;i++){
     if(i==0){ yoy[i] = (this.value + this.value) * ((roy/100)+1);}
     else{ yoy[i] = (yoy[i-1] + this.value) * ((roy/100)+1);}
     savings[i] = (this.value*((i+1)));
     
    }
 
  for(i=0;i<yoy.length;i++){
    if(dataMeta.length>1){
      dataMeta[i+1]=([i+1,yoy[i],savings[i]]);
    }else{
      dataMeta.push([i+1,yoy[i],savings[i]]);
    }
  }
}

function getTicks(ticksValue){
    let medRange = [{v:25000,f:"25k"},{v:50000,f:"50k"},{v:100000,f:"100k"},{v:300000,f:"300k"},{v:500000,f:"500k"},{v:700000,f:"700k"}]
    let bigRange = [{v:50000,f:""},{v:100000,f:"100k"},{v:200000,f:"200k"},{v:400000,f:"450k"},{v:600000,f:"650k"},{v:800000,f:"850k"},{v:1000000,f:"1M"},{v:1200000,f:"1.25M"},{v:1400000,f:"1.40M"}]
    if ((yoyRange.value>15 && yoyRange<22) || (x.value>12 && x.value<16)){
        ticksValue = medRange
    }else if(16 <= x.value){
        ticksValue = bigRange
    }
    return ticksValue

}
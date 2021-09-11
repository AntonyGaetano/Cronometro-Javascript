var relogio = document.getElementById("cronometro");
var seg = 0;
var min= 0;
var hrs= 0;


const Iniciar = () =>{

if(seg == 60){
    seg = 0;
    min++;  
    
    if(min == 60){
        min = 0;
        hrs++;
    }
}


var format =  (hrs < 10? "0"+ hrs : hrs)+":"+(min < 10? "0"+ min : min) + ":" + (seg < 10? "0"+ seg : seg)
   

relogio.innerHTML = format;
seg++;
}

const Parar = () =>{
    clearInterval(tmp);
    document.getElementById("iniciar").innerHTML="Retornar";
}

const Reset = () =>{
    clearInterval(tmp);
    min = 0;
    seg = 0;
    hrs = 0;
   
    document.getElementById("iniciar").innerHTML="Iniciar";
    relogio.innerHTML = "00:00:00";

}

function ChamaFuncoes(){
    tmp = setInterval(Iniciar,100)
}
var relogio = document.getElementById("cronometro");
var segundo = 0;
var minuto = 0;
var hora = 0;


const Iniciar = () =>{
    var seg;
    var min;
    var hrs;
    
if(segundo == 60){
    segundo = 0;
    minuto++;   
}

else if(minuto == 60){
    minuto = 0;
    hora++;
}

(segundo < 10)? seg = "0"+segundo: seg = segundo;
(minuto < 10)? min = "0"+minuto: minuto = minuto;
   

relogio.innerHTML = hrs+":"+min+":"+seg;
segundo++;
}

const Parar = () =>{
    clearInterval(tmp);
    document.getElementById("iniciar").innerHTML="Retornar";
}
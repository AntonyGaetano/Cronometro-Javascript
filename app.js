 
 var relogio = document.getElementById('cronometro');
 var btn_iniciar = document.getElementById('iniciar');
 var seg = 0;
 var min= 0;
 var hrs= 0;

 var cont_Iniciar = 0;

const Iniciar = () =>{

 (btn_iniciar.innerHTML=="Retornar"?btn_iniciar.innerHTML="Iniciar":btn_iniciar.innerHTML);

 
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

const Pausar = () =>{
    clearInterval(tmp);
    document.getElementById("iniciar").innerHTML="Retornar";
    cont_Iniciar = 0;
}

const Reset = () =>{
    clearInterval(tmp);
    min = 0;
    seg = 0;
    hrs = 0;
   
    document.getElementById("iniciar").innerHTML="Iniciar";
    relogio.innerHTML = "00:00:00";
    cont_Iniciar = 0;
}


function ChamaFuncoes(){
    if(cont_Iniciar == 0){
      tmp = setInterval(Iniciar,1000);
      cont_Iniciar = 1;
    }
    else{}
}
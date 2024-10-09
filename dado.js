function dado(max){
return Math.floor(Math.random()*max);
}


function lanzarDado(){
    let contador=0;
    let suma=0;
    for (let i=0; i<100; i++){
        
      let  numero=dado(6);
       
        suma+=numero;
        if (suma==7){
            contador++;
            suma=0;
        }
    }
    
    console.log(contador);
}

lanzarDado();
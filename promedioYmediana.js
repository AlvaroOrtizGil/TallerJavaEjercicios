//Mediana de un array-->es el valor que se encuentra en el cetro deun array ordenad
//Es como el valor central
//promedio = media 
let poscionMedia=0;


function mediana(array){
    let arrayOrdenado = array.sort((a, b) => a - b);
   let longitud=arrayOrdenado.length
   let posicionMedia = Math.floor(longitud / 2);
        
        if (longitud % 2 === 0) { // Si la longitud es par
            // Promedio de los dos valores centrales
            console.log( (arrayOrdenado[posicionMedia - 1] + arrayOrdenado[posicionMedia]) / 2);
        } else { // Si la longitud es impar
            // Devolver el valor central
            console.log(arrayOrdenado[posicionMedia]);
        }
        
}

let numero=[1,2,3,4];

 mediana(numero);

//Generador de numero primos Ejercicio 7

/* Descripción: Escribe una función que reciba un número y devuelva un array con
todos los números primos menores o iguales a ese número.*/


let numero;
//lo dividiemos entre todos sus numeros anteriores si da 0 2 veces es primo
function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }


function obtenerPrimos(numero){
    for (let i=2;i<=numero;i++){
        if (esPrimo(i)){
            console.log("Numero Primo",i,",")
        }
    }
    

}


  obtenerPrimos(27);
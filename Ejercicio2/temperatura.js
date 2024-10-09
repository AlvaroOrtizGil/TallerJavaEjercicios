

var expr = prompt("1-> de celsius a fahrenheit  2->de fahrenheit a celsius");

switch(expr) {
    case '1': // Comparar con string
         do{
            gradoCelsius = parseFloat(prompt("Introduce los grados en Celsius"));
         
        }while(isNaN(gradoCelsius));// isNaN() devuelve true si el valor no es un número (NaN), y false si es un número válido.
        celsiusFahrenheit(gradoCelsius); // Llamada con argumento
        //alert('${gradoFahrenheit}grados Celsius');
        break;
    case '2': // Comparar con string
    do{
     gradoFahrenheit = parseFloat(prompt("Introduce los grados en Fahrenheit"));
    }while(isNaN(gradoFahrenheit));
        fahrenheitCelsius(gradoFahrenheit); // Llamada con argumento
        // alert('${gradoFahrenheit}grados Fahrenheit');
        break;
    default:
        console.log("Opción no válida");
}


function celsiusFahrenheit(gradoCelsius) {
    let gradoFahrenheit = gradoCelsius * 1.8 + 32;
    console.log(`El resultado en Fahrenheit es: ${gradoFahrenheit}`);
}

function fahrenheitCelsius(gradoFahrenheit) {
    let gradoCelsius = (gradoFahrenheit - 32) / 1.8;
    console.log(`El resultado en Celsius es: ${gradoCelsius}`);
}

gradoCelsius=30;
celsiusFahrenheit(gradoCelsius);




let gradoCelsius=30;
let gradoFahrenheit=40;
function celsiusFahrenheit(gradoCelsius){
    gradoFahrenheit=gradoCelsius*1.8+32;
    console.log(gradoFahrenheit);
}
function FahrenheitCelsius(gradoFahrenheit){
   gradoCelsius=gradoFahrenheit/(1.8+32);
   console.log(gradoCelsius);
}

celsiusFahrenheit(gradoCelsius);
FahrenheitCelsius(gradoFahrenheit);
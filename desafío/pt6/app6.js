
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludoHola() {
    console.log("¡Hola, mundo!");
}
   saludoHola(); //IMPORTANTE SIEMPRE LLAMAR A LA FUNCIÓN


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.       function saludar(nombreDelUsuario) {
    //el (nombre) indica que hay un parámetro
function HolaNombre(nombre) {
        console.log(`¡Hola, ${nombre}`);
    }

    HolaNombre("María");  //aquí se indica el parámetro a utilizar

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 function numeroRecibido(numero) {
    console.log(parseInt(numero)*2)
 }

 numeroRecibido ("7")

//OTRA MANERA DE HACERLO:
 // function calcularDoble(numero) {
    //return numero * 2;
  //}
  
  //let resultadoDoble = calcularDoble(7);
//  console.log(resultadoDoble);//


//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function TresNumeros(a, b, c) {
    return (a + b + c) / 3; 
    
}

let promedio = TresNumeros(7,3,1);
console.log(promedio);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a, b) {
    return (a > b ? a : b); 
    
}

let Mayor = numeroMayor(7,3);
console.log(Mayor);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMultiplicar(d) {
    return (d * d); 
    
}

let multiplo = numeroMultiplicar(7);
console.log(multiplo);

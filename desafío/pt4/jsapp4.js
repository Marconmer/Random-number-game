//1
let mensaje = "Hola, bienvenido a esta página";

console.log(mensaje);

//2
let nombre = "María";

console.log(`¡Hola, ${nombre}!`);

//3
alert (`¡Hola, ${nombre}!`);

//4
let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");

console.log (pregunta);

//5
let valor1 = 73;
let valor2 = 37;
let resultado = valor1 + valor2;
console.log (`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);


//6
let valore1 = 7;
let valore2 = 3;
let resultado2 = valore1 - valore2;

console.log(`La diferencia entre ${valore1} y ${valore2} es igual a ${resultado2}.`);

//7
let edad = parseInt(prompt("Por favor ingrese su edad:"));

if (edad >=  18) {
    console.log(`Es mayor de edad, tiene ${edad} años`);
} else {
    console.log(`Es menor de edad, tiene ${edad} años`)
}

//8
let number = parseInt(prompt("Ingrese un valor:"));

if (number > 0) {
    console.log(`El número ${number} es positivo`);
} else if (number < 0) {
    console.log (`El número ${number} es negativo`);
} else {
    console.log(`El número es cero`)
}

//9
let numerito = 1;
// ese ++ le indica que sime hasta que llegue a 10 por poner le <=
while(numerito <= 10) {
    console.log(numerito);
    numerito++;
}

//10
let nota = 100
if ( nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//11
console.log(Math.random()*10);

//12
// como math random da de 0 a 0.9 el número por eso se multiplica por 10 y luego se suma 1
console.log(Math.floor(Math.random()*10 + 1));

//13
console.log(Math.floor(Math.random()*1000 + 1));

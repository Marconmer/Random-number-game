alert('¡Bienvenida y bienvenido a nuestro sitio web!');

// puedo agregar comentarios
let nombre = "Luna";
let edad = "25";
let saldoDisponible = "1000";

alert ("¡Error! Completa todos los campos");

let mensajeDeError = "¡Error! Completa todos los campos";
alert (mensajeDeError)
/*
En la sección de abajo no puse let nombre porque
me salía error.
*/
nombre = prompt("Ingrese su Nombre")
edad = prompt("Ingrese su Edad")

if (edad >= 18 ) {
    alert('Hola' + nombre + 'Puede obtener su licencia');
} else { 
    alert('Hola' + nombre + 'Lo siento, no posees la edad requerida para obtener tu licencia.');
}
// en esto necesito preguntar porqué ese + nombre +
//no funciona 
//prompt sirve para preguntar información
let diaDeSemana = prompt('Que dia de la semana es?');
if (diaDeSemana == 'Sabado' || diaDeSemana === 'Domingo' )
{
    alert("Buen fin de semana");
} else {
    alert("¡Buena Semana!")
}

//se usa el else if cuando va a ser una condicional de tres partes
let numeroUsuario = prompt ('¿Que numero vas a ingresar?');
if (numeroUsuario > 0)
{
    alert("Numero positivo")
} else if (numeroUsuario < 0) {
    alert("Numero negativo");
} else {
    alert("Numero es cero");
}
//para comparar menor o igual que, se pone asi
// <= no al reves o no sirve
let puntuacion = prompt('¿Que puntuación le pones al juego?');
if (puntuacion >= 100)
{
    alert("¡Felicidades, has ganado!");
} else if (puntuacion < 100)
{
    alert('Intenta nuevamente para ganar');
}
//cuando uno quiere usar un string, entonces se usan las tildes invertidas y se pone el ${}
let saldo = "$1000"
alert (`Su numero de cuenta es: ${saldo}`);

let nombreUsuario = prompt('Ingrese su nombre')
alert(`Bienvenido ${nombreUsuario}`);

console.log("Hola mundo");
alert('Hola Mundo')

let numeroMaximoPosible = 100; 
//let numeroMaximoPosible = 10 

let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) + 1;
// let numeroSecreto = 6; (antes de poner el Math.random()) --> let numeroSecreto = Math.floor(Math.random()*10 + 1);
//al poner la variable numeroMaxPos, se cambio el *10 por esa variable
//prompt pide información al usuario
//bucles - cuando finalizar el programa, cuando acierte el #
// se pone llave, luego tabulador (--> <--) y se cierra llave
// es importante que antes del bucle se ponga la variable afuera como let variable;
//para marcar diferente la comparación es !=

let numeroUsuario = 0;
//contador
//crear variable de intentos
let intentos = 1; 

//para el contador, se necesita arreglar la palabra vez para cuando es singular
//let palabraVeces = 'vez';
//hay que tener cuidado que ya que puse let numeroUsuario arriba, en el bucle no puede estar ese let numeroUsuario
//tiene que estar solo el numeroUsuario para el prompt o se hace un bucle sin fin

//vamos a definir otra variable de máximo de intentos
let maximoDeIntentos = 6;
//let maximoDeIntentos = 3;

// [si se activa la opción de console.log se puede saber el número secreto en la consola de desarrolladores. si esta apagado, no.]
console.log[typeof(numeroUsuario)];  //type of me indica que lo que recibo del usuario es string

while(numeroUsuario != numeroSecreto) {
   //la nueva opcion parseInt me convierte en número entero para JS lo que antes lo tomaba como string (variable)
    numeroUsuario = parseInt(prompt(`Me indicas un numero por favor entre 1 y ${numeroMaximoPosible}:`));    //numeroUsuario = prompt("Me indicas un numero por favor entre 1 y 10:");

    //condicionales
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);  //antes estaba ${palabraVeces}, pero este nuevo código se lee si intentos ==1, ?(evaluar), escribir vez o : (else) veces.
        break; //se añadio esto para terminar el ciclo y deje de mostrar los  mensajes posteriores
    } else {
        alert("Lo siento, no acertaste el numero");
    }
        if (numeroUsuario > numeroSecreto)
    {
        alert(" El numero secreto es menor");
    } else if(numeroUsuario < numeroSecreto)
    {
        alert("El numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    //intentos = intentos + 1;  (se cambió en una de las prácticas a la de abajo)
    //intentos += 1; //lo que tiene le suma 1

    intentos ++; //reducimos el código, indica lo mismo

   // desonectada por ahora --> palabraVeces = 'veces'; //se agrega esta línea para que no haya problemas con que exista vez cuando hay fueron mas intentos
if (intentos > maximoDeIntentos) {
    alert(`Llegaste al número máximo de ${maximoDeIntentos} intentos`);
    break; // cortar el bucle, salir de la condición de while
}
}




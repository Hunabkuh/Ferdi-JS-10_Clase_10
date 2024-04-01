// EJERCICIO DE INTERCAMBIO DE VALORES EN DOS VARIABLES

// Pides dos nombres al usuario.Ejemplo, el usuario entra:
// Variable A = “Alejandro”
// Variable B = “Noelia”

// Primero mostramos estos valores, del tipo:
// “En Barcelona está Alejandro, y en Tarragona está Noelia”

// Después intercambiamos los valores,
//     Y mostramos:
// “En Barcelona está Noelia, y en Tarragona está Alejandro”

// Muestras el valor real cambiado de cada variable, no simplemente cambiar la visualización.Es decir, que al hacer console.log(A) y console.log(B), antes y después, se vea que el contenido de la variable ha cambiado.

// Puedes usar en pantalla exactamente la misma instrucción antes y después, pero el resultado debe ser diferente:
// document.write(“En Barcelona está A, y en Tarragona está B”


// Ejercicio típico, no buscar la solución en internet, hay que pensar!



let nom1 = prompt("Escribe el nombre del primer participante:");

console.log("Paticipante " + nom1 + " guardado en variable 'nom1'");

let nom2 = prompt("Escribe el nombre del segundo participante:");

console.log("Paticipante " + nom2 + " guardado en variable 'nom2'");

console.log("En Barcelona está " + nom1 + ", y en Tarragona está " + nom2 + ". (Console Log Principal sin cambios)");

let temp = nom1;

console.log("Participante " + nom1 + " duplicado en variable temporal: 'temp'.");

nom1 = nom2;

console.log("Participante " + nom2 + "(nom2), cambiado a variable 'nom1'");

nom2 = temp;

console.log("Participante " + temp + "(nom1), cambiado a variable 'nom2'");

console.log("Después del cambio repetimos el Console Log original, quedando así: ");

console.log("En Barcelona está " + nom1 + ", y en Tarragona está " + nom2 + ".");
// ADIVINAR UN COLOR

// Creas una variable con un color que tú decidas.

// Sigue preguntando el programa hasta que el usuario adivine el color

// Si lo adivina, das mensaje de “felicidades!”


const color = 'Rojo';


function adivinar(colorEscogido) {
    while (color !== colorEscogido) {
        colorEscogido = prompt("¡Adivina un color y gana fabulosos premios!, escríbelo a continuación: ");
    }
    alert("Correcto. Haz ganado un coche 0km!!");
}

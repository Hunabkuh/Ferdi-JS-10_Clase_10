// TIENDA MUEBLES *

// Tienes un super-catálogo de 4 muebles:

// Silla Macintosh, Silla IKEA, Mesa Roble, Mesa IKEA

// Encontrar con las preguntas adecuadas(prompts) y responder s / n y encontrar cuál es el mueble elegido

// Que sea el mínimo de preguntas.

// Usar condicionales con esas respuestas para encontrar el mueble correcto.

// Mostrar respuesta(mueble correcto) en alert o en pantalla.



let respuesta = prompt("¿Qué tipo de mueble busca?, Seleccione el número correspondiente:\n 1. Mesa.\n 2. Silla.");

if (respuesta == "1") {
    let materialMesa = prompt("¿De qué material prefiere la Mesa?:\n 1. Madera.\n 2. Plástico.");

    if (materialMesa == "1") {
        alert('De este material nos queda la Mesa "Roble".');

    } else if (materialMesa == "2") {
        alert('De este material nos queda la Mesa "IKEA".');

    } else {
        alert("Debe seleccionar sólamente las opciones disponibles.");
    }

} else if (respuesta == "2") {
    let materialSilla = prompt("¿De qué material prefiere la Silla?:\n 1. Madera.\n 2. Plástico.");

    if (materialSilla == "1") {
        alert('De este material nos queda la Silla "Mackintosh".');

    } else if (materialSilla == "2") {
        alert('De este material nos queda la Silla "IKEA".');

    } else {
        alert("Debe seleccionar sólamente las opciones disponibles.");
    }

} else {
    alert("Debe seleccionar sólamente las opciones disponibles.");
}

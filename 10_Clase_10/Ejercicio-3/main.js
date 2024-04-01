// BUFFET LIBRE RESTAURANTE

// Estás en un restaurante con buffet libre y vas pidiendo platos.

// Escribes lo que se ha pedido cada vez.

// Ejemplo: qué quieres comer ? Respuesta : lentejas.En pantalla: “Has pedido lentejas”. Que se vaya viendo todo lo que se va pidiendo.

// Escribir ‘salir’ para salir.

// Cuando salgas, decir la cantidad total de platos que has comido: “has pedido 7 platos.Que aproveche!”

// NOTA: Cuando lleves 5 platos, tiene que dar el mensaje “vas a reventar!”



var platosServidos = 0;
var plato = '';
var continuar = '';
var servicios = 0;

function menu() {

    while (servicios < 10) {
        plato = prompt("Escoge un plato de la carta");
        console.log("Has escogido: " + plato);
        platosServidos++;
        servicios++;

        if (servicios >= 3 && servicios < 10) {
            continuar = prompt("¿Deseas seguir pidiendo platos? S/N: ");

            if (continuar == 's') {
                plato = prompt("Escoge otro plato de la carta");
                console.log("Has escogido: " + plato);
                platosServidos++;
                servicios++;
                console.log("Platos servidos: " + platosServidos);
                console.log("Servicios: " + servicios);

            } else if (continuar == 'n') {
                servicios = 10;
                console.log("Has consumido " + platosServidos + " platos. El total de tu cuenta es: " + (platosServidos * 10) + "€, a razón de 10€ por cada plato.");

            } else {
                alert("Escoge una opción válida.");
            }
        }
    }
    console.log("Has consumido " + platosServidos + " platos. El total de tu cuenta es: " + (platosServidos * 10) + "€, a razón de 10€ por cada plato.");
}



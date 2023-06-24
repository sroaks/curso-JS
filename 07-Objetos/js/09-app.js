//para que un obejto no se peuda modifica, habilitar el modo estcito.

"use strict";

const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//al porner esto, a diferencia de freeze, no se puede ni agregar ni quita, pero si modificar lo ya existente
Object.seal( producto );

//esto OK
producto.disponible = false;
//esto casca: producto.imagen = "image.jpg";

//para saber si un objeto está congelado:
console.log(Object.isSealed(producto));

console.log(producto);
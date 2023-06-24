//para que un obejto no se peuda modifica, habilitar el modo estcito.

"use strict";

const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//al porner esto, no deja agregar ni modificar
Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = "image.jpg";

//para saber si un objeto está congelado:
console.log(Object.isFrozen(producto));

console.log(producto);




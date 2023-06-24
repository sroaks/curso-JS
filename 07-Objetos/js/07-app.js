const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Una variable dentro de un objeto aun siendo const se puede cambiar.

producto.disponible = false;
delete producto.precio;

console.log(producto);
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
//anteriormente: const nombre = producto.nombre;

//ahora, crea la varieable en un solo paso
// DESTRUCTURING
const { nombre } = producto;
const { precio } = producto;
//puedes hacerlo agrupado const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
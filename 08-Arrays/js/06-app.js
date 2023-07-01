const carrito = [];

//Definir un producto
const producto = {
    nombre : "Monitor",
    precio: 200
}
const producto1 = {
    nombre : "Televisión",
    precio: 750
}
const producto2 = {
    nombre : "Teléfono",
    precio: 260
}

let resultado;

resultado = [...carrito, producto, producto2];
resultado = [producto1,...resultado];

console.table(resultado);
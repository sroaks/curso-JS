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
const producto4 = {
    nombre : "Recortada",
    precio: 260
}

let resultado;

resultado = [...carrito, producto, producto2];
resultado = [producto1,...resultado, producto4];

console.table(resultado);

//eliminar último elemnto
resultado.pop();
console.table(resultado);

//eliminar inicio
resultado.shift();
console.table(resultado);

//eliminar en cualquier sitio
resultado.splice(1,1);
console.table(resultado);


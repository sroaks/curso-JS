const carrito = [];

//Definir un producto
const producto = {
    nombre : "Monitor",
    precio: 200
}
const producto1 = {
    nombre : "Tele",
    precio: 750
}
const producto2 = {
    nombre : "Telefono",
    precio: 260
}


carrito.push(producto, producto1);
carrito.unshift(producto2);

console.table(carrito);



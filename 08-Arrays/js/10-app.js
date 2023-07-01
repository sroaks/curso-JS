// DIFERENCIA ENTRE forEach() y .map

const carrito = [
    {nombre: "tostadora con wifi", precio: 500},
    {nombre: "Monitor 27 pulgadas", precio: 180},
    {nombre: "tarjta SD", precio: 53},
    {nombre: "pc components", precio: 789},
    {nombre: "cable usb", precio: 12},
    {nombre: "xiaomi 9", precio: 254},
]

// .map va a llenar una variable con un arreglo nuevo (PUEDE SER UTIL PARA POR EJEMPLO FILTRAR)

const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
});

console.log(nuevoArreglo);

const nuevoArreglo2 = carrito.forEach( function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});

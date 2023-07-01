const carrito = [
    {nombre: "tostadora con wifi", precio: 500},
    {nombre: "Monitor 27 pulgadas", precio: 180},
    {nombre: "tarjta SD", precio: 53},
    {nombre: "pc components", precio: 789},
    {nombre: "cable usb", precio: 12},
    {nombre: "xiaomi 9", precio: 254},
]
// TODO
for(let i=0; i<carrito.length; i++){
    console.log(carrito[i]);
}
// nombre
for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}
// precio
for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].precio);
}
// concatenando
for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);
}
// PUEDES HACER LO MISMO CON ARRAY METOD
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
});


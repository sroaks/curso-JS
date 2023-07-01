const carrito = [
    {nombre: "tostadora con wifi", precio: 500},
    {nombre: "Monitor 27 pulgadas", precio: 180},
    {nombre: "tarjta SD", precio: 53},
    {nombre: "pc components", precio: 789},
    {nombre: "cable usb", precio: 12},
    {nombre: "xiaomi 9", precio: 254},
]


const nuevoArreglo = carrito.map((producto) => {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
}
)
console.log("-")
const nuevoArreglo2 = carrito.forEach( (producto) => {
    console.log( `${producto.nombre} - precio: ${producto.precio}`);
}
);

console.log("-")

const aprendiendo2 = (tecno,tecno2) => `Aprendiendo ${tecno} ARROW FUNCTION y ${tecno2}`;
console.log(aprendiendo2("JS","python"));
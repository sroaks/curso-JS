//Object literal - se usa más
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Object constructor

function Producto(nombre, precio){
    this.nombre= nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 30 pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Tablet", 20);
console.log(producto3);



const nombre = "Monitor de 20 pulgadas";
const precio = 300;
const disponible = true;


const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//agregar nuevas propiedades al objeto

producto.imagen = "imagen.jpg"

//eliminar una propiedad

delete producto.disponible

console.log(producto);
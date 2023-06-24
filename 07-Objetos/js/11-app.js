
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        // poniendo el "this" hace que busque dentro del obejto, sin eso. se va fuera
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();
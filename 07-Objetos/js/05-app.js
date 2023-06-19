const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    info: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricante:{
            pais:'ESPAÑA',
        }
    }
}

console.log(producto);
console.log(producto.info.medidas.peso);
console.log(producto.info.fabricante.pais);
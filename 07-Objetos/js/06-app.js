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

const { nombre, info:{ fabricante} } = producto;

console.log(nombre);
console.log(fabricante);
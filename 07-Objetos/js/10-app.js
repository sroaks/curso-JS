const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas ={
    peso: "1kg",
    medida: "1 metro"
}

//console.log(producto);
//console.log(medidas);

//unifica dos objetos
const resultado = Object.assign(producto,medidas);

//console.log(resultado);

//toma una copia de producto y medidas y asignala en el obejto
const resultado2 = { ...producto, ...medidas};

console.log(resultado2);



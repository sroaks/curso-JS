const producto = {
    nombre: "Monitor X pulgfadas",
    precio: 300,
    disponible: true
}

const { nombre } = producto;

console.log(nombre);

const numeros = [10,20,30,40,50];

const [primero, , ...tercero] = numeros;

// resultado [30, 40, 50]
console.log(tercero);
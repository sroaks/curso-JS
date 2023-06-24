const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//nos saca las llaves del objeto: ['nombre', 'precio', 'disponible']
console.log(Object.keys(producto));
//nos saca los valores actuales del objeto
console.log(Object.values(producto));
//nos saca todo
console.log(Object.entries(producto));



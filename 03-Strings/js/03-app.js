const producto = "Monitor 20\"";
const precio = "30€";
// CONCATENAR 
const productoPrecio =producto + " cuesta " + precio;

console.log(productoPrecio);
// Fijate en las comillas raras esas son fundamentales para realizar esta concatenación (es parecido a python f' o .format(producto, precio) )
console.log(`El producto ${producto} tiene un precio de ${precio}`);



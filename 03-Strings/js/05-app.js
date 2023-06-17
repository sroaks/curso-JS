const producto = "Monitor 20\"";

// quitar algo o sustituir con replace

console.log(producto);
//reemplaza
console.log(producto.replace("Monitor","Pantalla"));
//quita
console.log(producto.replace("Monitor",""));

//cortar

console.log(producto.slice(0,10));
console.log(producto.slice(8));

//la diferencia entre slice y substring es que este segundo respeta el orden, si popnes uno mayor al incio te lo cambia por defecto.

console.log(producto.substring(2,8));

const usuario = "Gonzalo";
console.log(usuario.substring(0,1));
//corta primera letra
console.log(usuario.charAt(0));

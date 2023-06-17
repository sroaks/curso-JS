const producto = "Monitor 20\"";
// si no es entero el nº que le pasas, redondea
const texto = " en Promoción".repeat(3);

console.log(texto);

console.log(`El ${producto}, está ${texto}`)

//hace una lista

const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const x = "Nadar, corre, basket, futbol";
console.log(x.split(", "));

// para sacar un dato concreto
const prueba = "Estoy bla balbaba #loquesea"
console.log(prueba.split("#"));
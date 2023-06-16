//alert('Hola mundo');

const nombre = prompt('Cuál es tu nombre?')
//esto te permite seleccionar elementos del HTML, ene ste caso el .contenido, el inner sustituye el resto del código por lo que ponemos.
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JS Moderno`;
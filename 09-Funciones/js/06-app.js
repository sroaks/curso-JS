// PARAMETROS POR DEFECTO DEFAULT

// pongo en la funcion valores por defecto

function saludar(nombre = "Desconocido",apellido="''"){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Juna","Robles");
saludar();
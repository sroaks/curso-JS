// que las funciones se comuniquen

iniciarApp();

function iniciarApp(){
    console.log("Iniciando App...")
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde segunda funcion")
    usuarioAutenticado("Gonzalo")
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario... espere...")
    console.log(`${usuario} autenticado correctamente`)
}
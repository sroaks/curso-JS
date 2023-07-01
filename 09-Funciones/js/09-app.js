
// CREANDO METODOS DE PROPIEDAD - AÑADIENDO FUNCIONES EN UN OBJETO 
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion...con el id ${id}`);
    },
    pausar: function() {
        console.log("pausado...")
    },
    borrar: function(){
        console.log(`Borrando cancion`)
    },
    crearPlaylist: function(nombre){
        console.log(`Estoy creando la playlist ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy metal");
reproductor.reproduciendoPlaylist("Mamba negra");
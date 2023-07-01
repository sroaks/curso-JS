const reproductor = {
    cancion: " ",
    reproducir: id => console.log(`Reproduciendo cancion...con el id ${id}`),
    pausar: () => console.log("pausado..."),
    borrar: () => console.log(`Borrando cancion`),
    crearPlaylist: nombre => console.log(`Estoy creando la playlist ${nombre}`),
    reproduciendoPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = "Enter Sandam";
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist("Heavy metal");
reproductor.reproduciendoPlaylist("Mamba negra");
var mapa // Mapa que vamos a modificar

let posicionCentral = {
  lat: -34.6179165, //cord1
  lng: -58.4892222 //cord2
};

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.6179165,
      lng: -58.4892222
    },
    zoom: 12
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
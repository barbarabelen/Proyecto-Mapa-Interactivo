streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicionCentral,
        pov:{
          heading: 34,
          pitch: 10,
        }
      }
    )
    map.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    panorama.setPosition(ubicacion);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()

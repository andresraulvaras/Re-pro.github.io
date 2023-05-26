

var images = ["seleccion/scaloni.jpg","seleccion/molina.jpg","seleccion/li_martinez.jpg","seleccion/fernandez.jpg","seleccion/em_martinez.jpg","seleccion/dybala.jpg","seleccion/la_martinez.jpg","seleccion/macalister.jpg","seleccion/otamendi.jpg","seleccion/rodriguez.jpg","seleccion/gomez.jpg","seleccion/almada.jpg","seleccion/correa.jpg","seleccion/palacios.jpg","seleccion/rulli.jpg","seleccion/dimaria.jpg","seleccion/messi.jpg","seleccion/alvarez.jpg","seleccion/acuna.jpg","seleccion/depaul.jpg","seleccion/pezella.jpg","seleccion/paredes.jpg","seleccion/montiel.jpg","seleccion/tagliafico.jpg","seleccion/foyth.jpg","seleccion/armani.jpg"]; // Lista de imágenes
var currentImageIndex = 0; // Índice de la imagen actual

function changeImage() {
  var image = document.getElementById("image");
  currentImageIndex = (currentImageIndex + 1) % images.length; // Avanzar al siguiente índice, y volver al principio si llega al final
  image.src = images[currentImageIndex]; // Cambiar la imagen
}

// Cambiar la imagen cada 3 segundos (3000 milisegundos)
setInterval(changeImage, 3000);

function mostrarSeccion(seccion) {
  // Oculta el contenedor de bienvenida
  const bienvenida = document.getElementById('bienvenida');
  if (bienvenida) {
    bienvenida.style.display = 'none';
  }

  // Oculta todas las secciones de contenido
  const secciones = document.querySelectorAll('section.bloque');
  secciones.forEach(function(sec) {
    sec.style.display = 'none';
  });

  // Muestra la sección seleccionada
  const seccionMostrada = document.getElementById(seccion);
  if (seccionMostrada) {
    seccionMostrada.style.display = 'block';
  }

}

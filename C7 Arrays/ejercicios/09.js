function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var min =  Math.min(array.length);
   var max =  Math.max(array.length);
   return array[Math.floor(Math.random(max, min))];
}

module.exports = obtenerElementoAleatorio;

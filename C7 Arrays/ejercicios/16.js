function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiArray = [];
  for (var i = 0; i < array.length; i++){
    multiArray.push(array[i] * i);
  }
  return multiArray;
}

module.exports = multiplicarElementosPorIndice;

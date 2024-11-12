function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  // return array.reverse();
  var reves = [];
  for (var i = 0; i <= array.length -1; i++){
    reves.unshift (array[i]);
  }
  return reves;
}

module.exports = invertirArray;

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indice = 0;
  var grande = array[0];
  for(var i = 0; i < array.length; i++){
    if (array[i] > grande){
      grande = array[i];
      indice = i;
    }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;

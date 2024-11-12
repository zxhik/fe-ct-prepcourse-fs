function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var conteo = []; 
  for (var i = 0; i < numeros.length; i++) {
    if (conteo[numeros[i]]) {
      return numeros[i];
    }
    conteo[numeros[i]] = 1;
  }
}

module.exports = encontrarElementoRepetido;
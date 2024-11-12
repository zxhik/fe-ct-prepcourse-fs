function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var pares = 0;
  for (var i = 0; i < numeros[i]; i++){
    if (numeros[i] % 2 !== 0){
      continue;
    }
    pares ++;
  }
  return pares;
  }

module.exports = contarParesConContinue;

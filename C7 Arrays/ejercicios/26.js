function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var multi;
  for (var i = 0; i < secuencia[i]; i++){
    if (secuencia[i] % n === 0){
      multi = secuencia[i];
      break;
    }
  }
  return multi;
}

module.exports = encontrarPrimerMultiploDeN;
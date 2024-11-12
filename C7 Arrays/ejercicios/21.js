function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var a = 0;
  var nuevo = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === "Enero"){
      a++;
      nuevo.push(array[i]);
    }
    if (array[i] === "Marzo"){
      a++;
      nuevo.push(array[i]);
    }
    if (array[i] === "Noviembre"){
      a++;
      nuevo.push(array[i]);
    }
  }
  if (a === 3){
    return nuevo;
  } else {
    return "No se encontraron los meses pedidos"
  }
}

module.exports = mesesDelAño;

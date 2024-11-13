const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var lista = 0;
  for (var prop in objeto){
    lista ++;
  }
  return lista;
};

module.exports = contarPropiedades;

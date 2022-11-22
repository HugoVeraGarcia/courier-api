const Distancia = (LAT1, LAT2, LON1, LON2) => {
  const Constante = Math.PI / 180;
  const DifLat = LAT1 - LAT2;
  const DifLon = LON1 - LON2;
  const RadioTierra = 6378.1;
  let DistanciaGeografica =
    Math.pow(Math.sin((DifLat * Constante) / 2), 2) +
    Math.cos(LAT1 * Constante) *
      Math.cos(LAT2 * Constante) *
      Math.pow(Math.sin((DifLon * Constante) / 2), 2);

  DistanciaGeografica = Math.pow(DistanciaGeografica, 0.5);
  DistanciaGeografica = Math.asin(DistanciaGeografica) * 2;
  DistanciaGeografica = DistanciaGeografica * RadioTierra;
  return DistanciaGeografica.toFixed(2);
};

module.exports = { Distancia };

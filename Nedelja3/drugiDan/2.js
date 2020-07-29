function pica(poluprecnik, cena) {
  let povrsina = Math.pow(poluprecnik, 2) * Math.PI;
  let cenaPoCm = cena / povrsina;
  return cenaPoCm;
}
console.log(pica(44, 535));

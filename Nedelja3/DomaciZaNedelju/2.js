{
  function lifeSupply(numPerMonth, age) {
    let picaSupply = numPerMonth * ((100 - age) * 12);
    return picaSupply;
  }
}
lifeSupply(10, 26);
console.log(lifeSupply(10, 26));
// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

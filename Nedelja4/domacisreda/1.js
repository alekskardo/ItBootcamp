let pokemon = [
  {
    name: "Pikachu",
    species: "Electic",
    abilities: ["Electro ball", "Thunder wave", "Spark"],
    characteristics: { attack: 55, defense: 30, speed: 90 },
  },
  {
    name: "Pichu",
    species: "Electic",
    abilities: ["Electro ball", "Thunder wave", "Spark"],
    characteristics: { attack: 40, defense: 50, speed: 40 },
  },
  {
    name: "Raichu",
    species: "Electic",
    abilities: ["Thunder", " Max-abill ", "Spark"],
    characteristics: { attack: 65, defense: 70, speed: 95 },
  },
  {
    name: "Gyarados",
    species: "Water",
    abilities: ["Tail Whip", "Rain", "Hydro pump"],
    characteristics: { attack: 25, defense: 35, speed: 55 },
  },
];

console.log(pokemon);

function abiliti(pokemon) {
  let niz = [];
  pokemon.forEach((element) => {
    niz.push(element.abilities);
  });
  return niz.concat.apply(niz);
}
console.log(abiliti(pokemon));

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// [<...>,...]
// Сортирати покемоне по брзини, растуће.

pokemon.sort((a, b) => a.characteristics.speed - b.characteristics.speed);
console.log(pokemon);

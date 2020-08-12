let pokemon1 = {
  name: "Pikachu",
  species: "Electic",
  abilities: ["Electro ball", "Thunder wave", "Spark"],
  characteristics: { attack: 55, defense: 30, speed: 90 },
};
let pokemon2 = {
  name: "Pichu",
  species: "Electic",
  abilities: ["Electro ball", "Thunder wave", "Spark"],
  characteristics: { attack: 40, defense: 50, speed: 40 },
};
let pokemon3 = {
  name: "Raichu",
  species: "Electic",
  abilities: ["Thunder", " Max-abill ", "Spark"],
  characteristics: { attack: 65, defense: 70, speed: 95 },
};
let pokemon4 = {
  name: "Gyarados",
  species: "Water",
  abilities: ["Tail Whip", "Rain", "Hydro pump"],
  characteristics: { attack: 25, defense: 35, speed: 55 },
};

// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function strongest(pokemon) {
  let max = 0;
  let x;
  for (pokemon of pokemoni) {
    if (pokemon.characteristics.attack >= max)
      (max = pokemon.characteristics.attack), (x = pokemon);
  }
  return x;
}
console.log(strongest(pokemoni));

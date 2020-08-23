let pokemon1 = {
  name: "Pikachu",
  species: "Electic",
  abilities: ["Electro ball", "Thunder wave", "Spark"],
  characteristics: { attack: 55, defense: 30, speed: 90 },
  picture: "src/qq.png",
};
let pokemon2 = {
  name: "Pichu",
  species: "Electic",
  abilities: ["Electro ball", "Thunder wave", "Spark"],
  characteristics: { attack: 40, defense: 50, speed: 40 },
  picture: "src/rr.png",
};
let pokemon3 = {
  name: "Raichu",
  species: "Electic",
  abilities: ["Thunder", " Max-abill ", "Spark"],
  characteristics: { attack: 65, defense: 70, speed: 95 },
  picture: "src/ww.png",
};
let pokemon4 = {
  name: "Gyarados",
  species: "Water",
  abilities: ["Tail Whip", "Rain", "Hydro pump"],
  characteristics: { attack: 25, defense: 35, speed: 55 },
  picture: "src/ee.png",
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

let btn1 = document.querySelector("#prikaz");
let btn2 = document.querySelector("#pobednik");
let pokemonContainer = document.querySelector(".wrapper");

btn1.addEventListener("click", function () {
  document.getElementById("ispisati").innerHTML = "";
  pokemoni.forEach((p) => prikaz(p));
});

btn2.addEventListener("click", function () {
  document.getElementById("ispisati").innerHTML = "";
  prikaz(strongest(pokemoni));
});

const prikaz = (p) => {
  let ispisi = document.getElementById("ispisati");
  let container = document.createElement("div");
  ispisi.appendChild(container);
  let ime = document.createElement("div");
  ime.innerText = p.name;
  container.appendChild(ime);
  let vestine = document.createElement("div");
  vestine.innerText = p.abilities;
  container.appendChild(vestine);
  let karakteristike = document.createElement("div");
  karakteristike.innerText = p.characteristics;
  let slika = document.createElement("img");
  slika.src = p.picture;
  container.appendChild(slika);
};

// funkcija za odabir najjaceg
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

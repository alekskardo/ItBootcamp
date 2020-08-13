import {sposobnosti} from "./2.js"
import {func} from "./3.js"


let pokemon1 = {
    name: "Pikachu",
    species: "Electic",
    abilities: ["Electro ball", "Thunder wave", "Spark"],
    characteristics: { attack: 55, defense: 30, speed: 90 },
    picture: "qq.png",
  };
  let pokemon2 = {
    name: "Pichu",
    species: "Electic",
    abilities: ["Electro ball", "Thunder wave", "Spark"],
    characteristics: { attack: 40, defense: 50, speed: 40 },
    picture: "rr.png",
  };
  let pokemon3 = {
    name: "Raichu",
    species: "Electic",
    abilities: ["Thunder", " Max-abill ", "Spark"],
    characteristics: { attack: 65, defense: 70, speed: 95 },
    picture: "ww.png",
  };
  let pokemon4 = {
    name: "Gyarados",
    species: "Water",
    abilities: ["Tail Whip", "Rain", "Hydro pump"],
    characteristics: { attack: 25, defense: 35, speed: 55 },
    picture: "ee.png",
  };
  
  let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

const body = document.querySelector('body')
let divWrapper = document.querySelector('.wrapper')
const dugme = document.getElementById('pobednik')
const dugme1 = document.getElementById('prikaz')
const divPok = document.createElement('div') //prikaz svih
const divPok1 = document.createElement('div') //prikaz pobednika


dugme1.addEventListener('click',() => {
pokemoni.forEach(el =>{
    
    let par = document.createElement('p')
    par.textContent = el.name
    let images = document.createElement('img')
    images.src = el.picture
    divPok1.classList.add('hide')
    divPok1.textContent = ''
    divPok.classList.remove('hide')
    divPok.appendChild(par)
    divPok.appendChild(images)

})
})

dugme.addEventListener('click',() =>{
    pokemoni.sort((a,b) => b.characteristics.attack - a.characteristics.attack)
    const par1 = document.createElement('p')
    par1.textContent = pokemoni[0].name
    const images1 = document.createElement('img')
    images1.src = pokemoni[0].picture
    divPok.classList.add('hide')
    divPok.textContent = ''
    divPok1.classList.remove('hide')
    divPok1.appendChild(par1)
    divPok1.appendChild(images1)
})

    body.appendChild(divPok)
    body.appendChild(divPok1)



console.log(pokemoni)

pokemoni.sort((a,b) => a.characteristics.speed - b.characteristics.speed)
console.log(pokemoni)

pokemoni.sort((a,b) => b.characteristics.attack - a.characteristics.attack)
console.log(pokemoni[0])

console.log(sposobnosti(pokemoni))
console.log(func(pokemoni))
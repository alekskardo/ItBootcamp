// import {obrisiStavku,procenat, procenatSume} from "./modul1"
// console.log(obrisiStavku);
// console.log(procenat);
// console.log(procenatSume);

// izbacuje gresku sa modulima
let btn = document.querySelector("#btn");
let option = document.querySelector("#drop");
let desc = document.querySelector("#desc");
let amount = document.querySelector("#amount");
let sumaPrihod = document.querySelector("#prihod");
let sumaRashod = document.querySelector("#rashod");
let budzet = document.querySelector("#budzet");

let sumaPri = 0;
let sumaRas = 0;
counterP = 0;
counterR = 0;
let tasksPrihodi = [];
let tasksRashodi = [];

let boxPrihod = document.querySelector("#prihodi-info");
let boxRashod = document.querySelector("#rashodi-info");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (desc.value.trim() == "") {
    console.log("Transakcija mora imati opis");
    desc.style.border = "1px solid red";
    option.value = "-";
    desc.value = "";
    amount.value = 0;
  } else {
    if (amount.value > 0) {
      if (option.value == "prihodi") {
        let addBoxPrihod = document.createElement("div");
        addBoxPrihod.className = "addBPr";
        addBoxPrihod.innerHTML = `<h3>${desc.value}</h3><h4 class="text-right">Iznos: ${amount.value}</h4>`;
        boxPrihod.appendChild(addBoxPrihod);

        sumaPri += Number(amount.value);

        sumaPrihod.innerHTML = `${sumaPri}`;

        let btnDel = document.createElement("button");
        btnDel.innerHTML = "X";
        btnDel.className = "deleteBtn";
        addBoxPrihod.appendChild(btnDel);

        boxPrihod.appendChild(document.createElement("hr"));

        boxPrihod.addEventListener("mouseover", () => {
          btnDel.style.display = "inline";
        });
        boxPrihod.addEventListener("mouseout", () => {
          btnDel.style.display = "none";
        });

        console.log(boxPrihod);
        btnDel.addEventListener("click", obrisiStavku);
        counterP++;
        let objectPrihodi = {
          id: counterP,
          desc: desc.value,
          amount: Number(amount.value),
        };
        desc.style.border = "1px solid #ccc";
        amount.style.border = "1px solid #ccc";
        desc.value = "";
        amount.value = 0;
        option.value = "-";
        tasksPrihodi.push(objectPrihodi);
      } else if (option.value == "rashodi") {
        let addBoxRashod = document.createElement("div");
        addBoxRashod.className = "addBRa";
        let x = amount.value;
        addBoxRashod.innerHTML = `<h3>${
          desc.value
        }</h3>  <h4 class="text-right">Izbos: ${
          amount.value
        } <span class="label label-danger">${procenat(x, sumaPri)}</span></h4>`;

        boxRashod.appendChild(addBoxRashod);

        sumaRas += Number(amount.value);
        sumaRashod.innerHTML = `${sumaRas} <span class="label label-danger text-right">${procenatSume(
          sumaRas,
          sumaPri
        )}</span>`;
        let btnDel = document.createElement("button");
        btnDel.innerHTML = "X";
        btnDel.className = "deleteBtn";
        addBoxRashod.appendChild(btnDel);

        boxRashod.appendChild(document.createElement("hr"));

        boxRashod.addEventListener("mouseover", () => {
          btnDel.style.display = "inline-block";
        });
        boxRashod.addEventListener("mouseout", (e) => {
          btnDel.style.display = "none";
        });
        btnDel.addEventListener("click", obrisiStavku);

        counterR++;
        let objectRashodi = {
          id: counterR,
          desc: desc.value,
          amount: Number(amount.value),
        };

        tasksRashodi.push(objectRashodi);
      } else {
        console.log("Morate izabrati vrstu transkacije");
      }

      budzet.innerHTML = sumaPri - sumaRas;
      desc.style.border = "1px solid #ccc";
      amount.style.border = "1px solid #ccc";
      desc.value = "";
      amount.value = 0;
      option.value = "-";
    } else {
      console.log("Vrednost polja mora biti veca od nule");
      amount.style.border = "1px solid red";
      desc.value = "";
      amount.value = 0;
      option.value = "-";
    }
  }
  console.log(tasksPrihodi);
  console.log(tasksRashodi);
  function obrisiStavku(e) {
    e.target.parentElement.remove();
  }

  function procenatSume(sumaRas, sumaPri) {
    if (sumaPri > 0) {
      return Math.ceil((sumaRas / sumaPri) * 100) + "%";
    }
  }
  function procenat(x, sumaPri) {
    if (sumaPri > 0) {
      return Math.ceil((x / sumaPri) * 100) + "%";
    }
  }

});



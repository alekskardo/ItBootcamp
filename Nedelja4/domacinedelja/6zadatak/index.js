let dugme = document.querySelectorAll(".naruci");
let dugmeOdmah = document.querySelectorAll(".naruciOdmah");
let count = document.getElementById("count");

let d = new Date();
let datetime =
  d.getDate() +
  d.getMonth() +
  d.getFullYear() +
  d.getHours() +
  d.getMinutes() +
  d.getSeconds();
dugme.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    count.innerText++;
  });
});

dugmeOdmah.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (count.innerText == 0) {
      message.innerText = "Niste porucili nista";
    } else {
      message.innerText = `Narucili ste ${count.innerText} pica [${datetime}]`;
      count.innerText = 0;
    }
  });
});

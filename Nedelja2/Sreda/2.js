// p = cena proizvoda
// q = kolicina novca

let p = 300;
let q = 500;

if (q < p) {
  console.log(`Nemate dovoljno novca ${q}`);
} else {
  console.log(`Uspesno ste kupili proizvod ${q - p}`);
}

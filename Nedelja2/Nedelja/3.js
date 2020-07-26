// let n = 5;
// let taraba = "";

// for (i = 0; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     taraba += "#";
//   }
//   taraba += "\n";
// }
// console.log(taraba);

// drugi nacin

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = " ".repeat(n);

  let str2 = "#".repeat(i);

  console.log(str + str2 + str);
}

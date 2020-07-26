let n = 5;
let red = "";

for (let i = 0; i <= n; i++) {
  red +=
    " ".repeat(n - i) +
    "#".repeat(i) +
    " " +
    "#".repeat(i) +
    " ".repeat(n - i) +
    "\n";
}
console.log(red);

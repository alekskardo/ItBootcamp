// Написати функцију која исписује све елементе низа који су дељиви са 5
{
  function divisibleByFive(arr) {
    let divided = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 5 == 0) {
        divided.push(arr[i]);
      }
    }
    console.log(divided);
  }
  divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]);
}

// let arr = [1, 2, 3, 4, 5, 10, 15, 23, 1, 5];
// let myArray = arr.filter((number) => number % 5 === 0);
// console.log(myArray);

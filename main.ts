const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
for (const i of list) {
  console.log("i: " + i);
  if (i % 3 === 0 || i % 5 === 0) {
    console.log("i: mod 3/5: " + i);
    sum += i;
  }
}

console.log("sum of 1 - 9: " + sum);

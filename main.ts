interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
// let square2 = {} as Square;

square.color = "blue";
square.sideLength = 10;

console.log(square);

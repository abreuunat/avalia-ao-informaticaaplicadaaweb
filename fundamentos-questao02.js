let a = 9;
let b = 4;
let c = 3;

let s = (a + b + c) / 2;
let area = Math.sqrt(s *(s-a)*(s-b)*(s-c));
console.log('A area do triangulo é: {area.toFixed(2)}')
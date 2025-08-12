function compararNumeros(a, b) {
  let aImpar = a % 2 !== 0;
  let bImpar = b % 2 !== 0;

  if (aImpar && !bImpar) {
    return `${a} é maior (ímpar é sempre maior que par)`;
  } else if (bImpar && !aImpar) {
    return `${b} é maior (ímpar é sempre maior que par)`;
  } else {

    if (a > b) {
      return `${a} é maior`;
    } else if (b > a) {
      return `${b} é maior`;
    } else {
      return "Os dois são iguais";
    }
  }
}

let num1 = 5;
let num2 = 8;

console.log(compararNumeros(num1, num2));

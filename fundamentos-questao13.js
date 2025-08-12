function elevarAoCuboESomar(lista) {
  return lista.reduce((soma, num) => soma + Math.pow(num, 3), 0);
}

console.log(elevarAoCuboESomar([1, 2, 3])); 



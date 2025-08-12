
function maiorMenor(lista) {
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    return { maior, menor };
}

console.log(maiorMenor([10, 25, 3, 50, 7, 99, 65, 1, 42, 17]));
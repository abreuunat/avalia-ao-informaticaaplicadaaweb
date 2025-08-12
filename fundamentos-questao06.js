
function maisFrequente(arr) {
  const contagem = {};
  let maxNum = arr[0], maxCont = 1;

  for (let num of arr) {
    contagem[num] = (contagem[num] || 0) + 1;
    if (contagem[num] > maxCont) {
      maxNum = num;
      maxCont = contagem[num];
    }
  }

  return maxNum;
}

console.log(maisFrequente([1, 3, 2, 3, 4, 3, 5, 2, 1]));
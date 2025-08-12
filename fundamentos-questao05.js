function checarIntervalo(a, b, c) {
  const estaEntre = n => n >= 50 && n <= 99;
  if (estaEntre(a) && estaEntre(b) && estaEntre(c)) {
    console.log("Todos os números estão entre 50 e 99.");
  } else {
    console.log("Erro: algum número está fora do intervalo.");
  }
}

checarIntervalo(60, 55, 80);
checarIntervalo(40, 55, 80);

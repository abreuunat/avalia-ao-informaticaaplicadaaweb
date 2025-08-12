function contemPalavra(frase, palavra) {
  return frase.toLowerCase().includes(palavra.toLowerCase());
}

console.log(contemPalavra("A vida é bela", "vida"));
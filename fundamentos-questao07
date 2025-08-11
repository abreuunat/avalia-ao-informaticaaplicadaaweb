
function modificarFrase(frase) {
  return frase.split(" ").map(palavra => {
    if (palavra.length < 5) {
      return palavra.toUpperCase();
    } else if (palavra.length > 5) {
      return palavra.toLowerCase();
    } else {
      return palavra;
    }
  }).join(" ");
}

console.log(modificarFrase("O céu está tão lindo azul"));

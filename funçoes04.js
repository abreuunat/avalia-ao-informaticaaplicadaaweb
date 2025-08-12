function palavraNaFrase(frase, palavra) {
    return frase.includes(palavra);
}

console.log(palavraNaFrase("Eu gosto de programar em JavaScript", "JavaScript")); // true
console.log(palavraNaFrase("Eu gosto de programar em JavaScript", "Python")); // false


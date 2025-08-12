
function contarVogaisConsoantes(frase) {
    let vogais = "aeiouAEIOU";
    let numVogais = 0;
    let numConsoantes = 0;

    for (let letra of frase) {
        if (/[a-zA-Z]/.test(letra)) {
            if (vogais.includes(letra)) {
                numVogais++;
            } else {
                numConsoantes++;
            }
        }
    }

    return { vogais: numVogais, consoantes: numConsoantes };
}

console.log(contarVogaisConsoantes("O céu está lindo!"));
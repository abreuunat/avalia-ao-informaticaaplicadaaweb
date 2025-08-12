let agora = new Date();
let diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"]
let diaSemana = diasSemana[agora.getDay()];
let horas = agora.getHours().toString().padStart(2, "0");
let minutos = agora.getMinutes().toString().padStart(2, "0");
let segundos = agora.getSeconds().toString().padStart(2, "0");

console.log('hoje é: {diaSemana}.');
console.log('A hora atual é: {hora}: {minuto}: {segundos}')
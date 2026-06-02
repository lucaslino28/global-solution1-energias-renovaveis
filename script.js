console.log("Space Energy Monitor iniciado");

// Dados simulados da missão
let geracaoSolar = 12;
let consumoTotal = 20;
let bateria = 30;
let modoMissao = "Modo Atenção";

// Exibindo os dados na tela
document.getElementById("geracaoSolar").textContent = geracaoSolar + " KW";
document.getElementById("consumoTotal").textContent = consumoTotal + " KW";
document.getElementById("bateria").textContent = bateria + " %";
document.getElementById("modoMissao").textContent = modoMissao;

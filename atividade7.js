var saldoTotal = 500;
var saque = 250 + 4.5;
var saldoFinal = saldoTotal - saque;

if (saque < saldoTotal) {
    console.log(`Saldo restante é de R$${saldoFinal}`);
}
else {
    console.log(`Saldo insuficiente.`);
}
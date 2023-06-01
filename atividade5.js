var peso = 90;
var altura = 1.50;
var IMC = peso /(altura * altura);

if(IMC < 18.5){
    console.log(`Você está abaixo da faixa de peso ideal.`);
}
else if(IMC > 24.99) {
    console.log(`Você está acima da faixa de peso ideal`);
}

else if (IMC => 18.5 <= 24.99) {
    console.log(`Você está dentro da faixa de peso ideal.`);
}
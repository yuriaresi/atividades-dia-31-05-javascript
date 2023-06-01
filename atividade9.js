var velocidade = 120;
var velocidadeExcedida = velocidade - 80;
var multa = velocidadeExcedida * 5;
var valorDaMulta = 195 + multa;

if(velocidade <= 80){
    console.log(`Velocidade dentro do limite.`)
}
else{
    console.log(`Velocidade acima do limite, multa aplicada no valor de R$${valorDaMulta}.`);
}
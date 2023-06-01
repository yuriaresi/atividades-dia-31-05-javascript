var numeroDia = 4;
var diaSemana;

switch (numeroDia) {
    case 1:
        diaSemana = "Domingo";
        break;

    case 2:
        diaSemana = "segunda";
        break;

    case 3:
        diaSemana = "Terça-feira";
        break;

    case 4:
        diaSemana = "Quarta-feira";
        break;

    case 5:
        diaSemana = "Quinta-Feira";
        break;

    case 6:
        diaSemana = "Sexta-feira"
        break;

    case 7:
        diaSemana = "Sabado";
        break;

    default:
        diaSemana = "Número invalido";
        break;
}

console.log(`O dia da semana é ${diaSemana}`);
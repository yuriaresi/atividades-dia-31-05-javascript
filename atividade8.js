var idade = 24;
var peso = 67;

if (idade <= 12) {
  console.log("Categoria: Infantil");
} else if (idade >= 13 && idade <= 16) {
  if (peso <= 40) {
    console.log("Categoria: Juvenil leve");
  } else {
    console.log("Categoria: Juvenil pesado");
  }
} else if (idade >= 17 && idade <= 24) {
  if (peso <= 45) {
    console.log("Categoria: Sênior leve");
  } else if (peso > 45 && peso <= 60) {
    console.log("Categoria: Sênior médio");
  } else {
    console.log("Categoria: Sênior pesado");
  }
} else {
  console.log("Categoria: Veterano");
}

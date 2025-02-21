const hora = 10;

if (hora < 12){
  console.log(true);
} else {
  console.log(false);
}

const velocidade = 100;

if (velocidade < 20){
  console.log("Esta muito abaixo")
} else if (velocidade > 100){
  console.log("Multado")
} else{
  console.log("Dentro do limite")
}

// switch

// if: geralmente intervalo de valores
// switch: geralmente valores especificos

let DiadaSemana = 3;

switch(DiadaSemana){
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia da semana inválido");
}


//AND &&
//OR ||
//NOT !

// Tabela Verdade

let idadeUsuario = 18;
let carteira = false;

if (idadeUsuario >= 18 && carteira == true){
  console.log("Pode dirigir");
} else{
  console.log('nao pode');
}

if (idadeUsuario >= 18 || carteira == true){
  console.log("Pode dirigir");
} else{
  console.log('nao pode');
}


// !true -> false
const chovendo = false

if (!chovendo){
  console.log("Nao esta chovendo");
}


//condicional ternaria

const idade = 18;
const MaiorIdade = idade >= 18 ? "é maior" : "n é maior";
console.log(MaiorIdade);
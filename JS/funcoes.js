// function NOME(ARGUMENTOS) { EXC.}

function digaOi(){
  console.log("Oi");
}

digaOi();

function soma(a, b){
  console.log(a + b);
}

soma(2, 4);

function multiplicacao(a, b){
  const mult = a * b;

  return mult
}

const resultado = multiplicacao(2, 4);
console.log(resultado);

const somaDois = resultado + 10;
console.log(somaDois);


// funcao anonima
const saudacao = function(nome){
  console.log("Ola " + nome);
};

saudacao("Ian");

//funcao anonima 2;callback
function operacao(a, b, callback){
  return callback(a, b)
}

let resultadoOperacao = operacao(2, 4, soma);

console.log(resultadoOperacao);


// Arrow function
const dividir = (a, b) => {
  return a / b;
}

console.log(dividir(10,5));

const multiplicacaoArrow = (a,b) => a * b;
console.log(multiplicacaoArrow(2, 4));

const msg = () => console.log("Testando...");
msg();



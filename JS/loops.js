//loops
//for
for (let i = 0; i <= 4; i++){
  console.log("Loop for - o i é: " + i);
}

//arrays
const frutas = ["banana", "maçã", "uva"];
console.log(frutas);
console.log(frutas[0]);

for (let i = 0; i < 3; i++) {
  console.log("Frutas: " + frutas[i]);
}

//melhor sempre
for (let i = 0; i < frutas.length; i++) {
  console.log("Frutas: " + frutas[i]);
}


//while 
let p = 0;

while(p < 5){
  console.log("Loop while" + p);

  p++;
}

let aleatorio = 0;

while (aleatorio != 10){
  aleatorio = Math.floor(Math.random() * 10) + 1;
  
  console.log("Número aleatório: " + aleatorio);
}


// do while

do {
  console.log("teste do while");
} while (1 > 2);

var j = 0;

do {
  console.log("J: " + j);

  j++;
} while (j < 10);

let soma = 0;
let somaImpar = 0;

for (let i = 0; i<= 20; i++){
  if(i % 2 === 0){
    soma += i;
  }else{
    somaImpar += i;
  }
}

console.log(soma);
console.log(somaImpar);



let palavra = "Javascript"
let consoantes = 0;

console.log(palavra[0]);
console.log(palavra.length);

console.log(palavra[0].toLowerCase() == "j");

for (let  i = 0; i < palavra.length; i++){
  let letra = palavra[i].toLowerCase();

  if (
    letra !== "a" &&
    letra !== "e" &&
    letra !== "i" &&
    letra !== "o" &&
    letra !== "u" 
  ) {
    consoantes++;
  }
}

console.log(`Contagem de consoantes: ${consoantes}`);



const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dataElement = document.getElementById("data"); // Novo elemento para a data

const relogio = setInterval(function time(){
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;

  // Atualizar a data
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  dataElement.textContent = dateToday.toLocaleDateString(undefined, options);
});
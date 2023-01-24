// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCrianca = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCrianca.value;
  let duracao = inputDuracao.value;

  if (!adultos || !criancas || !duracao) {
    alert('Preencha todos os campos!');
  } else {
    let qtdTotalCarne =
      carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

    let qtdTotalCerveja = cervejaPP(duracao) * adultos;

    let qtdTotalBebidas =
      bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    resultado.innerHTML = `<div class="result"><img src="img/carne.png" alt="carne"/><p>${
      qtdTotalCarne / 1000
    } kg de Carne</p></div>`;

    resultado.innerHTML += `<div class="result"><img src="img/cerveja.png" alt="cerveja"/><p>${Math.ceil(
      qtdTotalCerveja / 355
    )} Latas de Cerveja</p></div>`;

    resultado.innerHTML += `<div class="result"><img src="img/refrigerante.png" alt="refrigerante"/><p>${Math.ceil(
      qtdTotalBebidas / 2000
    )} Pet's 2L de Bebidas</p></div>`;
  }

  function carnePP(duracao) {
    if (duracao >= 6) {
      return 650;
    } else {
      return 400;
    }
  }

  function cervejaPP(duracao) {
    if (duracao >= 6) {
      return 2000;
    } else {
      return 1200;
    }
  }

  function bebidasPP(duracao) {
    if (duracao >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }
}

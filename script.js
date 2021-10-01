//chave: valor
var Jorge = { Nome: "Jorge", Vitorias: 5, Empates: 1, Derrotas: 1, Pontos: 0 };
var Shiva = { Nome: "Shiva", Vitorias: 6, Empates: 1, Derrotas: 2, Pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.Vitorias * 3 + jogador.Empates;

  return pontos;
}

//Recebe o valor do Return
Jorge.Pontos = calculaPontos(Jorge);
Shiva.Pontos = calculaPontos(Shiva);
//console.log(calculaPontos(Jorge));

var jogadores = [Jorge, Shiva];
function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr> <td>" + jogadores[i].Nome + "</td>";
    elemento += "<td>" + jogadores[i].Vitorias + "</td>";
    elemento += "<td>" + jogadores[i].Empates + "</td>";
    elemento += "<td>" + jogadores[i].Derrotas + "</td>";
    elemento += "<td>" + jogadores[i].Pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  //pegar o campo no HTML e depois exibir os valores lá.
  var tabelaJogadoresJS = document.getElementById("tabelaJogadores");
  tabelaJogadoresJS.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.Vitorias++;
  jogador.Pontos = calculaPontos(jogador);

  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.Empates++;
  jogador.Pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.Derrotas++;
  exibeJogadoresNaTela(jogadores);
}

//para verificar quem tem mais vitorias  e inserir um trofeu ao lado do nome
function getMaxOfArray(jogadores) {
  var max = 0;
  var nomeVenc = "";
  for (var i = 0; i < jogadores.length; i++) {
    console.log("Aqui: " + jogadores[i].Vitorias);
    max = Math.max(jogadores[i].Vitorias);
    nomeVenc = jogadores[i].Nome;
  }

  nomeVenc =
    nomeVenc +
    " " +
    "<img src='https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_cup-128.png'>";

  console.log("valormax: " + max);
  console.log("nomevenc  " + nomeVenc);
}

getMaxOfArray(jogadores);
exibeJogadoresNaTela(jogadores);
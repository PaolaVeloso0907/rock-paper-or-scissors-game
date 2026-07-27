// TAREFAS A SEREM FEITAS:
// cada partida deve ter 3 rodadas (igual truco) [x]
// Ao clicar no botão da resposta, deve exibir a sua resposta e do adversário na tela [x]
// Utilize recursão para reiniciar o jogo [x]
// -------------------------------------------------------------------------------------------------------------------------------
let rodadaAtual = 1;
let vitoriasUser = 0;
let vitoriasMini = 0;

let contadorRodada = document.getElementById("contador-rodada");
let resultadoRodada = document.getElementById("resultado-rodada-atual");
let jogadaUser = document.getElementById("jogada-user");
let jogadaMini = document.getElementById("jogada-mini");

const imgs = [
  "",
  `<img src="./img/pedra.png" alt="Pedra" style="width: 50px; height: 50px">`,
  `<img src="./img/papel.png" alt="Papel" style="width: 50px; height: 50px">`,
  `<img src="./img/tesoura.png" alt="Tesoura" style="width: 50px; height: 50px">`,
];

function iniciar() {
  document.getElementById("content-inicial").style.display = "none";
  document.getElementById("content-game").style.display = "flex";
}

function selecionar(escolhaUser) {
  const escolhaMini = Math.floor(Math.random() * 3 + 1);

  jogadaUser.innerHTML = imgs[escolhaUser];
  jogadaMini.innerHTML = imgs[escolhaMini];

  let spanHistorico = document.getElementById(`historico-r${rodadaAtual}`);

  if (escolhaUser == escolhaMini) {
    resultadoRodada.innerHTML = `Ocorreu um empate!`;
    spanHistorico.innerHTML = `Empate`; 
  } else if (
    (escolhaUser == 1 && escolhaMini == 3) ||
    (escolhaUser == 2 && escolhaMini == 1) ||
    (escolhaUser == 3 && escolhaMini == 2)
  ) {
    vitoriasUser++;
    resultadoRodada.innerHTML = `Você venceu essa rodada!`;
    spanHistorico.innerHTML = `User`; 
  } else {
    vitoriasMini++;
    resultadoRodada.innerHTML = `Mini venceu essa rodada!`;
    spanHistorico.innerHTML = `Mini`; 
  }

  if (rodadaAtual === 3) {
      document.getElementById("btn-proximo").style.display = "none";
      document.getElementById("btn-finalizar").style.display = "inline-block";
  }

  document.getElementById("content-game").style.display = "none";
  document.getElementById("content-resumo").style.display = "flex";
}

function avancarJogo() {
  document.getElementById("content-resumo").style.display = "none";

  if (rodadaAtual < 3) {
    rodadaAtual++;
    contadorRodada.innerHTML = `${rodadaAtual}`;
    document.getElementById("content-game").style.display = "flex";
  } else if (rodadaAtual === 3) {
    document.getElementById("content-game").style.display = "flex";
  }
}

function finalizarPartida() {
  document.getElementById("content-resumo").style.display = "none";
  document.getElementById("content-placar").style.display = "flex";

  let mensagemResult = document.getElementById("mensagemResult");

  if (vitoriasMini > vitoriasUser) {
    mensagemResult.innerHTML = `Derrota! Mini venceu a partida.`;
  } else if (vitoriasMini < vitoriasUser) {
    mensagemResult.innerHTML = `Parabéns! Você venceu a partida.`;
  } else if(vitoriasMini == vitoriasUser) {
    mensagemResult.innerHTML = `Ninguém venceu. Ocorreu um empate!`;
  }
}

function recomecar() {
  rodadaAtual = 1;
  vitoriasMini = 0;
  vitoriasUser = 0;
  contadorRodada.innerHTML = "1";
  resultadoRodada.innerHTML = "";
  jogadaMini.innerHTML = "";
  jogadaUser.innerHTML = "";

  document.getElementById("historico-r1").innerHTML = "-";
  document.getElementById("historico-r2").innerHTML = "-";
  document.getElementById("historico-r3").innerHTML = "-";

  document.getElementById("btn-proximo").style.display = "block";
  document.getElementById("btn-finalizar").style.display = "none";

  document.getElementById("content-placar").style.display = "none";

  iniciar();
}

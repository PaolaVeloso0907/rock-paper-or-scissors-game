// TAREFAS A SEREM FEITAS:
// Utilize recursão para reiniciar o jogo
// Ao clicar no botão da resposta, deve exibir a sua resposta e do adversário na tela
// cada partida deve ter 3 rodadas (igual truco)
// -------------------------------------------------------------------------------------------------------------------------------

function iniciar() {
    document.getElementById('content-inicial').style.display = 'none';
    document.getElementById('content-game').style.display = 'flex';
}

function selecionar() {
    document.getElementById('content-game').style.display = 'none';
    document.getElementById('content-resumo-rodada').style.display = 'flex';
}

function avancarJogo() {
    document.getElementById('content-resumo-rodada').style.display = 'none';
    document.getElementById('content-game').style.display = 'flex';
}

function recomecar() {
    
}
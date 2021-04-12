//Criando um objeto para os times
var Flamengo = {
    nome: "Flamengo",//Propriedades ou coleção de outras variáveis
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var Palmeiras = {
    nome: "Palmeiras",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var Internacional = {
    nome: "Internacional",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var SãoPaulo = {
    nome: "São Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var AtléticoMG = {
    nome: "Atlético MG",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var BocaJuniors = {
    nome: "Boca Juniors",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}


//Chama um trecho de código dos objetos, sendo a sua propriedade ou variável pontos. Atribuí o valor do retorno do cálculo da função calcularPontos para a propriedade pontos de todos os objetos, que depois são chamados de jogador na função calcularPontos
Flamengo.pontos = calcularPontos(Flamengo)
Palmeiras.pontos = calcularPontos(Palmeiras)
Internacional.pontos = calcularPontos(Internacional)
SãoPaulo.pontos = calcularPontos(SãoPaulo)
AtléticoMG.pontos = calcularPontos(AtléticoMG)
BocaJuniors.pontos = calcularPontos(BocaJuniors)

//Todos os objetos com suas propriedades pontos é passado pra função como jogador para que haja o cálculo dos pontos de todos os objectos (times), não só para um
function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates)
    return pontos//Retorna os pontos a partir do cálculo acima para a propriedade pontos de todos os objetos
}

var listaTimes = [Flamengo, Palmeiras, Internacional, SãoPaulo, AtléticoMG, BocaJuniors]//Array de lista de times

//Chamamos a função exibirJogadoresNaTela, para exibir a lista de times da array na função, que no caso são todos os objetos criados
exibirJogadoresNaTela(listaTimes)

//Exibimos a lista dos times, todos os objetos passando com parâmetro da array listaJogadores 
function exibirJogadoresNaTela(listaTimes) {
    var html = ""
    for (var i = 0; i < listaTimes.length; i++) {//Enquanto i for menor que a quantidade de elementos ou índices da array, os times são listados na tela
        html += "<tr><td>" + listaTimes[i].nome + "</td>"//Exibe a 1ª coluna, que é a do nome de cada jogador da array jogadores
        html += "<td>" + listaTimes[i].vitorias + "</td>"//Exibe a 2ª coluna, que é a das vitórias
        html += "<td>" + listaTimes[i].empates + "</td>"//Exibe a 3ª coluna, que é a dos empates
        html += "<td>" + listaTimes[i].derrotas + "</td>"//Exibe a 4ª coluna, que é a das derrotas
        html += "<td>" + listaTimes[i].pontos + "</td>"//Exibe a 5ª coluna, que é a dos pontos
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaTimes')//Pega o id da tabela de times do HTML
    tabelaJogadores.innerHTML = html//Insere as linhas de cada jogador a tabela
}

//Entre parênteses está os índices da array da lista dos times
function adicionarVitoria(i) {
    var jogador = listaTimes[i]//Identifica os índices dos times da array
    jogador.vitorias++//Ao clicar no botão de vitórias, sempre será adicionada uma vitória ao time, mas precisa recalcular os pontos
    jogador.pontos = calcularPontos(jogador)//Recalculando o número de vitórias adicionadas pelos times
    exibirJogadoresNaTela(listaTimes)//Exibe a lista de times da array
}

matheus.empates = adicionarEmpate(matheus)
pedro.empates = adicionarEmpate(pedro)

function adicionarEmpate(i) {
    var jogador = listaTimes[i]
    jogador.empates++//Somando o nº de empates a cada clique feito no botão empates
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(listaTimes)
}

function adicionarDerrota(i) {
    var jogador = listaTimes[i]
    jogador.derrotas++//Ao clicar no botão de derrota é somado uma por uma. Ao ter derrotas não perde pontos
    exibirJogadoresNaTela(listaTimes)
}
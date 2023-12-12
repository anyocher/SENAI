//Exercício 1

function calcularTempo() {
    let vel = Number(document.querySelector("#velex1").value);
    let dis = Number(document.querySelector("#disex1").value);
  
    let tempo = dis / vel;
  
    document.querySelector("#result1").innerHTML = `Tempo Necessário: ${tempo.toFixed(1)} hora(s)`;
  }
  
  //Exercício 2
  function calcularSalario(){
    let nome = document.querySelector("#nome").value;
    let salario = Number(document.querySelector("#salario").value);
    let aumento = Number(document.querySelector("#aumento").value);
  
    aumento = salario * (aumento / 100);
    salario = salario + aumento;
  
    document.querySelector("#text2").innerHTML = `Funcionário(a): ${nome}`;
    document.querySelector("#result2").innerHTML = `Aumento: R$${aumento.toFixed(2)} | Salário Final: R$${salario.toFixed(2)}`;
  }
  
  //Exercício 3
  function calcularPontos(){
    let nomeTime = document.querySelector("#time").value;
    let numVitorias = Number(document.querySelector("#vit").value);
    let numEmpates = Number(document.querySelector("#emp").value);
  
    let pontos = (numVitorias * 3) + numEmpates;
  
    document.querySelector("#text3").innerHTML = `Time: ${nomeTime}`;
    document.querySelector("#result3").innerHTML = `Vitórias: ${numVitorias} | Empates: ${numEmpates} | Total de Pontos: ${pontos}`;
  }
  
  //Exercício 4
  function calcularOperacao(){
    let number = Number(document.querySelector("#num").value);
  
    document.querySelector("#result4").innerHTML = `${number} - 1 = ${number - 1}`;
    document.querySelector("#result4-1").innerHTML = `${number} + 1 = ${number + 1}`;
  }
  
  //Exercício 5
  function calcularTempoAviao(){
    let vel = 900;
    let dis = Number(document.querySelector("#disex5").value);
  
    let tempo = dis / vel;
  
    document.querySelector("#result5").innerHTML = `Tempo Necessário: ${tempo.toFixed(1)} hora(s)`;
  }
  
  //Exercício 6
  function calcularViagens(){
    let qtdCaminhoes = Number(document.querySelector("#qtdCamin").value);
    let qtdAlqueires = Number(document.querySelector("#qtdAlq").value);
  
    let viagens = (qtdAlqueires * 250) / (qtdCaminhoes * 18);
    
    document.querySelector("#result6").innerHTML = `Viagens Necessárias: ${viagens.toFixed(1)}`;
  }
  
  //Exercício 7
  function calcularRV(){
    let raio = Number(document.querySelector("#raio").value);
    let altura = Number(document.querySelector("#altura").value);
    let pi = 3.14
  
    let areaB = (raio ** 2) * pi;
    let areaL = 2 * pi * raio * altura;
    let areaTotal = 2 * ((raio ** 2) * pi) + 2 * (pi * raio * altura);
    let volume = pi * (raio ** 2) * altura;
  
    document.querySelector("#result7AreaB").innerHTML = `Área da Base: ${areaB.toFixed(2)}cm²`;
    document.querySelector("#result7AreaL").innerHTML = `Área Lateral: ${areaL.toFixed(2)}cm²`;
    document.querySelector("#result7AreaT").innerHTML = `Área Total: ${areaTotal.toFixed(2)}cm²`;
    document.querySelector("#result7Volume").innerHTML = `Volume: ${volume.toFixed(2)}cm³`;
  }
  
  //Exercício 8
  function calcularPreco(){
    let nomeMerc = document.querySelector("#merc").value;
    let preco = Number(document.querySelector("#preco").value);
  
    let novoPreco = preco * (5 / 100 + 1);
  
    document.querySelector("#nomeMerc").innerHTML = `Mercadoria: ${nomeMerc}`;
    document.querySelector("#precoAntigo").innerHTML = `Preço Antigo: R$${preco.toFixed(2)}`;
    document.querySelector("#novoPreco").innerHTML = `Novo Preço: R$${novoPreco.toFixed(2)}`;
  }
  
  //Exercício 9
  function porcentagemEleicao(){
    let cidade = document.querySelector("#cidade").value;
    let eleitores = Number(document.querySelector("#eleitores").value);
    let votosApurados = Number(document.querySelector("#votos").value);
  
    let porcentagem = votosApurados / eleitores * 100;
  
    document.querySelector("#nomeCidade").innerHTML = `Cidade: ${cidade}`;
    document.querySelector("#porcentagem").innerHTML = `${porcentagem.toFixed(1)}% de Participação na última Eleição`;
  }
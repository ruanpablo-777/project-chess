//1 = peao      //10 = peao
//2 = torre     //11 = torre
//3 = bispo
//4 = cavalo
//5 = rainha
//6 = rei
let peao = document.querySelectorAll(".peao");
let box = document.querySelectorAll(".box");
let positionTabuleiro;
let clicks = [];
let pecasId = [];
let allowTwoPass = true
let tabuleiro = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
 
box.forEach((element, index) => {
  element.addEventListener("click", () => {

    let hasPeao = !pecasId[0];
    let positionNow = clicks[0];
    let positionChoosed = parseFloat(positionNow - 2.0).toFixed(1);
    let verifyPositionChoosed = positionChoosed == parseFloat(clicks[clicks.length - 1]).toFixed (1); // verify your last click last box choosed :)

    console.log(clicks);
    console.log(hasPeao)
    clicks.push(element.id);
    console.log(verifyPositionChoosed)

    if (allowTwoPass && verifyPositionChoosed) {
      movePeaoTwoPass(positionChoosed, verifyPositionChoosed);
    } else {
      let positionChoosed = parseFloat(positionNow - 1.0).toFixed(1);
      let verifyPositionChoosed = positionChoosed == parseFloat(clicks[clicks.length - 1]).toFixed(1);
      movePeaoOnePass(positionChoosed, verifyPositionChoosed)
      
    }
  });
});

peao.forEach((element, index) => {
  element.addEventListener("click", () => {
    pecasId[0] = (element.id);
    clicks = []
  
    // atributosPeao.push({ id: index, nome: "peao", firstJogada: true });
    //console.log(element.id)
  });
});

function movePeaoTwoPass(positionChoosed, verifyPositionChoosed) {
  if (verifyPositionChoosed) {
    let getPeao = document.getElementById(`${pecasId[0]}`);
    let boxPosition = document.getElementById(`${positionChoosed}`);
    boxPosition.appendChild(getPeao);
    clicks = [];
    pecasId = [];
    allowTwoPass = false  
  }
}

function movePeaoOnePass(positionChoosed, verifyPositionChoosed) {
    if (verifyPositionChoosed) {
    let getPeao = document.getElementById(`${pecasId[0]}`);
    let boxPosition = document.getElementById(`${positionChoosed}`);
    boxPosition.appendChild(getPeao);
    clicks = [];
    pecasId = [];
        allowTwoPass = false  

  }
}

//change the box to tabuleiro.js and usar o atributo para o peao
    // atributosPeao.push({ id: index, nome: "peao", firstJogada: true });
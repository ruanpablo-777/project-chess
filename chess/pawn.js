//1 = peao      //10 = peao
//2 = torre     //11 = torre
//3 = bispo
//4 = cavalo
//5 = rainha
//6 = rei



let pawn = document.querySelectorAll(".peao");
let box = document.querySelectorAll(".box");
let positionTabuleiro;
let pawnArray = [];
let selectedPawn = [];
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
    let idBox = parseFloat(element.id);
    if (selectedPawn) {
      let idPeao = selectedPawn[0].id;
      for (let i = 0; i < selectedPawn[0].allowedPlays.length; i++) {
        let positionPeao = parseFloat(selectedPawn[0].allowedPlays[i]);
        if (positionPeao === idBox) {
          idBox = parseFloat(element.id).toFixed(1);
          movePawn(idPeao, idBox);
        }
      }
    }
  });
  
 

});

pawn.forEach((element, index) => {
  let id = "peao" + index;
  let oneStep = parseFloat("6." + index - 1.0).toFixed(1);
  let twooStep = parseFloat("6." + index - 2.0).toFixed(1);
  let position = parseFloat("6." + index).toFixed(1);

  pawnArray.push({
    id: id,
    currentPosition: position,
    allowedPlays: [oneStep, twooStep],
  });

  element.addEventListener("click", () => {
    selectedPawn = [];
    selectedPawn.push(pawnArray[index]);
    console.log(selectedPawn);
  });
});

function movePawn(idPeao, idBox) {
  if (idBox) {
    let getPeao = document.getElementById(`${idPeao}`);
    let positionBoxSelected = document.getElementById(`${idBox}`);
    console.log(idBox);
    positionBoxSelected.appendChild(getPeao);
    selectedPawn = [];
  }
  
  for (let i = 0; i < pawnArray.length; i++) {
    if (pawnArray[i].id === idPeao) {
      pawnArray[i].allowedPlays[0] = parseFloat(idBox - 1.0).toFixed(1);
    }
    if (pawnArray[i].allowedPlays[1] && pawnArray[i].id === idPeao) {
      pawnArray[i].allowedPlays.pop();
    }
  }
}

let pawnWhite = document.querySelectorAll(".peao-white");
let pawnArrayWhite = [];
let selectedPawnWhite = [];

pawnWhite.forEach((element, index) => {
  let id = element.id;
  let oneStep = parseFloat("1." + index) + 1.0;
  let twooStep = parseFloat("1." + index) + 2.0;
  let position = parseFloat("1." + index).toFixed(1);

  pawnArrayWhite.push({
    id: id,
    currentPosition: position,
    allowedPlays: [oneStep, twooStep],
  });

  element.addEventListener("click", () => {
       // selectedPawn = [];

    selectedPawnWhite = [];
    selectedPawnWhite.push(pawnArrayWhite[index]);
    
  });
});


function verificationPawnwhite(element) {
 let idBox = parseFloat(element.id);
    if (selectedPawnWhite) {
      let idPeao = selectedPawnWhite[0].id;
      for (let i = 0; i < selectedPawnWhite[0].allowedPlays.length; i++) {
        let positionPeao = parseFloat(selectedPawnWhite[0].allowedPlays[i]);
        if (positionPeao === idBox) {
          idBox = parseFloat(element.id).toFixed(1);
          movePawnWhite(idPeao, idBox);
        }
      }
    }
}

function movePawnWhite(idPeao, idBox) {
  if (idBox) {
    let getPeao = document.getElementById(`${idPeao}`);
    let positionBoxSelected = document.getElementById(`${idBox}`);
    positionBoxSelected.appendChild(getPeao);
    selectedPawnWhite = [];
  }

  for (let i = 0; i < pawnArrayWhite.length; i++) {
    if (pawnArrayWhite[i].id === idPeao) {
      let currentPosition = pawnArrayWhite[i].currentPosition
        .toString()
        .split("");
      let nextPosition = idBox.toString().split("");
      console.log(currentPosition, nextPosition);

      tabuleiro[currentPosition[0]][currentPosition[2]] = 0; //move the pawn in matriz last position
      tabuleiro[nextPosition[0]][nextPosition[2]] = 2; // to current position
      pawnArrayWhite[i].allowedPlays[0] = parseFloat(idBox) + 1.0;

      pawnArrayWhite[i].currentPosition = idBox;
      console.log(tabuleiro);
              clicks = 1;

    }
    if (pawnArrayWhite[i].allowedPlays[1] && pawnArrayWhite[i].id === idPeao) {
      pawnArrayWhite[i].allowedPlays.pop();
    }
  }
}

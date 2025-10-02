
function movePawn(idPeao, idBox, verifyPlays) {
  let getPeao = document.getElementById(`${idPeao}`);
  let positionBoxSelected = document.getElementById(`${idBox}`);
  positionBoxSelected.appendChild(getPeao);
  selectedPawn = [];

  for (let i = 0; i < pawnArray.length; i++) {
    if (pawnArray[i].id === idPeao) {
      let currentPosition = pawnArray[i].currentPosition.toString().split("");
      let nextPosition = idBox.toString().split("");
      tabuleiro[currentPosition[0]][currentPosition[2]] = 0; //move the pawn in matriz last position
      tabuleiro[nextPosition[0]][nextPosition[2]] = 1; // to current position

      //update the allowed plays :)
      pawnArray[i].allowedPlays[0] = parseFloat(idBox - 1.0).toFixed(1);
      //update position the pawn to the last box clicked
      pawnArray[i].currentPosition = idBox;
      pawnArray[i].playsKillOponent[0] = parseFloat(idBox - 0.9).toFixed(1)
              clicks = 0;
console.log(clicks)
    }
    //update the allowed plays to just one allowed :)
    if (pawnArray[i].allowedPlays[1] && pawnArray[i].id === idPeao) {
      pawnArray[i].allowedPlays.pop();
    }
  }
 // console.log(tabuleiro)
}

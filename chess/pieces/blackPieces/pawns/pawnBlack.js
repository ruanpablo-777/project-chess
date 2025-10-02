let pawn = document.querySelectorAll(".peao-black");
let positionTabuleiro;
let pawnArray = [];
let selectedPawn = [];
let elementIdBox = [];
let clicks = 1;

pawn.forEach((element, index) => {
  let id = element.id;
  let oneStep = parseFloat("6." + index - 1.0).toFixed(1);
  let twooStep = parseFloat("6." + index - 2.0).toFixed(1);
  let position = parseFloat("6." + index).toFixed(1);
  let kill = parseFloat(position - 0.9).toFixed(1);

  pawnArray.push({
    id: id,
    currentPosition: position,
    allowedPlays: [oneStep, twooStep],
    playsKillOponent: [kill],
  });

  element.addEventListener("click", () => {
    // selectedPawnWhite = [];
    selectedPawn = [];
    selectedPawn.push(pawnArray[index]);
    // console.log(pawnArray[index]);
    // showPlays(pawnArray[index].allowedPlays)
  });
});

let abc = [];
box.forEach((element, index) => {
  element.addEventListener("click", () => {
    for (let i = 0; i < 8; i++) {
      let elementInsideBox = element.lastElementChild.id.toString().split(i)[1];
      let otherelementInside = element.lastElementChild.id
        .toString()
        .split(i)[0];
      if (elementInsideBox == "") {
        if (abc[abc.length - 1] !== otherelementInside && clicks == 1) {
          abc = [];

          abc.push(element.lastElementChild.id.toString().split(i)[0]);
          //   console.log(abc, clicks, otherelementInside);
        } else if (abc[abc.length - 1] !== otherelementInside && clicks == 0) {
          abc = [];
          abc.push(element.lastElementChild.id.toString().split(i)[0]);
        }
      }
    }
    // console.log(abc, clicks);
    if (clicks == 1) {
      verification(element);
      console.log(abc, clicks);
    } else {
      verificationPawnwhite(element);
      // console.log(abc, clicks);
    }

    console.log(abc, clicks);
  });
});

function verification(element) {
  elementIdBox.push(element.id);
  let idBox = parseFloat(element.id).toFixed(1);
  let numberOfPlaysAllowed = selectedPawn[0].allowedPlays.length;
  let allowedPlays;
  let idPeao = selectedPawn[0].id;
  let verifyPlays = false;
  let a = idBox.toString().split("");
  let b = selectedPawn[0].playsKillOponent[0].toString().split("");
  verifyPlays = tabuleiro[a[0]][a[2]] == 0;
  console.log(abc, clicks);

  for (let i = 0; i < numberOfPlaysAllowed; i++) {
    allowedPlays = parseFloat(selectedPawn[0].allowedPlays[i]).toFixed(1);
    if (allowedPlays === idBox && verifyPlays) {
      movePawn(idPeao, idBox, verifyPlays);
    }
    if (
      tabuleiro[b[0]][b[2]] == 2 &&
      idBox == selectedPawn[0].playsKillOponent[0]
    ) {
      killOponent(idPeao, element.lastElementChild.id, idBox);
      movePawn(idPeao, idBox, verifyPlays);
    }
  }
}

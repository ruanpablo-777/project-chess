
let horse = document.querySelectorAll(".horse-black");
//let positionTabuleiro;
let horseArray = [];
let selectedHorse = [];


box.forEach((element, index) => {
  element.addEventListener("click", () => {
    let idBox = parseFloat(element.id);
    if (selectedHorse[0].id) {
      let idPeao = selectedHorse[0].id;
      for (let i = 0; i < selectedHorse[0].allowedPlays.length; i++) {
        let positionPeao = parseFloat(selectedHorse[0].allowedPlays[i]);
        if (positionPeao === idBox) {
          idBox = parseFloat(element.id).toFixed(1);
          moveHorse(idPeao, idBox);
        }
      }
    }
  });
});

horse.forEach((element, index) => {
 // console.log(element.id.split('')[5])
  let indice = (element.id.split('')[5])
  let id = element.id;
  let oneStep = parseFloat("7." + indice - 1.2).toFixed(1);
  let twoStep = parseFloat("7." + indice - 2.1).toFixed(1);
  let threeStep = parseFloat("7." + indice - 1.9).toFixed(1);
  let foutStep = parseFloat("7." + indice - 0.8).toFixed(1);
  let fiveStep = parseFloat("7." + indice) + 0.8;
  let position = parseFloat("7." + indice).toFixed(1);

  horseArray.push({
    id: id,
    currentPosition: position,
    allowedPlays: [oneStep, twoStep, threeStep, foutStep, fiveStep],
  });

  element.addEventListener("click", () => {
   // console.log(horseArray)
   // console.log(oneStep, twoStep, threeStep, foutStep)
    selectedHorse = [];
    selectedHorse.push(horseArray[index]);
    console.log(selectedHorse);
  });
});

function moveHorse(idPeao, idBox) {
    let getPeao = document.getElementById(`${idPeao}`);
    let positionBoxSelected = document.getElementById(`${idBox}`);
   // console.log(idBox);
    positionBoxSelected.appendChild(getPeao);
    selectedHorse = [];
  
  for (let i = 0; i < horseArray.length; i++) {
    if (horseArray[i].id === idPeao) {
      let currentPosition = horseArray[i].currentPosition.toString().split('') 
      let nextPosition = idBox.toString().split('') 
      console.log(currentPosition, nextPosition)
      tabuleiro[currentPosition[0]][currentPosition[2]] = 0 //move the horse in matriz last position 
      tabuleiro[nextPosition[0]][nextPosition[2]] = 1 // to current position
      
      //update the allowed plays
      horseArray[i].allowedPlays[0] = parseFloat(idBox - 1.2).toFixed(1);
      horseArray[i].allowedPlays[1] = parseFloat(idBox - 2.1).toFixed(1);
      horseArray[i].allowedPlays[2] = parseFloat(idBox - 1.9).toFixed(1);
      horseArray[i].allowedPlays[3] = parseFloat(idBox - 0.8).toFixed(1);
      horseArray[i].allowedPlays[4] = parseFloat(idBox) + 0.8
      horseArray[i].allowedPlays[5] = parseFloat(idBox) + 1.9
      horseArray[i].allowedPlays[6] = parseFloat(idBox) + 2.1
      horseArray[i].allowedPlays[7] = parseFloat(idBox) + 1.2
      horseArray[i].currentPosition = idBox
     console.log(tabuleiro)
    }
   
  }
}

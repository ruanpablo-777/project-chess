function killOponent(idPeao, idpeaowhite, idBox) {
    console.log(idPeao, idpeaowhite , idBox)
     let getPeao = document.getElementById(`${idPeao}`);
     let idsdfa = document.getElementById(`${idpeaowhite}`);
  let positionBoxSelected = document.getElementById(`${idBox}`);
    idsdfa.remove();
  selectedPawn = [];
}

function showPlays(plays) {
   // console.log(plays)
    box.forEach((element, index) => {
        if(element.id == plays[0] || element.id == plays[1]) {
            element.innerHTML = 'o'
            console.log(element.id)
        }
    })
}
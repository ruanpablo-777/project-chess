

box.forEach((element) => {
    if (element.id.toString().split('')[0] == 1) {
      //  console.log(element.id.toString().split('')[2])
            let index = element.id.toString().split('')[2]
            const pecass = document.createElement("div");
            pecass.id = 'peaoWhite'+index
            //  pecass.id +=  ` ${index},${i}`
            pecass.innerHTML = '♙'
            pecass.classList.add("peao-white");
            element.appendChild(pecass);
        }}
       )


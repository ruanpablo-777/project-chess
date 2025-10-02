let box = document.querySelectorAll(".box");

box.forEach((element) => {
    if (element.id.toString().split('')[0] == 6) {
        //console.log(element.id.toString().split('')[2])
            let index = element.id.toString().split('')[2]
            const pecass = document.createElement("div");
            pecass.id = 'peao'+index
            //  pecass.id +=  ` ${index},${i}`
            pecass.innerHTML = '♟️'
            pecass.classList.add("peao-black");
            element.appendChild(pecass);
            
        }}
       )



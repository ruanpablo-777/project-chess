const list = document.querySelectorAll('.list')
let controle = 0

list.forEach((element, index) => {
    for (let i = 0; i < 8; i++) {
        
        const boxWhite = document.createElement('div')
        boxWhite.classList.add('box-white')
        const boxBlack = document.createElement('div')
        boxBlack.classList.add('box-black')
        
        if (index % 2 == 0) {
        if(controle % 2 ==0 ) {
            
            element.appendChild(boxWhite)
            console.log(`${index}+${i}`)
            boxWhite.innerHTML = `${index},${i}`
        } else {
            element.appendChild(boxBlack)
            boxBlack.innerHTML = `${index},${i}`

        }
      } else {
          if(controle % 2 == 1 ) {
            
            element.appendChild(boxWhite)
            console.log(`${index}+${i}`)
            boxWhite.innerHTML = `${index},${i}`
        } else {
            element.appendChild(boxBlack)
            boxBlack.innerHTML = `${index},${i}`

        }

      }
     controle++   
    }


})
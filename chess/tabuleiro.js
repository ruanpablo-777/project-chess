const list = document.querySelectorAll('.list')
let controle = 0

list.forEach((element, index) => {
    console.log(element)
    const boxWhite = document.createElement('div')
    boxWhite.classList.add('box-white')
    const boxBlack = document.createElement('div')
    boxBlack.classList.add('box-black')

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {            
            if(controle == 0) {
                element.appendChild(boxWhite)
                controle++
            }else{
                element.appendChild(boxBlack)
                controle--
            }
            
        }
    }

})
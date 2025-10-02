
box.forEach((element) => {
    if (element.id == 7.1 || element.id == 7.6) {
       // console.log(element.id)
            let index = element.id.toString().split('')[2]
            const horse = document.createElement("div");
            horse.id = 'horse'+index
            horse.textContent = '♞'
            horse.classList.add("horse-black");
            element.appendChild(horse);
        }}
       )

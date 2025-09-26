const list = document.querySelectorAll(".list");
list.forEach((element, index) => {
  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div");
    const pecass = document.createElement("div");
    const positionMatriz = document.createElement("p");
    box.classList.add("box");
    positionMatriz.classList.add("position-Matriz");
    box.appendChild(positionMatriz);
    const ola = document.querySelectorAll('.box')
    function hello() {

    }
    
    if (index == 6) {
      box.appendChild(pecass);
      pecass.id = 'peao'+i
    //  pecass.id +=  ` ${index},${i}`
      pecass.innerHTML = '♟️'
    pecass.classList.add("peao");
    
  }
  
  if (index % 2 == 0) {
    if (i % 2 == 0) {
      positionMatriz.innerText = `${index}.${i}`;
      box.id = `${index}.${i}`;
      box.style.backgroundColor = "white";
    } else {
      positionMatriz.innerHTML = `${index}.${i}`;
      box.id = `${index}.${i}`;
      
      box.style.backgroundColor = "black";
      box.style.color = "white";
    }
  } else {
    if (i % 2 == 1) {
      positionMatriz.innerHTML = `${index}.${i}`;
      box.id = `${index}.${i}`;
      
      box.style.backgroundColor = "white";
    } else {
      positionMatriz.innerHTML = `${index}.${i}`;
      box.id = `${index}.${i}`;
      box.style.backgroundColor = "black";
      box.style.color = "white";
      }
    }
    element.appendChild(box);
    
  }
});
function hello() {

}

const blabla = 3
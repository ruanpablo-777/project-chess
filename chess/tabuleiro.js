const list = document.querySelectorAll(".list");
list.forEach((element, index) => {
  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div");
    const positionMatriz = document.createElement("p");
    box.classList.add("box");
    positionMatriz.classList.add("position-Matriz");
    box.appendChild(positionMatriz);
 
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

let tabuleiro = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

//1 = peao      //10 = peao
//2 = torre     //11 = torre
//3 = bispo
//4 = cavalo
//5 = rainha
//6 = rei

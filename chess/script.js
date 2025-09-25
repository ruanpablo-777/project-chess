//1 = peao      //10 = peao
//2 = torre     //11 = torre
//3 = bispo
//4 = cavalo
//5 = rainha
//6 = rei
let peao0 = document.getElementById('peao0')
let peao = document.querySelectorAll(".peao");
let box = document.querySelectorAll("#box");
let movimento = [];
let firstMoviment = true;
let atributosPeao = [];
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

console.log(tabuleiro.length)
box.forEach((element, index) => {
  element.id = index;
  // element.innerHTML = index
  let l = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      l++;
      tabuleiro[i][j] = l;
    }
  }
  //console.log(tabuleiro);
  element.addEventListener("click", () => {
    if (atributosPeao[1] && movimento == "") {
      movimento.push(index - 8, index - 16);
      firstMoviment = false;
      console.log(movimento);
    } else {
      movimento.push(index - 8);
      console.log(movimento);
    }
  });
});

peao.forEach((element, index) => {
  element.innerHTML = "♟️";

  atributosPeao.push({ id: index, nome: "peao", firstJogada: true });
  element.addEventListener("click", () => {
    let pecas = "";
    pecas = element.id;
    if (pecas == `peao${index}`) {
      peao1(pecas);
    }
});
});

function peao1(pecas) {
  box.forEach((element, index) => {
      element.addEventListener("click", () => {
          for (let i = 0; i < movimento.length; i++) {
        if (!element.hasChildNodes() && movimento[i] == index) {
          let peao = document.getElementById(`${pecas}`);
          let createPeao = document.createElement("div");

          // createPeao.classList.add('peao')
          createPeao.id = `${pecas}`;
          createPeao.textContent = "peao";
          element.appendChild(peao);
          pecas = "";
          movimento = [];
        }
    }
});
});
}


/*
peao0.addEventListener('dblclick', () => {
document.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY
    console.log(x, ' ', y)
        peao0.style.transform = `translate(${x - 120}px, ${y - 370}px)`
        peao0.style.zIndex = 2
      //  peao0.style.position = 'relative'
            console.log(peao0.style.transform)


    })
})*/
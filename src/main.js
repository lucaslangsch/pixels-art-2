// Variáveis globais;
const gridMain = document.getElementById('grid-main');
const btnCreateGrid = document.getElementById('create-grid');
const gridWidth = document.getElementById('grid-width');
const gridWidthValue = document.getElementById('grid-width-value');
const gridHeigth = document.getElementById('grid-height');
const gridHeigthValue = document.getElementById('grid-height-value');

// Funções

const createDivWidth = () => {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('div-row');
  gridDiv.style.width = '2em';
  gridDiv.style.height = '2em';
  gridMain.appendChild(gridDiv);
};

const createDivHeigth = (div) => {
  const gridDiv = document.createElement('div');
  gridDiv.style.border = 'solid 1px black';
  gridDiv.style.width = '2em';
  gridDiv.style.height = '2em';
  gridDiv.id = 'div-col';
  div.appendChild(gridDiv);
};

const createGrid = (x, y) => {
  for (let index = 0; index < x; index += 1) {
    createDivWidth();
  }
  const divs = document.querySelectorAll('div.div-row');
  divs.forEach((div) => {
    for (let index = 0; index < y; index += 1) {
      createDivHeigth(div);
    }
  });
};

gridWidth.addEventListener('input', () => {
  gridWidthValue.innerText = gridWidth.value;
});
gridHeigth.addEventListener('input', () => {
  gridHeigthValue.innerText = gridHeigth.value;
});

btnCreateGrid.addEventListener('click', () => {
  const gridHeigthV = gridHeigth.value;
  const gridWidthV = gridWidth.value;
  createGrid(gridHeigthV, gridWidthV);
});

// const createGrid = () => {
//   for (let index = 0; index < 20; index++) {
//     createDivWidth();
//   }
// };

// const paintBox = document.getElementById("paint-box");

// for (let i = 0; i < 10; i++) {
//   const row = document.createElement("div");
//   row.classList.add("row");

//   for (let j = 0; j < 10; j++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     row.appendChild(cell);
//   }

//   paintBox.appendChild(row);
// }

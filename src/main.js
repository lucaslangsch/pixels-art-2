// Variáveis globais;
const gridMain = document.getElementById('grid-main');
const btnCreateGrid = document.getElementById('create-grid');
const gridWidth = document.getElementById('grid-width');
const gridWidthValue = document.getElementById('grid-width-value');
const gridHeigth = document.getElementById('grid-height');
const gridHeigthValue = document.getElementById('grid-height-value');
const paintSelected = document.getElementById('select-color');

// Funções

const createDivWidth = () => {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('div-row');
  gridDiv.style.width = '2em';
  gridDiv.style.height = '2em';
  gridMain.appendChild(gridDiv);
};

const createDivHeigth = (divWidth) => {
  const gridDiv = document.createElement('div');
  gridDiv.style.border = 'solid 1px black';
  gridDiv.style.width = '2em';
  gridDiv.style.height = '2em';
  gridDiv.id = 'div-col';
  divWidth.appendChild(gridDiv);
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

const paintGrid = () => {
  const divRow = document.querySelectorAll('#div-col');
  for (let index = 0; index < divRow.length; index += 1) {
    divRow[index].addEventListener('click', () => {
      const colorSelected = paintSelected.value;
      divRow[index].style.backgroundColor = colorSelected;
    });
  }
};

btnCreateGrid.addEventListener('click', () => {
  const gridHeigthV = gridHeigth.value;
  const gridWidthV = gridWidth.value;
  createGrid(gridHeigthV, gridWidthV);
  paintGrid();
});

// Variáveis globais;
const gridMain = document.getElementById('grid-main');
const btnCreateGrid = document.getElementById('create-grid');
const gridWidth = document.getElementById('grid-width');
const gridWidthValue = document.getElementById('grid-width-value');
const gridHeigth = document.getElementById('grid-height');
const gridHeigthValue = document.getElementById('grid-height-value');
const paintSelected = document.getElementById('select-color');
const btnPaintGrid = document.getElementById('paint-grid');
const btnEraseGrid = document.getElementById('erase-grid');
const btnClearGrid = document.getElementById('clear-grid');
const btnRandomColor = document.getElementById('random-color');
const baseHex = 16;

if (localStorage.key) {
  gridMain.innerHTML = localStorage.getItem('grid');
}

// Funções
const createDivWidth = () => {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('div-row');
  gridMain.appendChild(gridDiv);
};

const createDivHeigth = (divWidth) => {
  const gridDiv = document.createElement('div');
  gridDiv.style.border = 'solid 1px black';
  gridDiv.style.width = '1.5em';
  gridDiv.style.height = '1.5em';
  gridDiv.classList.add('div-col');
  divWidth.appendChild(gridDiv);
};

const createGrid = (x, y) => {
  gridMain.innerHTML = '';
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

const paintGridFunction = () => {
  const divRow = document.querySelectorAll('.div-col');
  console.log(divRow);
  for (let index = 0; index < divRow.length; index += 1) {
    divRow[index].addEventListener('click', () => {
      const colorSelected = paintSelected.value;
      divRow[index].style.backgroundColor = colorSelected;
      localStorage.setItem('grid', (gridMain.innerHTML));
    });
  }
};

const eraseGridFunction = () => {
  const divRow = document.querySelectorAll('.div-col');
  for (let index = 0; index < divRow.length; index += 1) {
    divRow[index].addEventListener('click', () => {
      divRow[index].style.backgroundColor = 'white';
      localStorage.setItem('grid', (gridMain.innerHTML));
    });
  }
};

btnPaintGrid.addEventListener('click', () => {
  paintGridFunction();
});
btnEraseGrid.addEventListener('click', () => {
  eraseGridFunction();
});

btnCreateGrid.addEventListener('click', () => {
  const gridHeigthV = gridHeigth.value;
  const gridWidthV = gridWidth.value;
  createGrid(gridHeigthV, gridWidthV);
  localStorage.setItem('grid', (gridMain.innerHTML));
});

btnClearGrid.addEventListener('click', () => {
  const divRow = document.querySelectorAll('.div-col');
  for (let index = 0; index < divRow.length; index += 1) {
    divRow[index].style.backgroundColor = 'white';
    localStorage.setItem('grid', (gridMain.innerHTML));
  }
});

// Função auxiliar que transforma um número rgb em hex
const valueToHex = (c) => {
  const hex = c.toString(baseHex);
  if (hex.length === 1) {
    return `0${hex}`;
  }
  return hex;
};
const rgbToHex = (r, g, b) => (valueToHex(r) + valueToHex(g) + valueToHex(b));

btnRandomColor.addEventListener('click', () => {
  const numberMaxForRgb = 255;
  const r = Math.floor(Math.random() * numberMaxForRgb);
  const g = Math.floor(Math.random() * numberMaxForRgb);
  const b = Math.floor(Math.random() * numberMaxForRgb);
  paintSelected.value = `#${rgbToHex(r, g, b)}`;
});

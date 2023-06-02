const container = document.querySelector('.gridContainer');

const createGrid = (amtOfGrids) => {
  for(let i = 0; i < amtOfGrids; i++){
    const row = document.createElement('div');
    row.classList.add('grid-row');
   
    for(let j = 0; j < amtOfGrids; j++){
      const widthAndHeight = 969 / sizeOfGrid;
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;

      row.appendChild(gridBox);
    }
    
    container.appendChild(row);
  }
}
let sizeOfGrid = 4;
createGrid(sizeOfGrid);
const container = document.querySelector('.gridContainer');
const buttonReset = document.querySelector('.button');


const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 400 / amtOfGrids;
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      //adding mouseenter event listener for coloring the grid
      gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = 'black';
      })
      row.appendChild(gridBox);
    }

    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
}

const userSizeFirst = 10;
createGrid(userSizeFirst);

buttonReset.addEventListener('click', () => {
  let userSize = Number(prompt('Enter the size of the grid'));

  if (userSize > 100) {
    userSize = Number(prompt('Pick a number less than 100'));
  }
  const wrapper = document.querySelector('.wrapper');

  if (!wrapper) {
    createGrid(userSize);
  } else {
    wrapper.remove();
    createGrid(userSize)
  }

})


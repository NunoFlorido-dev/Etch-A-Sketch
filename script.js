const container = document.querySelector('.gridContainer');
const buttonReset = document.querySelector('.button');
const buttonMode = document.querySelector('.buttonMode');


let mode = 1;

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}


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
        if (mode == 1) {
          gridBox.style.backgroundColor = 'black';
        } else if (mode == 2) {
          const randomR = randomInteger(255);
          const randomG = randomInteger(255);
          const randomB = randomInteger(255);
          gridBox.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;;
        }
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


buttonMode.addEventListener('click', () => {
  if (mode == 1) {
    mode = 2;
  } else {
    mode = 1;
  }
}
)

/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import GameBoard from '../factories/GameBoard';
import Player from '../factories/Player';
import Ship from '../factories/Ship';

export const createBoard = (newBoard, id, className, direction) => {
  const container = document.querySelector(id);

  const { board } = newBoard;
  let count = 0;
  board.forEach((e) => {
    e.forEach((e) => {
      const div = document.createElement('div');
      div.classList.add(className);
      div.classList.add(direction);
      div.setAttribute('value', e);
      div.setAttribute('id', count);
      container.appendChild(div);
      div.value = e;
      div.textContent = e;
      count += 1;
    });
  });
};
export const updateBoard = (newBoard, containerID, gridID, direction) => {
  removeBoard(containerID, gridID);
  const container = document.querySelector(`#${containerID}`);
  const { board } = newBoard;
  let count = 0;
  board.forEach((e) => {
    e.forEach((e) => {
      const div = document.createElement('div');
      div.classList.add(gridID);
      div.classList.add(direction);
      div.setAttribute('value', e);
      div.setAttribute('id', count);
      container.appendChild(div);
      div.value = e;
      div.textContent = e;
      count += 1;
    });
  });
  count = 0;
};
export const removeBoard = (containerID, gridID) => {
  const container = document.querySelector(`#${containerID}`);
  const grid = document.querySelectorAll(`.${gridID}`);
  grid.forEach((element) => {
    container.removeChild(element);
  });
};

export const clickEvent = (player, ai) => {
  const grids = document.querySelectorAll('.grids');
  grids.forEach((element) => element.addEventListener('click', () => {
    if (player.turn) {
      ai.turn = true;
      player.turn = false;

      const event = new Event('click');
      element.dispatchEvent(event);
    } else if (ai.turn) {
      ai.turn = false;
      player.turn = true;
    }
  }));
};

const checkIfOutOfBound = (ship, event, increment) => {
  const outOfBound5 = [6, 7, 8, 9];
  const outOfBound4 = [7, 8, 9];
  const outOfBound3 = [8, 9];
  const outOfBound2 = [9];

  if (increment === 1) {
    switch (true) {
      case ship.length === 5 && outOfBound5.includes(event.target.value % 10):
        return true;
      case ship.length === 4 && outOfBound4.includes(event.target.value % 10):
        return true;
      case ship.length === 3 && outOfBound3.includes(event.target.value % 10):
        return true;
      case ship.length === 2 && outOfBound2.includes(event.target.value % 10):
        return true;
    }
  }
  if (increment === 10) {
    switch (true) {
      case ship.length === 5
        && outOfBound5.includes(Math.floor(event.target.value / 10)):
        return true;
      case ship.length === 4
        && outOfBound4.includes(Math.floor(event.target.value / 10)):
        return true;
      case ship.length === 3
        && outOfBound3.includes(Math.floor(event.target.value / 10)):
        return true;
      case ship.length === 2
        && outOfBound2.includes(Math.floor(event.target.value / 10)):
        return true;
    }
  }
};
const getCoordinates = (ship, event, color, increment) => {
  const coordinate = [];
  if (ship.length === 1) {
    return;
  }
  for (let i = 0; i <= (ship.length - 1) * increment; i += increment) {
    if (checkIfOutOfBound(ship, event, increment)) return;

    if (event.target.value + i === 'x0') {
      return;
    }
    if (
      document.querySelector(`div[value="${event.target.value + i}"]`) === null
    ) {
      return;
    } if (event.target.value + i === 'x0') {
      return;
    }

    document.querySelector(
      `div[value="${event.target.value + i}"]`,
    ).style.backgroundColor = color;
    coordinate.push(event.target.value + i);
  }
  return coordinate;
};
const getColumns = (ship) => {
  const columns = [];
  for (let i = 0; i <= ship.length - 1; i += 1) {
    if (ship.position[i]) {
      columns.push(Math.floor(ship.position[i] / 10));
    }
  }

  return columns;
};
const changeColor = () => {
  const select = Array.from(document.querySelectorAll('.player-grids'));
  select
    .filter((element) => element.value === 'x')
    .forEach((element) => (element.style.backgroundColor = 'lightblue'));
};

const randomGridPicker = (board, grids) => {
  const randomlyPickedGrid = board.autoPlay(grids);
  const map = new Map();
  map.set(randomlyPickedGrid, randomlyPickedGrid.value);
  const iterator = map.entries().next().value;

  return { key: iterator[0], value: iterator[1] };
};

// console.log(randomGridPicker(new GameBoard(), document.querySelectorAll('.player-grids')));
const storePlayerClicks = [];
const storeClicks = [];
export const renderAttack = (playerBoard) => {
  const aiBoard = new GameBoard();

  aiBoard.name = 'aiBoard';
  let ai;
  let randomlyPickedGrid;
  let gridValue;
  const playerGrids = document.querySelectorAll('.player-grids');
  const aiGrids = document.querySelectorAll('.ai-grids');

  aiGrids.forEach((element) => element.addEventListener('click', (e) => {
    const elementValue = e.target.value;
    const elementId = e.target.id;
    ai = new Player();
    const randomIterator = randomGridPicker(ai, playerGrids);
    randomlyPickedGrid = randomIterator.key;
    gridValue = randomIterator.value;

    if (elementValue === 'x' && !storePlayerClicks.includes(elementId)) {
      storePlayerClicks.push(elementId);
      aiBoard.recieveAttack(elementValue);
      checkIfWon(aiBoard);
      element.style.backgroundColor = 'rgb(248, 78, 49 )';
      setTimeout(renderAiAttack, 500, randomlyPickedGrid, gridValue, playerBoard);
      //renderAiAttack(randomlyPickedGrid, gridValue, playerBoard);
    } else if (elementValue !== 'x') {
      element.style.backgroundColor = 'lightgreen';
      setTimeout(renderAiAttack, 500, randomlyPickedGrid, gridValue, playerBoard);
      //renderAiAttack(randomlyPickedGrid, gridValue, playerBoard);
    }
  }));
};
let flag = true;
let direction = 'horizontal';
let increment = 1;
const rotateButton = document.querySelector('#rotate');

export const renderPlayerShips = (gameboard, length) => {
  const grids = document.querySelectorAll(`.player-grids.${direction}`);

  const ship = new Ship(length, [0, 0, 0], [1, 2, 3]);

  if (length === 3) {
    if (flag) {
      length += 1;
      flag = false;
    }
  }
  if (length <= 1) {
    renderAttack(gameboard);
    return;
  }

  grids.forEach((element) => element.addEventListener('mouseover', (e) => {
    getCoordinates(ship, e, 'lightblue', increment);

    element.addEventListener('click', (e) => {
      try {
        ship.position = getCoordinates(ship, e, 'red', increment);
        ship.column = getColumns(ship);
        gameboard.placeShip(ship);
        updateBoard(
          gameboard,
          'primary-container',
          'player-grids',
          direction,
        );
        changeColor();
      } catch {
        return;
      }

      renderPlayerShips(gameboard, length - 1);
    });
  }));

  grids.forEach((element) => element.addEventListener('mouseout', (e) => {
    getCoordinates(ship, e, 'rgb(232 230 230)', increment);
  }));
};

const renderAiAttack = (randomlyPickedGrid, gridValue, playerBoard) => {
  let clicked = false;
  randomlyPickedGrid.addEventListener('click', (e) => {
    if (clicked) {
      return;
    }
    clicked = true;
    let elementValue = e.target.value;
    let elementId = e.target.id;

    if (storeClicks.includes(elementId)) {
      const grids = document.querySelectorAll('.player-grids');
      const ai = new Player();
      let random = randomGridPicker(ai, grids);

      while (storeClicks.includes(random.key.id)) {
        random = randomGridPicker(ai, grids);
      }

      randomlyPickedGrid = random.key;
      gridValue = random.value;
      elementValue = random.value;
      elementId = random.key.id;
    }

    if (gridValue === 'x' && !storeClicks.includes(elementId)) {
      storeClicks.push(elementId);
      playerBoard.recieveAttack(gridValue);
      checkIfWon(playerBoard);
      randomlyPickedGrid.style.backgroundColor = 'rgb(248, 78, 49)';
    } else if (elementValue !== 'x' && !playerBoard.isMissed(elementValue)) {
      storeClicks.push(elementId);
      playerBoard.recieveMiss(elementValue);
      randomlyPickedGrid.style.backgroundColor = 'lightgreen';
    }
  });

  const event = new Event('click');
  randomlyPickedGrid.dispatchEvent(event);
};

export const renderPlayerAttack = (board) => {
  const aiGrids = document.querySelectorAll('.ai-grids');
  aiGrids.forEach((element) => element.addEventListener('click', (e) => {
    if (e.target.value === 'x') {
      board.recieveAttack(e.target.value);
      element.style.backgroundColor = 'rgb(248, 78, 49 )';
    } else {
      element.style.backgroundColor = 'lightgreen';
    }
  }));
};

rotateButton.addEventListener('click', () => {
  if (direction === 'horizontal') {
    direction = 'vertical';
    increment = 10;
  } else if (direction === 'vertical') {
    direction = 'horizontal';
    increment = 1;
  }
});

const checkIfWon = (board) => {
  let boardName = '';
  if (board.hits.length === 17) {
    boardName = board.name === 'aiBoard' ? 'You' : 'Computer';

    const winnerContainer = document.querySelector('.winner-container');
    winnerContainer.classList.add('show');
    winnerContainer.firstElementChild.textContent = `${boardName} Won!!`;
    winnerContainer.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        location.reload();
      }
    });
  }
};

const randomizeShipPlacement = (ship, randomNumber) => {
  ship.column.fill(randomNumber);

  const randomPrefix = Math.floor(Math.random() * 5).toString();
  let parsedInt = parseInt(`1${randomNumber}${randomPrefix}`);

  ship.position = ship.position.map((x) => {
    const incrementedValue = parsedInt + 1;
    // eslint-disable-next-line no-unused-vars
    x = incrementedValue;
    parsedInt += 1;
    return incrementedValue;
  });
};

const randomArray = (size) => {
  const array = [];
  let random = Math.floor(Math.random() * 10);
  for (let i = 0; i < size; i += 1) {
    while (array.includes(random)) {
      random = Math.floor(Math.random() * 10);
    }
    array.push(random);
  }
  return array;
};
export const renderAiShips = (gameboard) => {
  const ship = new Ship(5, [0, 0, 0, 0, 0], [101, 102, 103, 104, 105]);
  const ship2 = new Ship(4, [7, 7, 7, 7], [173, 174, 175, 176]);
  const ship3 = new Ship(3, [2, 2, 2], [122, 123, 124]);
  const ship4 = new Ship(3, [4, 4, 4], [144, 145, 146]);
  const ship5 = new Ship(2, [8, 9], [181, 191]);

  const random = randomArray(5);
  randomizeShipPlacement(ship, random[0]);
  randomizeShipPlacement(ship2, random[1]);
  randomizeShipPlacement(ship3, random[2]);
  randomizeShipPlacement(ship4, random[3]);
  randomizeShipPlacement(ship5, random[4]);

  gameboard.placeShip(ship);
  gameboard.placeShip(ship2);
  gameboard.placeShip(ship3);
  gameboard.placeShip(ship4);
  gameboard.placeShip(ship5);
  updateBoard(gameboard, 'secondary-container', 'ai-grids', 'horizontal');
};

export default class GameBoard {
  constructor(board) {
    this.board = board || [];
    this.missed = [];
    this.hits = [];
    this.allow = false;
    this.name = '';
  }

  initialize(count) {
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = count;
        count++;
      }
    }
  }

  placeShip(ship) {
    const { column } = ship;
    const { position } = ship;

    for (let i = 0; i < position.length; i += 1) {
      for (let j = 0; j < position.length; j += 1) {
        this.board[column[i]][this.board[column[i]].indexOf(position[j])] = 'x';
      }
    }
  }

  recieveAttack(position) {
    this.hits.push(position);
  }

  recieveMiss(position) {
    this.missed.push(position);
  }

  isMissed(position) {
    return this.missed.includes(position);
  }

  allowAttack() {
    return this.allow;
  }

  instanceName() {
    return this;
  }

  allShipSunk() {
    if (this.hits.length === 16) {
      return true;
    }
    return false;
  }
}

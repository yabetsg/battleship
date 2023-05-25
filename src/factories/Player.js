/* eslint-disable class-methods-use-this */
export default class Player {
  constructor() {
    this.turn = true;
  }

  autoPlay(grid) {
    const random = Math.floor(Math.random() * 100);

    return grid[random];
  }
}

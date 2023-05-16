export default class GameBoard {
  constructor(board) {
    this.board = board || [];
    this.missed = [[]];
    this.hits = [[]];
  }

  initialize(count) {
    
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = count;
        count++;
      }
    }
  }
  


  placeShip(ship) {
    let column = ship.column;
    let position = ship.position;
    for(let i=0; i<position.length;i++){
       for (let j = 0; j < position.length; j++) {
        this.board[column[i]][this.board[column[i]].indexOf(position[j])] = 'x';
      
    }
    }
   
    
  }

  recieveAttack(column, position) {
    if (this.board[column][position] === "x") {
      if (this.hits[column] === undefined) {
        this.hits[column] = [position];
      } else {
        this.hits[column].push(position);
      }
    } else if (this.missed[column] === undefined) {
      this.missed[column] = [position];
    } else {
      this.missed[column].push(position);
    }
  }
 
}

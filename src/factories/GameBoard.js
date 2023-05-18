export default class GameBoard {
  constructor(board) {
    this.board = board || [];
    this.missed = [[]];
    this.hits = [];
    
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
        // if((this.board[column[i]+1][this.board[column[i]+1].indexOf(position[j]+10)])!='x'){
          this.board[column[i]][this.board[column[i]].indexOf(position[j])] = 'x';
        
        // }
    }
   }
   
  }
  
 
 
  recieveAttack(position){
    
        this.hits.push(position);
    
  }

  

  // recieveAttack(column, position) {
  //   for(let i=0; i<position.length; i++){
  //     for(let j=0; j<position.length; j++){
  //       if (this.board[column[i]][position[j]] === "x") {
  //         if (this.hits[column[i]] === undefined) {
  //       this.hits[column[i]] = [position[j]];
  //     } else {
  //       this.hits[column[i]].push(position[i]);
  //     }
  //   } else if (this.missed[column] === undefined) {
  //     this.missed[column] = [position];
  //   } else {
  //     this.missed[column].push(position);
  //   }
  //     }
  //   }
    
  // }
 
}

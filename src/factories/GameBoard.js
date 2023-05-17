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
        // if((this.board[column[i]+1][this.board[column[i]+1].indexOf(position[j]+10)])!='x'){
          this.board[column[i]][this.board[column[i]].indexOf(position[j])] = 'x';
        
        // }
    }
   }
   
  }
  checkIfOutOfBound = (event,increment)=>{
    let ship = this.ship;
    if(increment ===1){
        switch(true){ 
             case ship.length===5 && outOfBound5.includes(event.target.value%10):
                 return true;
             case ship.length===4 && outOfBound4.includes(event.target.value%10):
                 return true;
             case ship.length===3 && outOfBound3.includes(event.target.value%10):
                 return true;
             case ship.length===2 && outOfBound2.includes(event.target.value%10):
                     return true;
      } 
     }
     if(increment ===10){
         switch(true){ 
              case ship.length===5 && outOfBound5.includes(Math.floor(event.target.value/10)):
                  return;
              case ship.length===4 && outOfBound4.includes(Math.floor(event.target.value/10)):
                  return;
              case ship.length===3 && outOfBound3.includes(Math.floor(event.target.value/10)):
                  return;
              case ship.length===2 && outOfBound2.includes(Math.floor(event.target.value/10)):
                    return;
       } 
      }
}
  // nextShip(ship) {
  //   let column = ship.column;
  //   let position = ship.position;
  //   console.log(column[0]);
  //   console.log(position[0]+10);
  //   for(let i=0; i<position.length;i++){
  //      for (let j = 0; j < position.length; j++) {
  //       let index = (this.board[column[0]+1][this.board[column[0]+1].indexOf(position[0]+10)]);
  //        //console.log('index:'+index);
  //      // // console.log(this.board[column[i]][index[j]]);
  //         //this.board[column[i]][this.board[column[i]].indexOf(position[j])] = 'x';
      
        
      
  //   }
  //   }
   
    
  // }
  

  

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

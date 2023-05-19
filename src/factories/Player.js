export class Player{
    constructor(){ 
        this.turn = true;
        this.position = this.position;
    }
  
    autoPlay(grid){
        
        let random = Math.floor(Math.random()*100);
        
        return grid[random];
    }
}
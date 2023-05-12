import GameBoard from "../factories/GameBoard";
import { Player } from "../factories/Player"
import Ship from "../factories/Ship";
import { clickEvent, createBoard, removeBoard, renderShips, updateBoard } from "./dom";
Ship
export const runGame = ()=>{
    const player = new Player();
    const ai = new Player();
    const gameboard = new GameBoard();
    const gameboard2 = new GameBoard();
    
    createBoard(gameboard,'#primary-container','player-grids');
    createBoard(gameboard2,'#secondary-container','ai-grids');
     renderShips(gameboard,5); 
   
    updateBoard(gameboard,'primary-container',"player-grids");
     renderShips(gameboard,4);
    // for(let i =0;i<4; i++){
       
    //     renderShips(gameboard,4);
    // }
     
    

   
    //  console.log(gameboard.board);
    //  clickEvent(player,ai);
}
runGame();
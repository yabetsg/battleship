import GameBoard from "../factories/GameBoard";
import { Player } from "../factories/Player"
import Ship from "../factories/Ship";
import { clickEvent, createBoard, removeBoard, renderAiShips, renderPlayerShips, updateBoard } from "./dom";

export const runGame = ()=>{
    const player = new Player();
    const ai = new Player();
    const playerBoard = new GameBoard();
    const aiBoard = new GameBoard();
    
    createBoard(playerBoard,'#primary-container','player-grids');
    createBoard(aiBoard,'#secondary-container','ai-grids');
     renderPlayerShips(playerBoard,5); 
    renderAiShips(aiBoard)
    // renderShips(gameboard,4);
   // updateBoard(gameboard,'primary-container',"player-grids");
     
    // for(let i =0;i<4; i++){
       
    //     renderShips(gameboard,4);
    // }
     
    

   
    //  console.log(gameboard.board);
    //  clickEvent(player,ai);
}
runGame();
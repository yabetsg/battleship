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
    
    createBoard(gameboard,'#primary-container');
    createBoard(gameboard2,'#secondary-container');
     renderShips(gameboard,5);
    //  renderShips(gameboard,4);
    // for(let i =0;i<4; i++){
       
    //     renderShips(gameboard,4);
    // }
     
    

    //  updateBoard(gameboard,'#primary-container',".grids");
    //  console.log(gameboard.board);
    //  clickEvent(player,ai);
}
runGame();
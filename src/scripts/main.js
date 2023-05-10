import GameBoard from "../factories/GameBoard";
import { Player } from "../factories/Player"
import { clickEvent, createBoard, removeBoard, renderShips, updateBoard } from "./dom";
export const runGame = ()=>{
    const player = new Player();
    const ai = new Player();
    const gameboard = new GameBoard();
    const gameboard2 = new GameBoard();
    
    createBoard(gameboard,'#primary-container');
    createBoard(gameboard2,'#secondary-container');
     renderShips(gameboard);
    updateBoard(gameboard,'#primary-container',".grids");
     console.log(gameboard.board);
     clickEvent(player,ai);
}
runGame();
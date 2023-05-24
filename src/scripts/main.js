import GameBoard from '../factories/GameBoard';
import {
  createBoard,
  renderAiShips,
  renderPlayerShips,
} from './dom';

const runGame = () => {
  const playerBoard = new GameBoard();
  const aiBoard = new GameBoard();
  playerBoard.initialize(0);
  aiBoard.initialize(100);

  createBoard(playerBoard, '#primary-container', 'player-grids', 'horizontal');
  createBoard(aiBoard, '#secondary-container', 'ai-grids', 'horizontal');

  renderAiShips(aiBoard);

  renderPlayerShips(playerBoard, 5, aiBoard);
};
runGame();

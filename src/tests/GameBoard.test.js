import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";
describe('GameBoard test',()=>{
    let board;
    beforeEach(()=>{
        board = new GameBoard([[1,2,3],
                              [8,12,4],
                              [6,0,5]]);
    });

    it('test board initialization',()=>{
        board.initialize();
        expect(board.board[0][0]).toEqual(0);
    });
    it('check placement of ship after intitialization',()=>{
        board.initialize();
        board.placeShip(new Ship(3,[0,0,0],[0,1,2]));
        expect(board.board[0][1]).toEqual('x');
    });
    it('test pre made board',()=>{
        expect(board.board[1][0]).toEqual(8);
    });
   
    it('test hit attack method',()=>{
        board.placeShip(new Ship(3,[0,0,0],[1,2,3]))
        board.recieveAttack(0,1);
        board.recieveAttack(0,2);
        expect(board.hits).toEqual([[1,2]]);
    })
    it('test missed attack method',()=>{
        board.placeShip(new Ship(3,[1,1,1],[1,2,3]))
        board.recieveAttack(1,7);
        expect(board.missed).toEqual([[],[7]])
    })
    it('test vertical ships',()=>{
        board.initialize();
        board.placeShip(new Ship(3,[5,6,7],[55,65,75]));
        expect(board.board[5][5]).toEqual('x');
        expect(board.board[6][5]).toEqual('x');
        expect(board.board[7][5]).toEqual('x');
    })
})
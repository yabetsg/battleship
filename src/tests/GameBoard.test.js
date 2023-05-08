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
    it('test already made board',()=>{
        expect(board.board[1][0]).toEqual(8);
    });
   
    it('test placeShip method',()=>{
        board.placeShip(new Ship(3,1,[1,2,3]))
        expect(board.board[1][1]).toEqual('x');
        expect(board.board[1][2]).toEqual('x');
        expect(board.board[1][3]).toEqual('x');
    })
    it('test hit attack method',()=>{
        board.placeShip(new Ship(3,1,[1,2,3]))
        board.recieveAttack(1,1);
        board.recieveAttack(1,2);
        expect(board.hits).toEqual([[],[1,2]]);
    })
    it('test missed attack method',()=>{
        board.placeShip(new Ship(3,1,[1,2,3]))
        board.recieveAttack(1,7);
        expect(board.missed).toEqual([[],[7]])
    })
})
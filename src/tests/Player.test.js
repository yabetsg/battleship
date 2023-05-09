import { Player } from "../factories/Player";

describe('player class test',()=>{
    let player;
    beforeEach(()=>{
        player = new Player();
    })
    it('',()=>{
        expect(player.autoPlay()).toEqual(5)
    })
})
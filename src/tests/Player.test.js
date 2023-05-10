import { Player } from "../factories/Player";

describe('player class test',()=>{
    let player;
    beforeEach(()=>{
        player = new Player();
    })
    it('returns whole number',()=>{
        let randomWholeDigit= player.autoPlay();
        let whole = ((randomWholeDigit*10)%10);
        expect(whole).toEqual(0)
    })
})
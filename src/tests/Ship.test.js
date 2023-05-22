import Ship from "../factories/Ship"

describe('Ship test',()=>{ 
    let ship;
    beforeEach(()=>{
        ship = new Ship(3,1,[3,4,1]);
    })
    
    it('check for 1 hit',()=>{
        ship.hit(4);
        expect(ship.hits).toEqual([4]);
    })
    it('check for 3 hit',()=>{
        ship.hit(3);
        ship.hit(4);
        ship.hit(1);
        expect(ship.hits).toEqual([3,4,1]);
    })
    it('check if only stores valid hitpoints',()=>{
        ship.hit(4);
        ship.hit(13);
        expect(ship.hits).toEqual([4,13]);
    })

    it('check if ship has sunk',()=>{
        ship.hit(3);
        ship.hit(4);
       
        expect(ship.allShipSunk()).toBeFalsy();
    })
    it('check if ship has not sunk',()=>{
        ship.hit(3);
        ship.hit(4);
       
        expect(ship.allShipSunk()).toBeFalsy();
    })
})

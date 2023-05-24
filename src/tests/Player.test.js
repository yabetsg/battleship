/* eslint-disable no-undef */
import Player from '../factories/Player';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
describe('player class test', () => {
  let player;
  let grids;
  let dom;
  beforeEach(() => {
    player = new Player();
    grids = [];
    // mock = jest.fn();
    dom = new JSDOM(`
         <!DOCTYPE html>
         <html>
           <body>
             <div class="player-grids"></div>
             <div class="player-grids"></div>
             <div></div>
           </body>
         </html>
       `);
    for (let i = 0; i < 100; i += 1) {
      grids.push(dom.window.document.createElement('div'));
    }
  });
  it('if auto picked element is an element', () => {
    const autoPick = player.autoPlay(grids);

    expect(autoPick).toBeInstanceOf(dom.window.HTMLElement);
  });
});

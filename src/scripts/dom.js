import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";
export const createBoard = (newBoard,id)=>{
    const container = document.querySelector(id);
    newBoard.initialize();
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add('grids'); 
            container.appendChild(div);
            div.value = e;
            div.innerText = e;
            
        });
    });

    
}
export const updateBoard = (newBoard,containerID,gridID)=>{
    removeBoard(containerID,gridID);
    const container = document.querySelector(containerID);
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add('grids'); 
            container.appendChild(div);
            div.value = e;
            div.innerText = e;
            
        });
         
    });

    
}
export const removeBoard = (containerID,gridID)=>{
    const container = document.querySelector(containerID);
    const grid = document.querySelectorAll(gridID);
    grid.forEach(element=> {
        if(container.hasChildNodes())
        container.removeChild(element)
    });
}
export const clickEvent = (player,ai)=>{
    const grids = document.querySelectorAll('.grids');
    grids.forEach(element=>element.addEventListener('click',(e)=>{
        if(player.turn){
             ai.turn = true;
             player.turn = false;
            console.log('player: '+e.target.value);
             const event = new Event('click');
            element.dispatchEvent(event);
        }else if(ai.turn){
            console.log('ai: '+ ai.autoPlay());
            ai.turn = false;
            player.turn = true;
            
        }
        
    }));
}
export const renderShips = (gameboard) =>{
    const ship = new Ship(3,0,[1,2,3]);
    gameboard.placeShip(ship);
    const grids = document.querySelectorAll('#primary-container>.grids');
    grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
        // console.log('x');
    }));
}


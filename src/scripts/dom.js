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
            div.setAttribute('value',e);
            container.appendChild(div);
            div.value = e;
            div.textContent = e;
            
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
              div.setAttribute('e',"e");
            container.appendChild(div);
           
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
const findElement= (ship,event,color)=>{
    switch(ship.length){
        case 2: {
            const currentElement = document.querySelector(`div[value="${event.target.value}"]`);
            const nextElement = document.querySelector(`div[value="${event.target.value+1}"]`);
            currentElement.style.backgroundColor = color;
             nextElement.style.backgroundColor = color;
            }
             break;
        case 3:{
            const currentElement = document.querySelector(`div[value="${event.target.value}"]`);
            const secondElement = document.querySelector(`div[value="${event.target.value+1}"]`);
            const thirdElement = document.querySelector(`div[value="${event.target.value+2}"]`);
            currentElement.style.backgroundColor = color;
            secondElement.style.backgroundColor = color;
            thirdElement.style.backgroundColor = color;
        }
         break;
         case 4: {
            const currentElement = document.querySelector(`div[value="${event.target.value}"]`);
            const secondElement = document.querySelector(`div[value="${event.target.value+1}"]`);
            const thirdElement = document.querySelector(`div[value="${event.target.value+2}"]`);
            const fourthElement = document.querySelector(`div[value="${event.target.value+3}"]`);
            currentElement.style.backgroundColor = color;
            secondElement.style.backgroundColor = color;
            thirdElement.style.backgroundColor = color;
            fourthElement.style.backgroundColor = color;
         }
         break;
         case 5: {
            const currentElement = document.querySelector(`div[value="${event.target.value}"]`);
            const secondElement = document.querySelector(`div[value="${event.target.value+1}"]`);
            const thirdElement = document.querySelector(`div[value="${event.target.value+2}"]`);
            const fourthElement = document.querySelector(`div[value="${event.target.value+3}"]`);
            const fifthElement = document.querySelector(`div[value="${event.target.value+4}"]`);
            currentElement.style.backgroundColor = color;
            secondElement.style.backgroundColor = color;
            thirdElement.style.backgroundColor = color;
            fourthElement.style.backgroundColor = color;
            fifthElement.style.backgroundColor = color;
         }
    }
}

export const renderShips =  (gameboard,length) =>{
    const ship = new Ship(length,0,[1,2,3]);
    gameboard.placeShip(ship);
    const grids = document.querySelectorAll('#primary-container>.grids');
    grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
        
            findElement(ship,e,'blue');
            // element.addEventListener('click',(e)=>{
            //     findElement(ship,e,'yellow');
            //      return;
            // })
            
            
        
    }));
    

 
   grids.forEach(element=>element.addEventListener('click',(e)=>{
    findElement(ship,e,'yellow');
    return;
   }))
    grids.forEach(element=>element.addEventListener('mouseout',(e)=>{
       findElement(ship,e,'black');
    }));     
    
}



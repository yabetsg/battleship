import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";
export const createBoard = (newBoard,id,className)=>{
    const container = document.querySelector(id);
    newBoard.initialize();
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add(className); 
            div.setAttribute('value',e);
            container.appendChild(div);
            div.value = e;
            div.textContent = e;
            
        });
    });

    
}
export const updateBoard = (newBoard,containerID,gridID)=>{
    removeBoard(containerID,gridID);
    const container = document.querySelector(`#${containerID}`);
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add(gridID); 
            div.setAttribute('value',e);
            container.appendChild(div);
            div.value = e;
            div.textContent = e;
            
        });
         
    });

    
}
export const removeBoard = (containerID,gridID)=>{
    const container = document.querySelector(`#${containerID}`);
    const grid = document.querySelectorAll(`.${gridID}`);
    grid.forEach(element=> { 
            
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
             return [event.target.value,event.target.value+1];
            }
             break;
        case 3:{
            const currentElement = document.querySelector(`.player-grids[value="${event.target.value}"]`);
            const secondElement = document.querySelector(`.player-grids[value="${event.target.value+1}"]`);
            const thirdElement = document.querySelector(`.player-grids[value="${event.target.value+2}"]`);
            currentElement.style.backgroundColor = color;
            secondElement.style.backgroundColor = color;
            thirdElement.style.backgroundColor = color;
            return [event.target.value,event.target.value+1,event.target.value+2];
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
            return [event.target.value,event.target.value+1,event.target.value+2,event.target.value+3]
         }
         break;
         case 5: {
            const currentElement = document.querySelector(`.player-grids[value="${event.target.value}"]`);
            const secondElement = document.querySelector(`.player-grids[value="${event.target.value+1}"]`);
            const thirdElement = document.querySelector(`.player-grids[value="${event.target.value+2}"]`);
            const fourthElement = document.querySelector(`.player-grids[value="${event.target.value+3}"]`);
            const fifthElement = document.querySelector(`.player-grids[value="${event.target.value+4}"]`);
            currentElement.style.backgroundColor = color;
            secondElement.style.backgroundColor = color;
            thirdElement.style.backgroundColor = color;
            fourthElement.style.backgroundColor = color;
            fifthElement.style.backgroundColor = color;
            return [event.target.value,event.target.value+1,event.target.value+2,event.target.value+3,event.target.value+4];
         }
    }
}
let flag = true;
export const renderPlayerShips =  (gameboard,length) =>{
    const ship = new Ship(length,0,[1,2,3]);
    if(length===3){
        if(flag){
           length+=1; 
           flag=false;
        } 
    }
    if(length<=0){
        return;
    }
    const grids = document.querySelectorAll('#primary-container>.player-grids');
    grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
        
            findElement(ship,e,'blue');
            element.addEventListener('click',(e)=>{

               ship.position = findElement(ship,e,'yellow');
               ship.column = Math.floor(ship.position[0]/10);
                 gameboard.placeShip(ship);
                 updateBoard(gameboard,'primary-container',"player-grids");
                 renderPlayerShips(gameboard,length-1);
                
            });
    }));
    

    grids.forEach(element=>element.addEventListener('mouseout',(e)=>{
       findElement(ship,e,'black');
    }));     
    
}






export const renderAiShips =  (gameboard) =>{
    const ship = new Ship(5,0,[1,2,3,4,5]);
    const ship2 = new Ship(4,7,[73,74,75,76]);
    const ship3 = new Ship(3,2,[22,23,24]);
    const ship4 = new Ship(3,4,[44,45,46]);
    const ship5 = new Ship(2,9,[91,92]);
    gameboard.placeShip(ship);
    gameboard.placeShip(ship2);
    gameboard.placeShip(ship3);
    gameboard.placeShip(ship4);
    gameboard.placeShip(ship5);
    updateBoard(gameboard,'secondary-container',"ai-grids");
    const grids = document.querySelectorAll('#secondary-container>.ai-grids');
    // grids.forEach(element=>{
        
    // });
    // grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
        
    //         findElement(ship,e,'blue');
    //         element.addEventListener('click',(e)=>{

    //            ship.position = findElement(ship,e,'yellow');
    //            ship.column = Math.floor(ship.position[0]/10);
    //              gameboard.placeShip(ship);
    //              updateBoard(gameboard,'primary-container',"player-grids");
    //              renderPlayerShips(gameboard,length-1);
                
    //         });
    // }));
    

     
    
}



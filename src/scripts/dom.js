import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";


// TODO: Fix vertical ship not working
//TODO: Fix placement of ship in vertical
export const createBoard = (newBoard,id,className,direction)=>{
    const container = document.querySelector(id);
    newBoard.initialize();
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add(className); 
            div.classList.add(direction); 
            div.setAttribute('value',e);
            container.appendChild(div);
            div.value = e;
            div.textContent = e;
            
        });
    });
}
export const updateBoard = (newBoard,containerID,gridID,direction)=>{
    removeBoard(containerID,gridID);
    const container = document.querySelector(`#${containerID}`);
    let board = newBoard.board;
    board.forEach(e=>{
        e.forEach(e=>{
            const div = document.createElement('div');
            div.classList.add(gridID); 
           div.classList.add(direction); 
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
const getCoordinates = (ship,event,color,increment)=>{
    
    let coordinate = [];
    if(ship.length===1){
        return;
    }
    for(let i=0;i<=(ship.length-1)*increment;i=i+increment){ 
        if(document.querySelector(`div[value="${event.target.value+i}"]`)===null){
            return;
        }
        document.querySelector(`div[value="${event.target.value+i}"]`).style.backgroundColor = color;
        coordinate.push(event.target.value+i);
    
       
    }
    return coordinate;
}
const getColumns = (ship)=>{
    let columns = [];
    for(let i = 0; i<=ship.length-1; i++){
        if(ship.position[i]!=null){
             columns.push(Math.floor((ship.position[i])/10));
        }

       
    }
   
    return columns;
}
let flag = true;
 let direction = 'horizontal';
 let increment = 1;
 const rotateButton = document.querySelector('#rotate');
export const renderPlayerShips =  (gameboard,length) =>{
    
   
    let grids = document.querySelectorAll(`#primary-container>.${direction}`);
    console.log(grids[1]);
    
    const ship = new Ship(length,[0,0,0],[1,2,3]);
    if(length===3){
        if(flag){
           length+=1; 
           flag=false;
        } 
    }
    if(length<=0){
        return;
    }
    
    grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
            
            getCoordinates(ship,e,'blue',increment)
              element.addEventListener('click',(e)=>{
               ship.position = getCoordinates(ship,e,'yellow',increment);
               ship.column = getColumns(ship);
                 gameboard.placeShip(ship);
                 updateBoard(gameboard,'primary-container',"player-grids",direction);
                 console.log(gameboard);
                 renderPlayerShips(gameboard,length-1);
                
            });
           
           
          
    }));
    

    grids.forEach(element=>element.addEventListener('mouseout',(e)=>{
        getCoordinates(ship,e,'black',increment);
    }));  
    
   
   
}
 rotateButton.addEventListener('click',(e)=>{
        console.log("before change: "+ direction);
        if(direction ==='horizontal'){
            direction = 'vertical';
            increment = 10;
            
            console.log('inside h');
        }else if(direction ==='vertical'){
            direction = 'horizontal';
            increment = 1;
           
            console.log('inside v');
        }
        
        
    });





export const renderAiShips =  (gameboard) =>{
    const ship = new Ship(5,[0,0,0,0,0],[1,2,3,4,5]);
    const ship2 = new Ship(4,[7,7,7,7],[73,74,75,76]);
    const ship3 = new Ship(3,[2,2,2],[22,23,24]);
    const ship4 = new Ship(3,[4,4,4],[44,45,46]);
    const ship5 = new Ship(2,[8,9],[81,91]);
    
    gameboard.placeShip(ship);
    gameboard.placeShip(ship2);
    gameboard.placeShip(ship3);
    gameboard.placeShip(ship4);
    gameboard.placeShip(ship5);
    updateBoard(gameboard,'secondary-container',"ai-grids");
}



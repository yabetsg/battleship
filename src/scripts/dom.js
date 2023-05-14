import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";


// TODO: Fix vertical ship not working
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
    if(increment >1){
         ship.length = ship.length*10;
    }
    let coordinate = [];
    if(ship.length===1){
        return;
    }
    for(let i=0;i<=ship.length-1;i=i+increment){ 
        document.querySelector(`div[value="${event.target.value+i}"]`).style.backgroundColor = color;
        console.log(event.target.value+i);
        coordinate.push(event.target.value+i);
        // if(document.querySelector(`div[value="${event.target.value+i}"]`)!=null){
       
        // }
       
    }
    return coordinate;
}
const getPositions = (ship)=>{
    
}
let flag = true;
 let direction = 'horizontal';
 let increment = 1;
export const renderPlayerShips =  (gameboard,length) =>{
    
   console.log(direction);
    let grids = document.querySelectorAll(`#primary-container>.${direction}`);
    console.log(grids[1]);
    const rotateButton = document.querySelector('#rotate');
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
             console.log( getCoordinates(ship,e,'blue',increment));
             //getCoordinates(ship,e,'blue',increment);
           
              element.addEventListener('click',(e)=>{
               ship.position = getCoordinates(ship,e,'yellow',increment);
               ship.column = Math.floor(ship.position[0]/10);
                 gameboard.placeShip(ship);
                 updateBoard(gameboard,'primary-container',"player-grids",direction);
                 renderPlayerShips(gameboard,length-1);
                
            });
           
           
          
    }));
    

    grids.forEach(element=>element.addEventListener('mouseout',(e)=>{
        getCoordinates(ship,e,'black',increment);
    }));  
    
    rotateButton.addEventListener('click',(e)=>{
        increment = 10;
        if(direction ==='horizontal'){
            direction = 'vertical';
        }else{
            direction = 'horizontal';
        }
        //direction==='horizontal'?direction='vertical':direction='horizontal';
    //    grids = document.querySelectorAll(`#primary-container>.${direction}`); 
        grids.forEach(element=>{
            element.classList.toggle('horizontal');
            element.classList.toggle('vertical');
        }); 
        
        
    });
   
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
}



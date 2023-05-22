import GameBoard from "../factories/GameBoard";
import { Player } from "../factories/Player";
import Ship from "../factories/Ship";


// TODO: 

export const createBoard = (newBoard,id,className,direction)=>{
    const container = document.querySelector(id);
    
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

const checkIfOutOfBound = (ship,event,increment)=>{
    let outOfBound5 = [6,7,8,9];
     let outOfBound4 = [7,8,9];
     let outOfBound3 = [8,9];
     let outOfBound2 = [9];
    
    if(increment ===1){
        switch(true){ 
             case ship.length===5 && outOfBound5.includes(event.target.value%10):
                 return true;
             case ship.length===4 && outOfBound4.includes(event.target.value%10):
                 return true;
             case ship.length===3 && outOfBound3.includes(event.target.value%10):
                 return true;
             case ship.length===2 && outOfBound2.includes(event.target.value%10):
                 return true;
      } 
     }
     if(increment ===10){
         switch(true){ 
              case ship.length===5 && outOfBound5.includes(Math.floor(event.target.value/10)):
                  return true;
              case ship.length===4 && outOfBound4.includes(Math.floor(event.target.value/10)):
                  return true;
              case ship.length===3 && outOfBound3.includes(Math.floor(event.target.value/10)):
                  return true;
              case ship.length===2 && outOfBound2.includes(Math.floor(event.target.value/10)):
                    return true;
       } 
      }
}
const getCoordinates = (ship,event,color,increment)=>{
  

  let coordinate = [];
  if (ship.length === 1) {
    return;
  }
  for (let i = 0; i <= (ship.length - 1) * increment; i = i + increment) {
     if(checkIfOutOfBound(ship,event,increment)) return;
   
    if (ship.length === 5) {
      if (event.target.value % 10 === 6) {
        return;
      }
    }
    if (event.target.value + i == "x0") {
      return;
    }
    if (
      document.querySelector(`div[value="${event.target.value + i}"]`) === null
    ) {
      return;
    } else if (event.target.value + i == "x0") {
      return;
    }

    document.querySelector(
      `div[value="${event.target.value + i}"]`
    ).style.backgroundColor = color;
    coordinate.push(event.target.value + i);
  }
  return coordinate;
}
const getColumns = (ship)=>{
    let columns = [];
    for(let i = 0; i<=ship.length-1; i++){
        
          if(ship.position[i]){
             columns.push(Math.floor((ship.position[i])/10));
        }  
        
       
    }
  
    return columns;
}
const changeColor = () =>{
    const select = Array.from(document.querySelectorAll('.player-grids'));
    select.filter(element=>element.value==='x').forEach(element=>element.style.backgroundColor = 'transparent');
    
    
}
let flag = true;
 let direction = 'horizontal';
 let increment = 1;
 const rotateButton = document.querySelector('#rotate');

export const renderPlayerShips =   (gameboard,length,aiBoard) =>{
     
    
    
    let grids = document.querySelectorAll(`.player-grids.${direction}`);
    
    
    const ship = new Ship(length,[0,0,0],[1,2,3]);
    
    if(length===3){
        if(flag){
           length+=1; 
           flag=false;
        } 
    }
    if(length<=1){
        
      
       
       renderAttack(gameboard);
      
    
        
        return;
    }
     
    grids.forEach(element=>element.addEventListener('mouseover',(e)=>{
             getCoordinates(ship,e,'blue',increment);
             
              element.addEventListener('click',(e)=>{
               
               console.log(aiBoard);
               ship.position = getCoordinates(ship,e,'gray',increment);
               ship.column = getColumns(ship);
                
                 gameboard.placeShip(ship);
                 updateBoard(gameboard,'primary-container',"player-grids",direction);
                 
                   changeColor();
                  
                 
                renderPlayerShips(gameboard,length-1);
                  
               
                
            });
           
    }));
    

    grids.forEach(element=>element.addEventListener('mouseout',(e)=>{
        getCoordinates(ship,e,'gray',increment);
    }));  
    
   
   
}


export const renderAttack = (playerBoard) =>{
   let aiBoard = new GameBoard();
    let ai;
    let randomlyPickedGrid;
    let gridValue;
    const playerGrids = document.querySelectorAll('.player-grids');
    const aiGrids = document.querySelectorAll('.ai-grids');
   
    
    
        
        aiGrids.forEach(element=>element.addEventListener('click',(e)=>{
              const elementValue = e.target.value;
              
              ai = new Player();
              randomlyPickedGrid = ai.autoPlay(playerGrids);
              gridValue = randomlyPickedGrid.value;
             
            
            if(elementValue === 'x'){
                
                aiBoard.recieveAttack(elementValue);
                checkIfWon(aiBoard);
                element.style.backgroundColor = 'red';
                renderAiAttack(randomlyPickedGrid,gridValue,playerBoard);
                console.log('hits:'+ aiBoard.hits.length);
            }else {
                element.style.backgroundColor = 'green';
                renderAiAttack(randomlyPickedGrid,gridValue,playerBoard);
                
            }
            
        }));
        
        
    
    }
const renderAiAttack = (randomlyPickedGrid,gridValue,playerBoard)=>{
    randomlyPickedGrid.addEventListener('click',(e)=>{
        const elementValue = e.target.value;
        if(gridValue=== 'x'){
            playerBoard.recieveAttack(gridValue);
            checkIfWon(playerBoard);
            randomlyPickedGrid.style.backgroundColor = 'red';
            playerBoard.recieveAttack(elementValue)
           

        }else{
           
             randomlyPickedGrid.style.backgroundColor = 'green';
           
        }
     });
      const event = new Event('click');
     randomlyPickedGrid.dispatchEvent(event);
}

export const renderPlayerAttack = (board)=>{
    const aiGrids = document.querySelectorAll('.ai-grids');
    aiGrids.forEach(element=>element.addEventListener('click',(e)=>{
        if(e.target.value === 'x'){
            board.recieveAttack(e.target.value);
            element.style.backgroundColor = 'red';
        }else {
            element.style.backgroundColor = 'green';
        }
        
    }));
}

 rotateButton.addEventListener('click',(e)=>{
      
        if(direction ==='horizontal'){
            direction = 'vertical';
            increment = 10;
            
            
        }else if(direction ==='vertical'){
            direction = 'horizontal';
            increment = 1;
           
            
        }
        
        
    });


const checkIfWon = (board)=>{
    if(board.hits.length ===17){
        console.log('player won!');
      }
}


export const renderAiShips =  (gameboard) =>{
    const ship = new Ship(5,[0,0,0,0,0],[101,102,103,104,105]);
    const ship2 = new Ship(4,[7,7,7,7],[173,174,175,176]);
    const ship3 = new Ship(3,[2,2,2],[122,123,124]);
    const ship4 = new Ship(3,[4,4,4],[144,145,146]);
    const ship5 = new Ship(2,[8,9],[181,191]);
    
    gameboard.placeShip(ship);
    updateBoard(gameboard,'secondary-container',"ai-grids","horizontal");
    gameboard.placeShip(ship2);
    updateBoard(gameboard,'secondary-container',"ai-grids","horizontal");
    gameboard.placeShip(ship3);
    updateBoard(gameboard,'secondary-container',"ai-grids","horizontal");
    gameboard.placeShip(ship4);
    updateBoard(gameboard,'secondary-container',"ai-grids","horizontal");
    gameboard.placeShip(ship5);
    updateBoard(gameboard,'secondary-container',"ai-grids","horizontal");
    
}




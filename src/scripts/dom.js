import GameBoard from "../factories/GameBoard";
import Ship from "../factories/Ship";


// TODO: Fix ship issue where ship placement overlap

export const createBoard = (newBoard,id,className,direction)=>{
    const container = document.querySelector(id);
    //newBoard.initialize();
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
         
        if(event.target.value+i=='x0'){
           
            return;
        }
        if(document.querySelector(`div[value="${event.target.value+i}"]`)===null){
            return;
        }else if((event.target.value+i)=='x0'){
            
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

export const renderPlayerShips =  (gameboard,length) =>{
    
   
    let grids = document.querySelectorAll(`.player-grids.${direction}`);
    
    
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
             getCoordinates(ship,e,'blue',increment);
              element.addEventListener('click',(e)=>{
              
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

 rotateButton.addEventListener('click',(e)=>{
      
        if(direction ==='horizontal'){
            direction = 'vertical';
            increment = 10;
            
            
        }else if(direction ==='vertical'){
            direction = 'horizontal';
            increment = 1;
           
            
        }
        
        
    });





export const renderAiShips =  (gameboard) =>{
    const ship = new Ship(5,[0,0,0,0,0],[100,102,103,104,105]);
    const ship2 = new Ship(4,[7,7,7,7],[173,174,175,176]);
    const ship3 = new Ship(3,[2,2,2],[122,123,124]);
    const ship4 = new Ship(3,[4,4,4],[144,145,146]);
    const ship5 = new Ship(2,[8,9],[181,191]);
    
    gameboard.placeShip(ship);
    gameboard.placeShip(ship2);
    gameboard.placeShip(ship3);
    gameboard.placeShip(ship4);
    gameboard.placeShip(ship5);
    updateBoard(gameboard,'secondary-container',"ai-grids");
}



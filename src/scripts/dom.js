
export const createBoard = ()=>{
    const container = document.querySelector('#container');
   
    for(let i = 0;i<100;i++){
        const div = document.createElement('div');
        div.classList.add('grids');
        container.appendChild(div);
    }
    
}
createBoard();
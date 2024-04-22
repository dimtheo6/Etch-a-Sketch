const grid = document.querySelector('.grid');
const newGrid = document.querySelector('.btn');
const deleteBtn = document.querySelector('.removeBtn');

function start(){

    newGrid.addEventListener('click', ()=>{
        
        input = prompt('Enter the size of the grid');
        if (input <= 100) {
            
            calc = input * input;
            removeGrid();
            createGrid();
        }else{
            input = prompt('Enter the size of the grid');

        }


        document.querySelectorAll('.cell').forEach((item)=>{
            let mouseOver = function () {
                this.style.background = 'green'
            }
            item.onmouseover = mouseOver;
        })
        
    })


function createGrid(cell){


    for (i=0; i<calc;i++){
        cell = document.createElement('div');
        cell.classList.add('cell'); 
        grid.appendChild(cell);
    }


}

function removeGrid(cell){  
        document.querySelectorAll('.cell').forEach((item)=>{
            item.remove();
        })
    
}

createGrid();


document.querySelectorAll('.cell').forEach((item)=>{
    let mouseOver = function () {
        this.style.background = 'green'
    }
    item.onmouseover = mouseOver;
})


}
start();   
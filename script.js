const grid = document.querySelector('.grid');
const newGrid = document.querySelector('.btn');
const deleteBtn = document.querySelector('.removeBtn');

function start(){

    newGrid.addEventListener('click', ()=>{
          
        input = parseInt(prompt('Enter a number between 1-100'));
        
        if ((input <= 100) && (input>0)) {
            createGrid(input);
        }else{
            alert('Please Enter a valid number between 1-100');

        }

        document.querySelectorAll('.cell').forEach((item)=>{
            let mouseOver = function () {
                this.style.background = 'green'
            }
            item.onmouseover = mouseOver;
        })  
        document.getElementById('blackColor').addEventListener('click',()=>{
            let newOpacity = 0.1;
            document.querySelectorAll('.cell').forEach((item)=>{
                
                let mouseOver = function (){
                    
                    this.style.opacity = newOpacity;
                    newOpacity += 0.1;
                    this.style.background = 'black'
                }
                item.onmouseover = mouseOver;
               
                
            })
        })
        document.getElementById('rainbowBtn').addEventListener('click',()=>{

            document.querySelectorAll('.cell').forEach((item)=>{
                let mouseOver = function (){
                    rainbowColor();
                    this.style.background = rainbow;
                }
                item.onmouseover = mouseOver;
            })

        })

    })

function darkenColor(){
    document.querySelectorAll('.cell').forEach((item)=>{
        let mouseOver = function () {
            let newOpacity = 1;
            
            for (i=0;i<10;i++){
                this.style.opacity = newOpacity;
                newOpacity = newOpacity + 0.1;
                
            }
        }
        item.onmouseover = mouseOver;
    }) 
}

function rainbowColor(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    return rainbow = "rgb("+red+","+green+","+blue+")";
}

function createGrid(size){

    removeGrid();
    const cellSize = calcSize(size);
    const calc = size * size;

    for (i=0; i<calc;i++){
        cell = document.createElement('div');
        cell.classList.add('cell'); 
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
    }
}

function removeGrid(cell){  
        document.querySelectorAll('.cell').forEach((item)=>{
            item.remove();
        })
    
}

function calcSize(size) {
    // Calculate cell size dynamically based on grid size
    const containerWidth = grid.offsetWidth; // Width of the grid container
    const cellMargin = 0; // Adjust as needed
    const totalMargins = (size - 1) * cellMargin; // Total margins between cells
    const availableWidth = containerWidth - totalMargins; // Subtract margin space
    return Math.floor(availableWidth / size);
}

}
start();   
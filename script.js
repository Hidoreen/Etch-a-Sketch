
const container  = document.querySelector('.container');
let currentGridSize = 16;

//create Grid
function getGrid(num){

    container.innerHTML = ''; // Clear existing content
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    currentGridSize = num;


    for(let i = 0; i < num*num; i++){
            const square = document.createElement('div');
            square.className = 'square-grid';
            container.appendChild(square);

            square.addEventListener('mouseover', (e)=>{
                e.target.style.backgroundColor = '#6d4e00';
            })

        }
}

//reset the grid
function resetGrid(){
    const squares = document.querySelectorAll('.square-grid');
    squares.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    });
}

const resetBtn = document.querySelector('.resetbtn');
resetBtn.addEventListener('click', resetGrid);

//clear grid

function clearGrid(){
    container.innerHTML = '';
}


//user create own grid 

function userGrid(){
    const userGridSize = document.getElementById('gridSize');

    let userGridSizeValue = userGridSize.value;


    if(userGridSizeValue < 16 || userGridSizeValue > 100){
        alert('Enter a number between 16 - 100');
    } else {
        clearGrid();
        getGrid(userGridSizeValue);  
    }
}

const createGrid = document.getElementById('userGrid');

createGrid.addEventListener('click', userGrid);
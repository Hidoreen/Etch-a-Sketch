
const container  = document.querySelector('.container');

//create Grid
function getGrid(num){
    for(let i = 0; i < num*num; i++){
            const square = document.createElement('div');
            square.className = 'square-grid';
            container.appendChild(square);

            square.addEventListener('mouseover', (e)=>{
                e.target.style.backgroundColor = '#757575';
            })

        }
}

getGrid(16);

//reset the grid
function resetGrid(){
    const squares = document.querySelectorAll('.square-grid');
    squares.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    });
}

const resetBtn = document.querySelector('.resetbtn');
resetBtn.addEventListener('click', resetGrid);


//user create own grid 
const container = document.querySelector('.grid-container');
var cells = document.querySelectorAll('.cell');
btnClear = document.querySelector('#clearbtn');
makeGrid(16);

btnClear.addEventListener('click', () => {
    cells.forEach(cell =>{
        cell.classList.remove("colored");
    })
    reset();
})

function makeGrid(size){
    cells = document.querySelectorAll('.cell')
    cells.forEach(cell =>{
        cell.remove();
    })

    container.setAttribute('style', 'grid-template-rows: repeat(' + size +', 1fr); grid-template-columns: repeat(' + size +', 1fr);')
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let cell = document.createElement('div');
            container.appendChild(cell).className = 'cell';
        }
    }
    cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            e.target.classList.add("colored");
        });
    });
}

function reset(){
    size = prompt('Set grid size (max 100)')
    size = (size > 100) ? 100 : size
    makeGrid(size)
    cells = document.querySelectorAll('.cell')
}
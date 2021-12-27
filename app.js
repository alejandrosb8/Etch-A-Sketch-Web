const container = document.querySelector('.grid-container')

function makeGrid(size){
    container.setAttribute('style', 'grid-template-rows: repeat(' + size +', 1fr); grid-template-columns: repeat(' + size +', 1fr);')
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let cell = document.createElement('div')
            container.appendChild(cell).className = 'cell'
        }
    }
}

makeGrid(16)

cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseenter', (e) => {
        e.target.className = 'colored'
    });
});
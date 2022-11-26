document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    if (handleMove(event.target.id)) {

        setTimeout(() => {
            if (playerTime == 0) {
                alert(`The end game, the player wins is ${playerOne}`)
            } else {
                alert(`The end game, the player wins is ${playerTwo}`)
            }
        }, 50);
    };
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.qetElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`;
}

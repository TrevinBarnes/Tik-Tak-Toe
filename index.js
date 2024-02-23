console.log("hello");

turns = 0;

const btn = document.querySelector('grid-cell');

btn.addEventListener('click',()=>{
    btn.computedStyleMap.backgroundColor = '#0b061f';
});




/*
document.onclick = clickListener;

function clickListener(#'grid-cell') {
    var clickedElement;
    if(e === 1) {
        clickedElement = X;
    } if(e===2) {
        clickedElement = O;
    }if(e===3){
        clickedElement = '';
    }
    arrayWithElements.push(clickedElement)
    alert(arrayWithElements);
}
*/


function winConditions(player){
    const winPatterns=[
        [0,1,2]
        [3,4,5]
        [6,7,8]

        [0,3,6]
        [1,4,7]
        [2,5,8]

        [0,4,8]
        [2,4,6]

    ]
    return winPatterns.some((pattern) =>{
        return pattern.every((index) =>{
            return $("#TicTacToeGrid .grid-cell").eq(index).text()===player;
        })
    })
}
/*
document.getElementById('restart').addEventListener('click', ()=>{

})


/*

Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

Create a Tic-Tac-Toe game grid using your HTML element of choice.

When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

A heading should say whether it is X's or O's turn and change with each move made.

A button should be available to clear the grid and restart the game.

When a player has won, or the board is full and the game results in a draw, 
a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/

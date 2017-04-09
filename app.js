////////////////////////////
// Define the function that will be run/invoked When
// the DOM is loaded
//////////////////////////
$(document).ready(function() {
    // alert('Dom is loaded')
    console.log("Dom is loaded!");

    // When the DOM is loaded the sign-out button will be hidden from the user's
    // view.
    $('#sign-out').hide()

    // This sets the click handler for all of the td elements on the index.html page.
    $('td').click(playerClick)

    // put a click handler on the reset button
    $('#reset').click(resetGame)
});

/////////////////////////
// Define all the variable that will be used
////////////////////////

// When the page is loaded it will always be the case that player1 wil go first.
let player1 = true // player1 is X, not player1 is O

////////////////////////
// Define all the functions that will be used
///////////////////////

// Within the playerClick function the (event) is when a player clicks on a cell.
const playerClick = function(event) {
    // The event is going to be a click event here
    // because we clicked on a cell, <td> element.

    // event.target is the element/cell that the player clicked on.
    // Note the $( ) around the event.target. This is a jQuery function
    // that will return a variable that jQuery methods can be used with.
    const clickElement = $(event.target)

    // Choose what to do depending if player1, 'X', or player2, 'O'
    if (player1 === true) {
        // If it is player1's turn the background of the element will change
        // to an X.png image which will be resized to fit into the cell.
        clickElement.css('background-image', "url('x.png')")
        clickElement.css('background-size', '150px')
        // put a data attribute, player: 'x', on the cell clicked
        clickElement.data('player', 'x')

        // check for a winner
        if (checkForWinner('x')) {
            alert('Player 1 Won, with Xs')
            // resetGame()
        }
        // Toggle to false to make next click be for player2, 'O'
        player1 = false
    } else {
        // Otherwise it must be player2's turn and the background of the element
        // will change to the O.png image which will be resized to fit into the cell.
        clickElement.css('background-image', "url('O.png')")
        clickElement.css('background-size', '150px')

        // put a data attribute, player: 'o', on the cell clicked
        clickElement.data('player', 'o')

        // check for a winner
        if (checkForWinner('o')) {
            alert('Player 2 Won, with Os')
            // resetGame()
        }

        // Toggle to true to make next click be for player1, 'X'
        player1 = true
    }

} // End of playerClick function.

// player is going to be either 'x' or 'o'
const checkForWinner = function(player) {
    let foundWinner = false

    // If top row is all 'x' or all 'o' we have found the winner.
    if (checkCell('#c0', player) && checkCell('#c1', player) && checkCell('#c2', player)) {
        foundWinner = true
    } else if (checkCell('#c3', player) && checkCell('#c4', player) && checkCell('#c5', player)) {
        // Second row is all 'x' or 'o'
        foundWinner = true
    } else if (checkCell('#c6', player) && checkCell('#c7', player) && checkCell('#c8', player)) {
        // Third row.
        foundWinner = true
    } else if (checkCell('#c0', player) && checkCell('#c3', player) && checkCell('#c6', player)) {
        // First columns
        foundWinner = true
    } else if (checkCell('#c1', player) && checkCell('#c4', player) && checkCell('#c7', player)) {
        // Second columns
        foundWinner = true
    } else if (checkCell('#c2', player) && checkCell('#c5', player) && checkCell('#c8', player)) {
        // Third columns
        foundWinner = true
    } else if (checkCell('#c0', player) && checkCell('#c4', player) && checkCell('#c8', player)) {
        // First diagonal top left corner cell(c0) middle cell(c4) and bottom right corner cell (c8)
        foundWinner = true
    } else if (checkCell('#c6', player) && checkCell('#c4', player) && checkCell('#c2', player)) {
        foundWinner = true
        // Second diagonal bottom left corner cell(c6) middle cell(c4) and top right corner cell(c2)
        console.log('whats happening')
    }
    return foundWinner

}

// Given an element/cell id and a player we will:
// Check that it has a player data attribute,  $(id).data.player.
// And that this player attribute is either 'x' or 'o', $(id).data.player == player
const checkCell = function(id, player) {
    // if you do have a player attribute AND it's value is 'x'/'o' return true
    return $(id).data().player && $(id).data().player === player
}

const resetGame = function() {
    // $('td').removeProp('background-image')
    //$('td').removeProp('background-size')

    // For each cell, <td>.
    $('td').each(function() {
        // reset the background image
        $(this).css('background-image', '')
        // reset the background size
        $(this).css('background-size', '')
        // reset the player data property/attribute
        $(this).data('player', '')

        // Start wth player1, 'X', next click in game.
        player1 = true
    })

}

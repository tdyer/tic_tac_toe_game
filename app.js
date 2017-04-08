$(document).ready(function() {
    alert('Dom is loaded')
    console.log("ready!");
    // When the DOM is loaded the sign-out button will be hidden from the user's
    // view.
    $('#sign-out').hide()
    // When the page is loaded it will always be the case that player1 wil go first.
    let player1 = true
    // Within the playerClick function the (event) is when a player clicks on a cell.
    const playerClick = function(event) {
        // event.target is the element/cell that the player clicked on.
        const clickElement = $(event.target)
        // If it is player1's turn the background of the element will change
        // to an X.png image which will be resized to fit into the cell.
        if (player1 === true) {
            clickElement.css('background-image', "url('x.png')")
            clickElement.css('background-size','150px')
            player1 = false
        } else {
            // Otherwise it must be player2's turn and the background of the element
            // will change to the O.png image which will be resized to fit into the cell.
            clickElement.css('background-image', "url('O.png')")
            clickElement.css('background-size', '150px')
            player1 = true
        }

    } // End of playerClick function.
    $('td').click(playerClick)
    // This sets the click handler for all of the td elements on the index.html page.
});

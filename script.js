// Rolls the dice by generating random numbers and updating the dice displays
function rollDice() {
    // Generate random numbers between 1 and 6 for each dice
    let diceValues = [];
    for (let i = 1; i <= 5; i++) {
        diceValues.push(Math.floor(Math.random() * 6) + 1);
    }

    // Update the dice display with the generated values
    for (let i = 0; i < diceValues.length; i++) {
        document.getElementById('dice' + (i + 1)).textContent = diceValues[i];
    }
}

// Automatically rolls the dice when the page is loaded
function autoRoll() {
    rollDice();
}

// Automatically focus the "Roll Dice" button when the page is loaded
window.onload = function() {
    document.getElementById('rollButton').focus();
};

// Allow the enter key to trigger the rollDice function
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        rollDice();
    }
});

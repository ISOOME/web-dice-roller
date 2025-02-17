// Update "dice" with generated random numbers
function rollDice() {
    // Generate randoms between 1 and 6 
    let diceValues = [];
    for (let i = 1; i <= 5; i++) {
        diceValues.push(Math.floor(Math.random() * 6) + 1);
    }

    // Update with the generated values
    for (let i = 0; i < diceValues.length; i++) {
        document.getElementById('dice' + (i + 1)).textContent = diceValues[i];
    }
}

// Rolls the dice when page is first loaded
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

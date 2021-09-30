// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "David Barge" // HINT: Replace this with your own name!



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons


//These are the buttons for Ginger
let addGB = document.querySelector('#add-gb')
let minusGB = document.querySelector('#minus-gb')
//These are the buttons for Chocolate Chip
let addCC = document.querySelector('#add-cc')
let minusCC = document.querySelector('#minus-cc')
//These are the buttons for Sugar Sprinkle
let addSugar = document.querySelector('#add-sugar')
let minusSugar = document.querySelector('#minus-sugar')


let gb = 0;
let cc = 0;
let sugar = 0;

let gbCell = document.querySelector('#qty-gb')
let ccCell = document.querySelector('#qty-cc')
let sugarCell = document.querySelector('#qty-sugar')
let totalCell = document.querySelector('#qty-total')


addGB.addEventListener('click', function(){
    gb = gb +1;
    gbCell.textContent = gb
    totalCell.textContent = sugar + cc + gb
})

minusGB.addEventListener('click', function(){
    gb = gb -1;
    gbCell.textContent = gb
    totalCell.textContent = sugar + cc + gb
})


addCC.addEventListener('click', function(){
    cc = cc +1;
    ccCell.textContent = cc
    totalCell.textContent = sugar + cc + gb
})

minusCC.addEventListener('click', function(){
    cc = cc -1;
    ccCell.textContent = cc
    totalCell.textContent = sugar + cc + gb
})

addSugar.addEventListener('click', function(){
    sugar = sugar +1;
    sugarCell.textContent = sugar
    totalCell.textContent = sugar + cc + gb
})

minusSugar.addEventListener('click', function(){
    sugar = sugar -1;
    sugarCell.textContent = sugar
    totalCell.textContent = sugar + cc + gb
})
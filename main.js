const readline = require('readline-sync')
const name = readline.question('What is you name?')
console.log( `Welcome to the Escape room ${name}, find the Key to escape!`)
var isAlive = true
var hasKey = false

while(isAlive){
    let playerChoice = readline.keyIn(`Would  you like to [a] Open the door, [b] find the key, or [c] check inside the hole?`, {limit: 'abc'})
    if(playerChoice === 'a'){
        if(hasKey){
            console.log(`You opened the door and won the game! Congratulations ${name}!`)
            isAlive = false
        }else{
            console.log(`The door is locked, try and find the key!`)
        }
    }else if(playerChoice === 'b'){
        console.log('You found the key')
        hasKey= true

    }else {
        console.log('You put your hand in the hole and were bitten by a spider. You died. Game over')
        isAlive = false
    }

}
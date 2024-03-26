var heldDice = [false,false,false,false,false]

var rollsLeft = 3;

const dicesValue = [die1,die2,die3,die4,die5]



function rollDice(){
var die1;
var die2;
var die3;
var die4;
var die5;

if(!heldDice [0])var die1 = Math.floor(Math.random() * 6) +1;
if(!heldDice [1])var die2 = Math.floor(Math.random() * 6) +1;
if(!heldDice [2])var die3 = Math.floor(Math.random() * 6) +1;
if(!heldDice [3])var die4 = Math.floor(Math.random() * 6) +1;
if(!heldDice [4])var die5 = Math.floor(Math.random() * 6) +1;


document.getElementById("dice1").src = `dice ${die1}.png`;
document.getElementById("dice2").src = `dice ${die2}.png`;
document.getElementById("dice3").src = `dice ${die3}.png`;
document.getElementById("dice4").src = `dice ${die4}.png`;
document.getElementById("dice5").src = `dice ${die5}.png`;
if (rollsLeft === 0) {
    alert("No more rolls left!");
    return;
  }

  rollsLeft--;
  document.getElementById("rollsLeft").innerHTML = rollsLeft; 


}
function holdDie(dieNum, rondik) {
heldDice[dieNum - 1] = !heldDice[dieNum - 1];

die1.innerHTML = diceOne;
die2.innerHTML = diceTwo;
die3.innerHTML = diceThree;
die4.innerHTML = diceFour;
die5.innerHTML = diceFive;
}



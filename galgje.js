let wordToGuess = prompt('Schrijf hier je woord'); 

const letters = wordToGuess.split('');
console.log(letters);
let letterGuessed = letters;
let letterToGuess = prompt('Raad de letter');



 while(running){
    let letterGuessed = prompt("raad een letter");
 

if(letters.includes(letterToGuess))
{
    console.log("goed gedaan")
    prompt("wat is de volgende dan?")
}
else
{
    console.log("ben je dom of doe je dom?")
    prompt("Helaas moet je nu een andere gaan raden")
}
 }

 function letterInWord(letter){
    return word.includes(letter);
 }
let rollenOver = 3;
let vasgehoudenDobbelsteen = [false, false, false, false, false];


let DobbelsteenWaardes = [0, 0, 0, 0, 0];

var totalScoreSpeler1 = 0;
var totalScoreSpeler2 = 0;

let telEnenSpeler1 = 0;
let telTweeënSpeler1 = 0;
let telDrieënSpeler1 = 0;
let telVierenSpeler1 = 0;
let telVijvenSpeler1 = 0;
let telZessenSpeler1 = 0;

let telEnenSpeler2 = 0;
let telTweeënSpeler2 = 0;
let telDrieënSpeler2 = 0;
let telVierenSpeler2 = 0;
let telVijvenSpeler2 = 0;
let sixesCountSpeler2 = 0;

var threeOfAKindTotalSpeler1 = 0;
var fourOfAKindTotalSpeler1 = 0;
var fullHouseTotalSpeler1 = 0;
var largeStraightTotalSpeler1 = 0
var smallStraightTotalSpeler1 = 0
var yahtzeeScoreSpeler1 = 0;

var threeOfAKindTotalSpeler2 = 0;
var fourOfAKindTotalSpeler2 = 0;
var fullHouseTotalSpeler2 = 0;
var largeStraightTotalSpeler2 = 0
var smallStraightTotalSpeler2 = 0
var yahtzeeScoreSpeler2 = 0;

function rolDobbelsteen() {
  if (rollenOver === 0) {
    alert("GEEN WEG NAAR LINKS!");
    return;
  }

  for (let i = 0; i < vasgehoudenDobbelsteen.length; i++) {
    if (!vasgehoudenDobbelsteen[i]) {
      //Gooi alleen als de dobbelsteen niet vastgehouden wordt
      DobbelsteenWaardes[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  
  for (let i = 0; i < DobbelsteenWaardes.length; i++) {
    document.getElementById("dobbelsteen" + (i + 1)).src = "images/dice " + DobbelsteenWaardes[i] + ".png";
  }

  rollenOver--;
  document.getElementById("rollenOver").textContent = rollenOver;


  updateScore();
}

function houVastDobbelsteen(dieNum) {
  vasgehoudenDobbelsteen[dieNum - 1] = !vasgehoudenDobbelsteen[dieNum - 1];
}

// Voorbeeld van het bijwerken van de score op basis van dobbelstenenwaarden
function updateScore() {
  let totalScore = 0;
  for (let i = 0; i < DobbelsteenWaardes.length; i++) {
    totalScore += DobbelsteenWaardes[i];
  }
  document.getElementById("total").textContent = "Total Score: " + totalScore;
}

// Voorbeeld van het filteren van dobbelsteenwaarden om die te vinden
function selecteerEnenSpeler1() {
  telEnenSpeler1 = DobbelsteenWaardes.filter(value => value === 1).length;
  console.log("nummer of ones: " + telEnenSpeler1);
  document.getElementById("enenSpeler1").textContent = telEnenSpeler1; 
  return telEnenSpeler1;
  // U kunt de HTML-elementen bijwerken om indien nodig het aantal elementen weer te geven
}
function selecteerEnenSpeler2() {
  telEnenSpeler2 = DobbelsteenWaardes.filter(value => value === 1).length;
  document.getElementById("enenSpeler2").textContent = telEnenSpeler2; 
  console.log("nummer een: " + telEnenSpeler2);
}
function selecteerTweeënSpeler1() {
  telTweeënSpeler1 = DobbelsteenWaardes.filter(value => value === 2).length;
  document.getElementById("tweeënSpeler1").textContent = telTweeënSpeler1 * 2; 
  console.log("nummers van twee: " + telTweeënSpeler1);
}
function selecteerTweeënSpeler2() {
  telTweeënSpeler2 = DobbelsteenWaardes.filter(value => value === 2).length;
  document.getElementById("tweeënSpeler2").textContent = telTweeënSpeler2 * 2; 
  console.log("nummers van Twee: " + telTweeënSpeler2);
}
function selecteerDrieënSpeler1() {
  telDrieënSpeler1 = DobbelsteenWaardes.filter(value => value === 3).length;
  document.getElementById("drieënSpeler1").textContent = telDrieënSpeler1 * 3; 
  console.log("nummers van drie: " + telDrieënSpeler1);
}
function selecteerDrieënSpeler2() {
  telDrieënSpeler2 = DobbelsteenWaardes.filter(value => value === 3).length;
  document.getElementById("drieënSpeler2").textContent = telDrieënSpeler2 * 3; 
  console.log("nummers van drie: " + telDrieënSpeler2);
}
function selecteerVierenSpeler1() {
  telVierenSpeler1 = DobbelsteenWaardes.filter(value => value === 4).length;
  document.getElementById("vierenSpeler1").textContent = telVierenSpeler1 * 4; 
  console.log("nummers van vier : " + telVierenSpeler1);
}
function selecteerVierenSpeler2() {
  telVierenSpeler2 = DobbelsteenWaardes.filter(value => value === 4).length;
  document.getElementById("vierenSpeler2").textContent = telVierenSpeler2 * 4; 
  console.log("nummers van vier: " + telVierenSpeler2);
}
function selecteerVijvenSpeler1() {
  telVijvenSpeler1 = DobbelsteenWaardes.filter(value => value === 5).length;
  document.getElementById("vijvenSpeler1").textContent = telVijvenSpeler1 * 5;
  console.log("nummers van vijf: " + telVijvenSpeler1);
}
function selecteerVijvenSpeler2() {
  telVijvenSpeler2 = DobbelsteenWaardes.filter(value => value === 5).length;
  document.getElementById("vijvenSpeler2").textContent = telVijvenSpeler2 * 5;
  console.log("nummers van vijf : " + telVijvenSpeler2);
}
function selecteerZessenSpeler1() {
  telZessenSpeler1 = DobbelsteenWaardes.filter(value => value === 6).length;
  document.getElementById("zessenSpeler1").textContent = telZessenSpeler1 * 6;
  console.log("nummers van zes: " + telZessenSpeler1);
}
function selecteerZessenSpeler2() {
  sixesCountSpeler2 = DobbelsteenWaardes.filter(value => value === 6).length;
  document.getElementById("zessenSpeler2").textContent = sixesCountSpeler2 * 6;
  console.log("nummers van zes: " + sixesCountSpeler2);
}

function wisselSpeler(){
  rollenOver = 3;
  document.getElementById("rollenOver").textContent = 3;
  for (let i = 0; i < DobbelsteenWaardes.length; i++){
  document.getElementById("dobbelsteen" + (i + 1)).src = "images/dice 1.png";
  }
  vasgehoudenDobbelsteen = [false, false, false, false, false];
}

function threeOfAKindSpeler1() {

  const counts = Array.from({ length: 6 }, () => 0);


  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++;
  }


  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      // Als een nummer 3 keer voorkomt, bereken de som van alle worpwaardes en toon deze
      threeOfAKindTotalSpeler1 = DobbelsteenWaardes[0] + DobbelsteenWaardes[1] + DobbelsteenWaardes[2] + DobbelsteenWaardes[3] + DobbelsteenWaardes[4];
      document.getElementById("threeOfaKindSpeler1").textContent = threeOfAKindTotalSpeler1;

      // Retourneer true om aan te geven dat er een three of a kind is gevonden
      return true;
    }
  }

  // Als er geen nummer 3 keer voorkomt, toon "Geen Three of a Kind" en retourneer false
  document.getElementById("threeOfaKindSpeler1").textContent = "Geen Three of a Kind";
  return false;
}

function threeOfAKindSpeler2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 3) {
      threeOfAKindTotalSpeler2 = DobbelsteenWaardes[0] + DobbelsteenWaardes[1] + DobbelsteenWaardes[2] + DobbelsteenWaardes[3] + DobbelsteenWaardes[4];
      document.getElementById("threeOfaKindSpeler2").textContent = threeOfAKindTotalSpeler2;
      return true;
    }
  }
  document.getElementById("threeOfaKindSpeler2").textContent = "No Three of a Kind!";
  return false;
}

function fourOfAKindSpeler1() {
  
  const counts = Array.from({ length: 6 }, () => 0); // Array om het voorkomen van elk nummer te tellen
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++; // Verhoog het aantal voor het overeenkomstige nummer
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      fourOfAKindTotalSpeler1 = DobbelsteenWaardes[0] + DobbelsteenWaardes[1] + DobbelsteenWaardes[2] + DobbelsteenWaardes[3] + DobbelsteenWaardes[4];
      document.getElementById("fourOfaKindSpeler1").textContent = fourOfAKindTotalSpeler1;
      return true; // Vier dezelfde gevonden
    }
  }
  document.getElementById("fourOfaKindSpeler1").textContent = " Geen vier van dezelfde soort!";
  // document.getElementById("fourOfaKind").textContent = "Geen vier van dezelfde soort";
  return false; // Geen vier van dezelfde soort
}
function fourOfAKindSpeler2() {
  const counts = Array.from({ length: 6 }, () => 0);
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++;
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] == 4) {
      fourOfAKindTotalSpeler2 = DobbelsteenWaardes[0] + DobbelsteenWaardes[1] + DobbelsteenWaardes[2] + DobbelsteenWaardes[3] + DobbelsteenWaardes[4];
      document.getElementById("fourOfaKindSpeler2").textContent = fourOfAKindTotalSpeler2;
      return true;
    }
  }
  document.getElementById("fourOfaKindSpeler2").textContent = " Geen vier van dezelfde soort!";
  // document.getElementById("fourOfaKind").textContent = "Geen vier van dezelfde soort";
  return false; // Geen vier van dezelfde soort
}


function fullHouseSpeler1() {
  const counts = Array.from({ length: 6 }, () => 0); // Array om het voorkomen van elk nummer te tellen
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++; // Verhoog het aantal voor het overeenkomstige nummer
  }
  let heeftDrie = false;
  let heeftTwee = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      heeftDrie = true;
    } else if (counts[i] === 2) {
      heeftTwee = true;
    }
  }
  if (heeftDrie && heeftTwee) {
    fullHouseTotalSpeler1 = 25;
    document.getElementById("fullHouseSpeler1").textContent = fullHouseTotalSpeler1;
    return true; // een vol huis gevonden
  } else {
    document.getElementById("fullHouseSpeler1").textContent = "geen volle huis";
    return false; // geen volle huis 
  }
}
function fullHouseSpeler2() {
  const counts = Array.from({ length: 6 }, () => 0); // Array om het voorkomen van elk nummer te tellen
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++; // Verhoog het aantal voor het overeenkomstige nummer
  }
  let heeftDrie = false;
  let heeftTwee = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      heeftDrie = true;
    } else if (counts[i] === 2) {
      heeftTwee = true;
    }
  }
  if (heeftDrie && heeftTwee) {
    fullHouseTotalSpeler2 = 25;
    document.getElementById("fullHouseSpeler2").textContent = fullHouseTotalSpeler2;
    return true; // een vol huis gevonden
  } else {
    document.getElementById("fullHouseSpeler2").textContent = "geen volle huis";
    return false; // geen volle huis
  }
}


function largeStraightSpeler1() {
  const gesorteerdeDobbelsteenWaarde = DobbelsteenWaardes.slice().sort((a, b) => a - b);
  for (let i = 0; i < gesorteerdeDobbelsteenWaarde.length - 1; i++) {
    if (gesorteerdeDobbelsteenWaarde[i] + 1 !== gesorteerdeDobbelsteenWaarde[i + 1]) {
      document.getElementById("largeStraightSpeler1").textContent = "Geen grote rechte lijn";
      return false; // Geen grote rechte lijn
    }
  }
  largeStraightTotalSpeler1 = 40;
  document.getElementById("largeStraightSpeler1").textContent = largeStraightTotalSpeler1;
  return true; // Ik heb een groot recht stuk gevonden
}

function largeStraightSpeler2() {
  const gesorteerdeDobbelsteenWaarde = DobbelsteenWaardes.slice().sort((a, b) => a - b);
  for (let i = 0; i < gesorteerdeDobbelsteenWaarde.length - 1; i++) {
    if (gesorteerdeDobbelsteenWaarde[i] + 1 !== gesorteerdeDobbelsteenWaarde[i + 1]) {
      document.getElementById("largeStraightSpeler2").textContent = "Geen grote rechte lijn";
      return false; // Geen grote rechte lijn
    }
  }
  largeStraightTotalSpeler2 = 40;
  document.getElementById("largeStraightSpeler2").textContent = largeStraightTotalSpeler2;
  return true; // Ik heb een groot recht stuk gevonden
}

function smallStraightSpeler1() {
  const gesorteerdeDobbelsteenWaarde = DobbelsteenWaardes.slice().sort((a, b) => a - b);
  for (let i = 0; i < gesorteerdeDobbelsteenWaarde.length - 2; i++) {
    if (gesorteerdeDobbelsteenWaarde[i] + 1 === gesorteerdeDobbelsteenWaarde[i + 1] &&
        gesorteerdeDobbelsteenWaarde[i + 1] + 1 === gesorteerdeDobbelsteenWaarde[i + 2]) {
        smallStraightTotalSpeler1 = 30;
      document.getElementById("smallStraightSpeler1").textContent = smallStraightTotalSpeler1;
      return true; //Ik heb een klein recht stuk gevonden
    }
  }
  document.getElementById("smallStraightSpeler1").textContent = "Geen kleine rechte lijn";
  return false; // Geen klein recht stuk

}
function smallStraightSpeler2() {
  const gesorteerdeDobbelsteenWaarde = DobbelsteenWaardes.slice().sort((a, b) => a - b);
  for (let i = 0; i < gesorteerdeDobbelsteenWaarde.length - 2; i++) {
    if (gesorteerdeDobbelsteenWaarde[i] + 1 === gesorteerdeDobbelsteenWaarde[i + 1] &&
        gesorteerdeDobbelsteenWaarde[i + 1] + 1 === gesorteerdeDobbelsteenWaarde[i + 2]) {
          smallStraightTotalSpeler2 = 30;
          document.getElementById("smallStraightSpeler2").textContent = smallStraightTotalSpeler2;
      return true; 
    }
  }
  document.getElementById("smallStraightSpeler2").textContent = "Geen kleine rechte lijn";
  return false; 
}

function yahtzeeSpeler1() {
  const counts = Array.from({ length: 6 }, () => 0); // Array om het voorkomen van elk nummer te tellen
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++; // Verhoog het aantal voor het overeenkomstige nummer
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      yahtzeeScoreSpeler1 = 50;
      document.getElementById("yahtzeeSpeler1").textContent = yahtzeeScoreSpeler1;
      return true; 
    }
  }
  document.getElementById("yahtzeeSpeler1").textContent = "geen Yahtzee";
  return false; 
}
}
function yahtzeeSpeler2() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of DobbelsteenWaardes) {
    counts[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      yahtzeeScoreSpeler2 = 50;
      document.getElementById("yahtzeeSpeler2").textContent = yahtzeeScoreSpeler2;
      return true; 
    }
  }
  document.getElementById("yahtzeeSpeler2").textContent = "geen Yahtzee";
  return false; 
}

function totaalSpeler1(){
  totalScoreSpeler1 = (telEnenSpeler1 * 1) + (telTweeënSpeler1 * 2) + (telDrieënSpeler1 * 3) + (telVierenSpeler1 * 4) + (telVijvenSpeler1 * 5) + (telZessenSpeler1 * 6 + threeOfAKindTotalSpeler1 + fourOfAKindTotalSpeler1 + yahtzeeScoreSpeler1 + fullHouseTotalSpeler1 + smallStraightTotalSpeler1 + largeStraightTotalSpeler1);
  document.getElementById("totaalSpeler1").textContent = totalScoreSpeler1;
}

function totaalSpeler2(){
  totalScoreSpeler2 = (telEnenSpeler2 * 1) + (telTweeënSpeler2 * 2) + (telDrieënSpeler2 * 3) + (telVierenSpeler2 * 4) + (telVijvenSpeler2 * 5) + (sixesCountSpeler2 * 6 + threeOfAKindTotalSpeler2 + fourOfAKindTotalSpeler2 + yahtzeeScoreSpeler2 + fullHouseTotalSpeler2 + smallStraightTotalSpeler2 + largeStraightTotalSpeler2);
  document.getElementById("totaalSpeler2").textContent = totalScoreSpeler2;
}
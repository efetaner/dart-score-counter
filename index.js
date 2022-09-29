//eğer double seçiliyle 2x value triple seçiliyse 3x value else x value
//her rakam seçimi sonrası single tekrar aktif olacak
//

document.getElementById("s1").addEventListener("click", valueOne);
document.getElementById("s2").addEventListener("click", valueTwo);
document.getElementById("s3").addEventListener("click", valueThree);
document.getElementById("s4").addEventListener("click", valueFour);
document.getElementById("s5").addEventListener("click", valueFive);
document.getElementById("s6").addEventListener("click", valueSix);
document.getElementById("s7").addEventListener("click", valueSeven);
document.getElementById("s8").addEventListener("click", valueEight);
document.getElementById("s9").addEventListener("click", valueNine);
document.getElementById("s10").addEventListener("click", valueTen);
document.getElementById("s11").addEventListener("click", valueEleven);
document.getElementById("s12").addEventListener("click", valueTwelve);
document.getElementById("s13").addEventListener("click", valueThirteen);
document.getElementById("s14").addEventListener("click", valueFourteen);
document.getElementById("s15").addEventListener("click", valueFifteen);
document.getElementById("s16").addEventListener("click", valueSixteen);
document.getElementById("s17").addEventListener("click", valueSeventeen);
document.getElementById("s18").addEventListener("click", valueEighteen);
document.getElementById("s19").addEventListener("click", valueNineteen);
document.getElementById("s20").addEventListener("click", valueTwenty);
document.getElementById("s25").addEventListener("click", valueTwentyfive);
document.getElementById("double").addEventListener("click", doubleVal);
document.getElementById("triple").addEventListener("click", tripleVal);
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("reset-select").addEventListener("click", resetSelect);
document.getElementById("submit-one").addEventListener("click", submitValP1);
document.getElementById("submit-two").addEventListener("click", submitValP2);
const p1Table = document.getElementById("p1-table")
const p1TotalScore = document.getElementById("p1-total-score")
const p2Table = document.getElementById("p2-table")
const p2TotalScore = document.getElementById("p2-total-score")
let value = 0


document.querySelector("#game-type-selector").onchange = function (e) {
  totalP1 = this.value;
  totalP2 = this.value;
  p1Table.innerHTML = `<li>DART 1</li> <li>DART 2</li> <li>DART 3</li>`
  p2Table.innerHTML = `<li>DART 1</li> <li>DART 2</li> <li>DART 3</li>`
  p1TotalScore.innerHTML = `Score: ${totalP1}`;
  p2TotalScore.innerHTML = `Score: ${totalP2}`;
}

// Every button has a value.

function valueOne(){
  value = 1
}

function valueTwo(){
  value = 2
}

function valueThree(){
  value = 3
}

function valueFour(){
  value = 4
}

function valueFive(){
  value = 5
}

function valueSix(){
  value = 6
}

function valueSeven(){
  value = 7
}

function valueEight(){
  value = 8
}

function valueNine(){
  value = 9
}

function valueTen(){
  value = 10
}

function valueEleven(){
  value = 11
}

function valueTwelve(){
  value = 12
}

function valueThirteen(){
  value = 13
}

function valueFourteen(){
  value = 14
}

function valueFifteen(){
  value = 15
}

function valueSixteen(){
  value = 16
}

function valueSeventeen(){
  value = 17
}

function valueEighteen(){
  value = 18
}

function valueNineteen(){
  value = 19
}

function valueTwenty(){
  value = 20
}

function valueTwentyfive(){
  value = 25
}

function doubleVal(){
  value = value*2
}

function tripleVal(){
  value = value*3
}

function resetSelect(){
  value = 0
}

function resetGame(){
  value = 0
  totalP2 = 101
  totalP1 = 101
  p1Table.innerHTML = `<li>DART 1</li> <li>DART 2</li> <li>DART 3</li>`
  p2Table.innerHTML = `<li>DART 1</li> <li>DART 2</li> <li>DART 3</li>`
  p1TotalScore.innerHTML = ``
  p2TotalScore.innerHTML = ``
}

function submitValP1(){
  p1Table.innerHTML += `<li> ${value} </li>`
  totalP1 = totalP1 - value
  p1TotalScore.innerHTML = `Score: ${totalP1}`
  value = 0
}

function submitValP2(){
  p2Table.innerHTML += `<li> ${value} </li>`
  totalP2 = totalP2 - value
  p2TotalScore.innerHTML = `Score: ${totalP2}`
  value = 0
}

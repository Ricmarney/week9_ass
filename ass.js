let newHeading = document.querySelector(".homeheading");
// ------------------------------------------------------------------------------------
// LEFT PART
// ------------------------------------------------------------------------------------------
let leftIncrease1 = document.querySelector("#lbtn1");
let determinant = 0;

function increaseL1() {
  determinant++;
  newHeading.innerText = determinant;
}
leftIncrease1.addEventListener("click", increaseL1);

let leftIncrease2 = document.querySelector("#lbtn2");

function increaseL2() {
  determinant += 2;
  newHeading.innerText = determinant;
}
leftIncrease2.addEventListener("click", increaseL2);

let leftIncrease3 = document.querySelector("#lbtn3");
function increaseL3() {
  determinant += 3;
  newHeading.innerText = determinant;
}
leftIncrease3.addEventListener("click", increaseL3);

// ---------------------------------------------------------------------------------------------------
// RIGHT PART
// --------------------------------------------------------------------------------------------------
let newHeading2 = document.querySelector(".guestheading");
let rightIncrease1 = document.querySelector("#rbtn1");
let determinant2 = 0

function increaseR1() {
  determinant2++;
  newHeading2.innerText = determinant2;
}
rightIncrease1.addEventListener("click", increaseR1);

let rightIncrease2 = document.querySelector("#rbtn2");
function increaseR2() {
  determinant2 += 2;
  newHeading2.innerText = determinant2;
}
rightIncrease2.addEventListener("click", increaseR2);

let rightIncrease3 = document.querySelector("#rbtn3");
function increaseR3() {
  determinant2 += 3;
  newHeading2.innerText = determinant2;
}
rightIncrease3.addEventListener("click", increaseR3);


////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

lovesCode = true;

if (lovesCode){
  console.log("I love to code");
}
else{
  console.log("Coding has its challenges");
}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (amysAge > brittanisAge){
  console.log("Amy is older");
}
else if (brittanisAge > amysAge){
  console.log("Brittani is older");
}
else {
  console.log("They are the same age");
}


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if (amysBirthYear == brittanisBirthYear){
  console.log("Amy & Brittani were born in the same year");
}
else {
  console.log("Amy & Brittani were not born in the same year");
}


////////// PROBLEM 4 //////////

let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if (temperature >= 80 && rain){
  console.log("You should wear a t-shirt but bring an umbrella");
}
else if (temperature >= 60 && temperature <= 80 && rain){
  console.log("You should wear a rain-jacket");
}
else if (temperature <= 60 && rain){
  console.log("You should wear a jacket and bring an umbrella");
}
else if (temperature >= 80 && !rain){
  console.log("You should wear a tank top");
}
else if (temperature >= 60 && temperature <= 80 && !rain){
  console.log("You should wear a sweater");
}
else if (temperature <= 60 && !rain){
  console.log("You should wear a heavy jacket");
}


////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for (let i = 0; i <= 10; i++){
  console.log("Hello");
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

let num = 0;
for (let i = 0; i <= 9; i++){
  num += 1;
  console.log(num);
}


////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

let numRev = 11;
for (let i = 0; i <= 9; i++){
  numRev -= 1;
  console.log(numRev);
}

let score = 0
let passingScore = 7

////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while (score < passingScore){
  console.log("Your score is not high enough");
  score += 1;
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true;

if (changeMyMind){
  changeMyMind = false;
}
else{
  changeMyMind = true;
}

////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

if (!changeMyMind){
  changeMyMind = true;
  console.log(changeMyMind);
}
else{
  changeMyMind = false;
  console.log(changeMyMind);
}




////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

let i = 0
let num3 = z;
while (z > 0){
  console.log(num3);
  num3 -= 1;
  i += 1;
  if (i == z){
    z -= 1;
    i = 0;
    num3 = z;
  }
}
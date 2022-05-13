

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// this method returns an array from any iterable object. and also returns  an arrray from any object with a lenght propertie
// the arrow function works as a shorter funcion 
const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const arrayNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const arraySpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

function generatePassword() {
  var results = "";
    var numberOfCharacters = window.prompt ("This is a password generators, How many characters would you like your password to contain");
    var numOfChar = parseInt(numberOfCharacters);
    if(numOfChar >= 8 && numOfChar <= 128) {
      var lowerCase = window.confirm("click OK to confirm lowercase letter."); 
      var upperCase = window.confirm("Click OK to confirm uppercase letter.");
      var numbers = window.confirm("Click OK to confirm numeric values");
      var specialCharacters = window.confirm("Click OK to confirm special characters");
    // if statemts promt the user with following questions and loop
    var followQuestion = []; 
    if(upperCase === true) followQuestion.push(alphabetUpper);
    if(lowerCase === true) followQuestion.push(alphabetLower);
    if(numbers === true) followQuestion.push(arrayNumeric);
    if(specialCharacters === true) followQuestion.push(arraySpecialCharacters);
    

//  loop through the arrays 



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
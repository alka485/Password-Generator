// storing all needed chracters in variables
var dataUppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var dataLowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var dataNumbers   = "0123456789".split("");
var dataSymbols   = "`~!@#$%^&*()-_=+[]{}|':;?/.,".split('');

// Generate Password

function generatePassword(){
  // Prompt the User for their 'password length' and
  // store it in variable
  //validate the paasword length and make sure it's number between
  //or equal to 8-128
  //if password length greaterthan equal to 8 and 
  //less than or equal to 128
  //randomly select chracter
  //validate that atleast one chracter choice is true

}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

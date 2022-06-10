//What sort of data does my application need to work

// storing all needed chracters in variables.use array

// numbers array

//var numbers = "0123456789".split("");

//special chracters  array

// lowercase letters array

//uppercase letters array

// What sorts of task does my code need to complete

// Generate Password


// Assignment Code


function generatePassword(){
  // Prompt the User for their 'password length' and store it in variable
  //validate the paasword length and make sure it's number between
  //or equal to 8-128
  //if password length greaterthan equal to 8 and less than or equal to 128
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

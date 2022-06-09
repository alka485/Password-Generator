// Assignment Code
//generate password
function generatePassword(){
  // Prompt the User for their password length and store it in variable
  //valiadte the paasword length and make sure it
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

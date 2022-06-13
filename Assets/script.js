// storing all needed chracters in variables
var dataUppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var dataLowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var dataNumbers   = "0123456789".split("");
var dataSymbols   = "`~!@#$%^&*()-_=+[]{}|':;?/.,".split('');

// Generate Password

function generatePassword(){
  var userChoiceChracters = prompt("How many chracters would you like in our password?");
  console.log(userChoiceChracters);  

  if(userChoiceChracters>=8 && userChoiceChracters<=128){
    userChoiceSymbols=confirm("Do you want to include symbols?");
    console.log(userChoiceSymbols);
  } else{
    alert("password must atleast contain 8 to 128 chracters");
  }
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

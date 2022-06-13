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

  if(userChoiceSymbols == true || userChoiceSymbols== false){
    var userChoiceNumbers = confirm("DO you want to include numbers?");
    console.log(userChoiceNumbers);

  if(userChoiceNumbers==true || userChoiceNumbers==false){
    var userChoiceUpper = confirm("Do you want to include upper case letter?");
    console.log(userChoiceUpper);

  if(userChoiceUpper==true || userChoiceUpper==false){
    var userChoiceLower = confirm("Do you want to include lower case ?");
   console.log(userChoiceLower);
  }
  
  if(userChoiceSymbols == false && userChoiceNumbers == false && userChoiceLower== false && userChoiceUpper==false){
    alert("please select atleast one box !");
  }
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

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var includedChar = "";

  var length = window.prompt("Please enter desired password length (from 8 to 128 characters).");
  while (length < 8 || length > 128) {
    length = window.prompt("Password length must be between 8-128 characters.");
  }

  var useLower = window.confirm("Include lowercase?");
  var useUpper = window.confirm("Include uppercase?");
  var useNum = window.confirm("Include numbers?");
  
  if (!useLower && !useUpper && !useNum) {
    window.alert("You must select at least one character type! Please try again.");
  }
  if (useLower) {
    includedChar = includedChar.concat(lowerCase);
  }
  if (useUpper) {
    includedChar = includedChar.concat(upperCase);
  }
  if (useNum) {
    includedChar = includedChar.concat(numbers);
  }

  var passwordText = document.querySelector("#password");
  var password = generatePassword(); {
    for (i = 0; i < length; i++) {
      passwordText = [Math.floor(Math.random() * includedChar.length)];
    }
  }
  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
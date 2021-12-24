// Assignment Code
var generateBtn = document.querySelector("#generate");

const charTypes =  {
lowerCase: "abcdefghijklmnopqrstuvwxyz",
upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
}


// Write password to the #password input
function generatePassword() {
  var passwordText = document.querySelector("#password");
  var selectedChar = "";

  var length = window.prompt("Please enter desired password length (from 8 to 128 characters).");
  while (length < 8 || length > 128) {
    length = window.prompt("Password length must be between 8-128 characters.");
  }

  var useLower = window.confirm("Include lowercase?");
  var useUpper = window.confirm("Include uppercase?");
  var useNum = window.confirm("Include numbers?");
  var useSpecial = window.confirm("Include special characters?");
  
  if (!useLower && !useUpper && !useNum) {
    window.alert("You must select at least one character type! Please try again.");
  }
  if (useLower) {
    selectedChar += charTypes.lowerCase
  }
  if (useUpper) {
    selectedChar += charTypes.upperCase;
  }
  if (useNum) {
    selectedChar += charTypes.numbers;
  
  }  
  if (useSpecial) {
    selectedChar += charTypes.special;
  }
  

  var password = "";
  for (i = 0; i < length; i++) {
    password += selectedChar[Math.floor(Math.random() * selectedChar.length)]
  }

  passwordText.textContent = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

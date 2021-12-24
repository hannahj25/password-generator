// Assigns variable to button using id
var generateBtn = document.querySelector("#generate");

//Declares strings of characters available to use in password
const charTypes =  {
lowerCase: "abcdefghijklmnopqrstuvwxyz",
upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
}


// Generates password
function generatePassword() {
  var passwordText = document.querySelector("#password");
  var selectedChar = "";

  // Ascertains user's desired password length
  var length = window.prompt("Please enter desired password length (from 8 to 128 characters).");
  while (length < 8 || length > 128) {
    length = window.prompt("Password length must be between 8-128 characters.");
  }

  // Allows user to select which characters to include in password
  var useLower = window.confirm("Include lowercase?");
  var useUpper = window.confirm("Include uppercase?");
  var useNum = window.confirm("Include numbers?");
  var useSpecial = window.confirm("Include special characters?");
  
  if (!useLower && !useUpper && !useNum && !useSpecial) {
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
  
  // Creates password with the user's chosen criteria
  var password = "";
  for (i = 0; i < length; i++) {
    password += selectedChar[Math.floor(Math.random() * selectedChar.length)]
  }
  
  // Displays generated password to page
  passwordText.textContent = password;

}

// Adds event listener to generate button, activating the function to generate a password
generateBtn.addEventListener("click", generatePassword);

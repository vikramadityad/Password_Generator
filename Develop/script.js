// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passField = document.getElementById('password');


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var length = parseInt(prompt("Password Criteria: Enter a '#' - between 8 and 128:"));

  if (length < 8 || length > 128) {
    alert("enter between 8 and 128 only");
    return;
  }

  var enterLower = confirm("Password Criteria to Include lowercase?");
  var enterUpper = confirm("Password Criteria to Include uppercase?");
  var enterNumeric = confirm("Password Criteria to Include numeric?");
  var enterSpecial = confirm("Password Criteria to Include special characters?");


  if (!enterLower && !enterUpper && !enterNumeric && !enterSpecial) {
    alert("At least one character type should be selected !");
    return;
  }

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericNum = "0123456789";
  var specialChar = "!@#$%^&*()_+=~`[]{}|\\:;'<>,.?/";

  var validChars = "";


  if (enterLower) {
    validChars += lowerCase;
  }

  if (enterUpper) {
    validChars += upperCase;
  }

  if (enterNumeric) {
    validChars += numericNum;
  }

  if (enterSpecial) {
    validChars += specialChar;
  }

  var password = "";


  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  passField.value = password;

}




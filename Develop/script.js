// Assignment code here

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericNum = "0123456789";
var specialChar = "!@#$%^&*()_+=~`[]{}|\\:;'<>,.?/";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passField = document.getElementById('password');


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var passLength = parseInt(prompt("Enter length of the password at least 8 and no more than 128:"));
}

if (passLength<8 || passlength>128) {
  alert("invalid #, enter between 8 and 128 only");
  return;
}

var enterlower = confirm ("include lowercase characters in your password?");
var enterUpper = confirm ("Include uppercase characters in your password?");
var enterNumeric = confirm ("Include numberic characters in your password?");
var enterSpecial = confirm ("include special characters in your password?");


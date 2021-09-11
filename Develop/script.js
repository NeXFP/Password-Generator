// Assignment code here
function generatePassword()
{
  //Do while loop to prompt for password length for user input.
  do {
    var passlength = window.prompt("How long would you like your password to be?");
    console.log("Length of Password: " + passlength);
  } while (passlength < 8 || passlength > 128)

  //Variables for window confirms for each question prompt.
  var passSc = window.confirm("Do you want symbols in your password?");
  var passNM = window.confirm("Do you want numerical characters in your password?");
  var passUC = window.confirm("Do you want uppercase characters in your password?");
  var passLC = window.confirm("Do you want lowercase characters in your password?");

  var character = " ";
  var result = [];

  if (passSc == true)
    {
    character += "+-!@#$%^&()?><";
    console.log("passSc is True");
    } 
  if (passNM == true)
    {
    character += "0123456789";
    console.log("passNM is True");
    }
  if (passUC == true)
    {
    character += "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    console.log("passUC is True");
    }
  if (passLC == true)
    {
    character += "abcdefghijklmnopqrstuvwxyz";
    console.log("passLC is True");
    }

    console.log(character)

  for (var i = 0; i < passlength; i++)
    {
    result += character.charAt(Math.floor(Math.random() * character.length));
    } 

  return result;
}
// code to display result


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

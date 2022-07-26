// Assignment Code
var generateBtn = document.querySelector("#generate");

// create a function called generatePassword
//         - create an array that listed all the possible characters.
//         - create variable for the total length requirements.
//         - create and "if" statement with a prompt that requires the user to select the number of characters from 8-128.
//         - once the user selects a number within the criteria, the user is met with a series of prompts to further make the password more secure.
//         - for the variable password, that is what allows us to generate a random string of characters for our password.

function generatePassword() {

    const allChars = {
        Lower: "abcdefghijklmnopqrstuvwxyz",
        Upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        number: "0123456789",
        Special: "`~!@#$%^&*()_+-={}[]:;'?/>.<,",
    };
    passwordCharset = "";
    
    let totalLength = prompt("Please select a number between 8 and 128 characters.");
    if (totalLength < 8 || totalLength > 128) {
        alert("Please select a number between 8 and 128 characters.");
        }; 
    let Lower = (confirm("Would you like to include lower case letters?"))
        if (Lower) {
                passwordCharset += allChars.Lower;
            };
    let Upper = (confirm("Would you like to include upper case letters?"))
        if (Upper) {
                passwordCharset += allChars.Upper;
            }; 
    let number = (confirm("Would you like to include numbers?"))  
        if (number) {
                passwordCharset += allChars.number;
            };
    let Special = (confirm("Would you like to include special characters?"))
        if (Special) {
                passwordCharset += allChars.Special;
            }; 
    var password = "";
        for (var i=0; i < totalLength; i++) {
            password += passwordCharset[Math.floor(Math.random() * passwordCharset.length)];
            };
            return password;
}    
            

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
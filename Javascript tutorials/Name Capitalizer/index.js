//getting the name
var name = prompt("What is your name?");

//capitalize the first letter
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, );

//Concatenate the name 
var fullName = upperCaseFirstChar + restOfName;
alert("Hello, " + fullName);
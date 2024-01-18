'use strict';
var userName = prompt("Please Enter your Name :");
console.log("UserName: " + userName);
var gender = prompt("Please Enter your Gender Male/Female :");
if (gender == "Male" || gender == "Female") {
    console.log("Gender: " + gender);
}
else {
   alert("The Gender should be In a correct syntax like:  Male or Female");
    gender = prompt("Please Enter your Gender Male/Female :");
    console.log("Gender: " + gender);
}
var age = prompt("Please Enter your Age :");
if (age <= 0) {
    console.log(alert("Please enter Age grater than Zero"));
    age = prompt("Please Enter your Age :")
    console.log("Age: " + age);

} else {
    console.log("Age: " + age);
}
var result = confirm("do you want to skip welcoming massege?")
if (result == false) {
    if (gender == 'Male') {
        alert("Hello Mr. " + userName + " Welcome to our website!");
    }else if (gender == 'Female') {
        alert("Hello Ms. " + userName + " Welcome to our website!");
    } else {
    alert("Hello! " + userName + " Welcome to our website! ");
}
}


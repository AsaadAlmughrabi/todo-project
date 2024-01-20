 'use strict';
let userName = prompt("Please Enter your Name :");
checkUserName(userName);
let gender = prompt("Please Enter your Gender Male/Female :");
checkGender(gender);
let age = prompt("Please Enter your Age :");
checkAge(age);
let intrest=confirm("Are you intresting to do something new");
let belive=confirm("Are you belive If write your to-do list Daily that will organize your work and help you to finish faster");
let tasks=confirm("do you finish all last tasks");
let result = confirm("do you want to skip welcoming massege?")
if (result == false) {
    checkTitle(gender);
}
 let arr1=[checkUserName(userName),checkAge(age),checkGender(gender),confirmation(intrest),confirmation(belive),confirmation(tasks)];
//  console.log(arr1.join(" , "));----> to print elemet beside each others seperated by ,
treverseArr(arr1);

 function treverseArr(arr){
    for( let i=0;i<arr.length;i++){
        console.log(arr[i]+",");
    }
}
function checkGender(gender){
    if(gender===null||gender.trim()==="")
    {
       return "Invalid";
    }else if (gender == "Male" || gender == "Female") {
   
       return  gender;
    }
    else {
       alert("The Gender should be In a correct syntax like:  Male or Female");
        gender = prompt("Please Enter your Gender Male/Female :");
       return checkGender(gender);
        
    }
}

function checkAge(age){
    if(age===null||age.trim()===""){
        return "Invalid";
}else if(age <= 0) {
        alert("Please enter Age grater than Zero");
        age = prompt("Please Enter your Age :");
       return checkAge(age); 
       
    } else {
        return  age;
    }
}

function checkTitle(gender){
    if (gender == 'Male') {
        alert("Hello Mr. " + userName + " Welcome to our website!");
    }else if (gender == 'Female') {
        alert("Hello Ms. " + userName + " Welcome to our website!");
    } else {
    alert("Hello! " + userName + " Welcome to our website! "); 
}

}
function checkUserName(userName){
if(userName===null||userName.trim()===""){
    return "Invalid";
}else{
return  userName ;
}
}
function confirmation(str){
    if(str==true)
{
return "Yes";

}else{
    return "Invalid";

}
}

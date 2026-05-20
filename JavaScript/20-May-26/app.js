// AND operator

// var name = "Hajra";
// var age = 10;

// if (name == "hajra" && age == 10){
//     alert("hello hajra");
// }

// OR logical operator

// var name = "Hajra";
// var age = 10;

// if (name == "hajra" || age == 10){
//     alert("hello hajra");
// }


// Multiple condition with AND operator

// var name = prompt("Enter you name.");
// var age = +prompt("Enter your age.");
// var weight = prompt("Enter you weight.");

// if (name == "Ali" && age === 18 && weight >= 50){
//     document.write("You are eligible");
// }else {
//     document.write("You are not Eligible");
// }

// Multiple condition with OR operator

// var name = prompt("Enter you name.");
// var age = +prompt("Enter your age.");
// var weight = prompt("Enter you weight.");

// if (name == "Ali" || age === 18 || weight >= 50){
//     document.write("You are eligible");
// }else {
//     document.write("You are not Eligible");
// }

// Multiple condition with AND,OR operator

// var name = prompt("Enter you name.");
// var age = +prompt("Enter your age.");
// var weight = prompt("Enter you weight.");

// if ((name == "Ali" && age === 18) || weight >= 50){
    
//     document.write("You are eligible");
// }else {
//     document.write("You are not Eligible");
// }


// var userName = prompt("Enter your name.");
// var email = prompt("Enter you email.");
// var pinCode = prompt("Enter Pin code");

// if (userName == "admin" || email == "admin@gmail.com" && pinCode === 3456 ){
//     document.write("Welcome Admin");
// }else {
//     document.write("Access Denied");
// }

// var age = prompt("Enter your age");
// var country = prompt("Country name Pakistan");

// if ((age > 25 || age < 40) && country == "Pakistan"){
//     document.write("hello");
// }else if((age > 40 || age < 60) && country == "Pakistan"){
//     document.write("Hello old Citizen");
// }else {
//     document.write("Access not granted");

// }

// if nested 

var name = prompt("Enter your name");
var age = 10;


// if(name == "Mahira" && age == 10 ){
//     alert("i'm" + age + "years old");
// }else{
//     alert("Acces denied")
// }



if (name == "Mahira"){  // true => nested if check
    // false // else run ho ga 
    if(age == 10 ){
        alert("i'm" + age + "years old");
    }else{
        alert("i'm not eligible")
    }

}else{
    alert("Acces denied")
}
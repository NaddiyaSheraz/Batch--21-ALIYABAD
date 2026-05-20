// if (condition){
//     code//
// }

// var age = 20;
// var age = prompt("Enter you age?");

// if (age == 20){
//     document.write("Hello user!")
// }

// var age = +prompt("Enter you age?");
// var age = Number(prompt("Enter you age?"));
// var age = parseInt(prompt("Enter you age."));
// "20"

// prompt output string

// if (age === 20){
//     document.write("Hello user!")
// }

//not equal to 
// if (age !== 20){
//     document.write("Hello user!")
// }


// Comparison operators

//=== strict equal to //value + datatype
// == Equal to 
// != not equal to 
// !==
// > greter
// >= greater than or equal to 
// <= lessthan equal to



//
// var name = prompt("Enter your name?");

// if (name == "naddiya" + " " + "sheraz"){ //naddiya sheraz
//     document.write("Hello" + " " + name)
// }


// else 

// var name = "naddiya";
// var name = prompt("Enter your name.")

// if (name == "Ali"){
//     document.write("Hello ali");
// }
// if(name != "Ali"){
//     document.write("You are not allowd..")
// }

// if (name == "Tehreem"){
//     document.write("Hello tahreem");
// }else{
//     document.write("You are not allowed")
// }


// var age = 15;

// if (age >= 18){
//     alert("allowed to vote");
// }else{
//     document.write("you are underage")
// }

// var age = prompt("Enter you age");

// if (age > 18){
//     alert("allowed to vote");
// }else if(age == 18){
//     alert("come after 1 year")
// }else{
//     document.write("you are underage")
// }

// var name = prompt("Enter your name");
// if (name == "Rabia"){
//     alert("hello rabia")
// }else if (name == "fiza"){
//     alert("hello fiza")
// }else if (name == "Ayesha"){
//     alert("hello Ayesha")
// }else if(name == "sana"){
//     alert("hello sana")
// }else{
//     alert("you are not allowed")
// }


// Logical <Operator>
// // And Operator &&
// // OR operator  || 

var age = prompt("Enter you age");
var hasNic = prompt("Do you have NIC? yes , no");

// if (age >= 18 && hasNic === "yes"){
//     document.write("you can vote");
// }else{
//     document.write("You can not vote")
// }

if (age >= 18 || hasNic === "yes"){
    document.write("you can vote");
}else{
    document.write("You can not vote")
}
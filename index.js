console.log("welcome to year 2")
console.log("i like to eat pizza")
// window.alert("this is an alert");
// alert("another super annoying alert"); //same as above
//comments!
/*
this is multiline
nothing in here is ran as this is a comment
*/
document.getElementById("change me").textContent = "Goodbye"

//let and var - don't use var. 

let v = 1;

console.log(v);
v= v +2;
console.log(v);

let y=150.75;
//template literals: done with backticks(``)
console.log(`The value of y is ${y}`)

let numstr= "123";
console.log(numstr + v);//prints "1233"

//checking a variables type
console.log(typeof v); //number
console.log(typeof y); //number
console.log(typeof numstr); //string

//booleans
let ontask = false;
console.log(typeof ontask)

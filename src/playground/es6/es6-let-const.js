/*
 let:
 duplicate variable declaration is not allowed .

 const:
 duplicate variable declaration is not allowed .
 duplicate variable assignment is not allowed .

 let, const and var are function scoped 

 let, const are block level scope 
 var is not block level scope 
*/

//block scoping 

var fullName =' abdallah kanso';

if(fullName){
     var firstName= fullName.split(' ')[0];
     console.log(firstName);
}
// by using var fullName && firstName are end up in the same scope 
console.log(firstName) ;// will work also 

// if you change var firstName to const or let firstName the console.log ouside the block will not work
// if you try to use a let variable before its definiton you will hget an Uncaught ReferenceError while with var te vakue will be undefined 
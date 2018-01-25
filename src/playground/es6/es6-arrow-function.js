
// arrow function with sample expression 
const squareArrow =  x => x*x;

const complexeArrow =  (x,y) => {
    // some logic ...

    return  "some value";
}

console.log(squareArrow(4));

// very important with arrow functions

// arguments object - no longer bound with arrow functions
const add = function(a,b){
    /* line below prints out all the arguments 
     passed to the function regardless of what's defined in the arguments 
     e.g : when callig add(55,1) we will get 55 and 1 
          but also if we call  add(55,1,3)  we will get 55, 1 and 3 as well 
     */
    console.log(arguments); 
    return a+b;
}
console.log(add(55,1));// 56 
console.log(add(55,1,3));//


/**
 *   addArrow doesn't have access to arguments so  the console.log(arguments) will not work 
     and you will get Uncaught ReferenceError : arguments is not definied .
 */
const addArrow = (a,b)=> {
    console.log(arguments); 
    return a+b;
}

// this keyword - no longer bound 

/**
 * es5 
   when we define a regular function on an object property the 'this' keyword is bound to that object 
   which means in our case  the function 'printPlacesLived' below has access to vlaues like:
   this.name and this.cities
 */

const user0 ={
    name:'abdallah',
    cities:['Lausanne', 'Orbe'],

    printPlacesLived:function(){
        console.log(this.name);
        console.log(this.cities);
    }
}

/**
 * es5 
 * child function of the regular function on an object property doesn't have access to this 
 */
const user1 ={
    name:'abdallah',
    cities:['Lausanne', 'Orbe'],

    printPlacesLived:function(){
        console.log(this.name);
        console.log(this.cities);
        
        this.cities.forEach(function(city){
            /**
             * line below wont work since we don't have access to this keyword.
             *  by the way there is lot of workaround to make it work like
             *  const that = this; // define this at the level of the printPlacesLived and use that in forEach
             * 
             */
            console.log(this.name + ' is lived in '+ city);
        })
    }
}

/**
    * in the case below the arrow function inside forEach 
    * lives in the printPlacesLived function so it has  has access to  printPlacesLived socpe which is user scope
   */
  const user3 ={
    name:'abdallah',
    cities:['Lausanne', 'Orbe'],
    printPlacesLived:function(){
        this.cities.forEach((city)=>{
            console.log(this.name + ' is lived in '+ city);// this will work
        })
    }
  }

/**
 *  when  we define an arrow function on an object property the 'this' keyword is bound to the parent object scope
 *  printPlacesLived lives in the user2 so it has  has access to  global socpe   
 */
const user2 ={
    name:'abdallah',
    cities:['Lausanne', 'Orbe'],
    printPlacesLived:()=>{
        this.cities.forEach((city)=>{
            console.log(this.name + ' is lived in '+ city);// this will not work
        })
    }
  }

  

/**
* in the case below the arrow function assigned to printPlacesLived
* lives in user4 object so it  has access to  the global socpe so the this.name will truns into error 
*/
    const user4 ={
    name:'abdallah',
    cities:['Lausanne', 'Orbe'],
    printPlacesLived:()=>{
        console.log(this.name);// this is will not work 
        this.cities.forEach((city)=>{
            console.log(this.name + ' is lived in '+ city);//this is will not work also
        })
    }
}

/**
 *  when we define a regular function or arrow function on an object property 
 *  the 'this' keyword is bound to that object so 
 *  in the case below the 'this' keyword is bound to user5  so  console.log(this.name); inside the printPlacesLived will work
 */
    const user5 ={
      name:'abdallah',
      cities:['Lausanne', 'Orbe'],
      printPlacesLived(){
          console.log(this.name);// this is will  work since method definition has the same option as es5 functions
          this.cities.forEach((city)=>{
              console.log(this.name + ' is lived in '+ city);
          })
      }
    }


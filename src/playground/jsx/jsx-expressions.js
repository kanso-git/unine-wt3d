
const name='dyaco';

const person ={
  name:'',
  location:'some adresse',
  age:17
}
/* getLocation resolves to <p>location</p> or to undefinied  */
const getLocation =(location)=>{
 if(location){
   return <p>location</p>;
 }
}
const template =(
    <div>   
      <h1>welcome {peron.name? person.name:'Anonymous'}</h1>
      { user.age>=18 && <p>Age:{person.age}</p>}
      {getLocation(person.location)} 
    </div>
);
/*
JSX Expressions:
  JSX support javascript experssions(variables, JSX string, functions .etc.) written inside curly braces
  NB: By default the Objects are not supported as a react child - the solutions are 
    1-> Use array instead the object 
    2-> wrap the object using createFragment (object) from the React add-ons.

Conditional Rendering in JSX:
    1-> if statements - should be wrapped in a function and then the wrapper function is used in the JSX
        e.g.   {getLocation(person.location)} 
    2-> ternary operators - resolves to a value so can be used directly in the JSX
        e.g.  <h1>welcome {peron.name? person.name:'Anonymous'}</h1>
    3-> logical and operator - it's a simple way to render something  or nothing based on condition
        e.g.  { user.age>=18 && <p>Age:{person.age}</p>}

    NB: when an expression resolves to a falsy value(undefined, false, null) react will not show it at all

    NB: Check out  Difference between expression and statement 
    JS expression produces or resolves to some value  e.g new Date(), [1,2,4], 5+6 etc 
    JS statement  produces some behaivor (does something ) 
*/
 
/**
 * reserved keyowrds are not allowed to be used as attributes in JSX like class
 * e.g class should be replaced with className for more check out https://reactjs.org/docs/handling-events.html#___gatsby
 * 
 */

const count =1;
const template = (
 <div>
   <h1>Count :{count}</h1>
   <button id="my-id" className="button">+1</button> 
 </div>
);
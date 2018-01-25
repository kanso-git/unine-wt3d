
/**
 * React expressions support the array so it understands the an array composed of jsx expressions
 * please note that a key prop is needed to avoid as in the sample below
 */
/**
 * a cool technique to return a random number between 0 and length-1 of any array is to use the following
 * Math.random() returns a number between 0 and 0.99999
 * const randomNum = Math.floor(Math.random()*myArray.length);
 */

 const template =(
  <div>
  {
    [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
  }
  </div>
 );
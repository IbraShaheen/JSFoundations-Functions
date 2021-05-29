/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */


/* The old sol.
function greet(name) {
  console.log("Hello " + name );
}
greet("Ibraheem");
*/

// *new sol.
const greet = (name) => console.log(`Hello ${name}`);
greet("ali");


/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

/* old sol.
function isOdd(n) {
  if(n%2 === 0) return false;
  return true;
}
isOdd(15);
*/
// *new sol.
const isOdd = (n) => !(n%2 === 0);
isOdd(15);



/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

/* old sol.
function oddsSmallerThan(n) {
 if (n%2 !== 0)
  return ((n-1)/2);
return (n/2); }
*/

// *new sol.
const oddsSmallerThan = (n) => {

  if(isOdd(n)) return ((n-1)/2)
  return (n/2)

}

oddsSmallerThan(7);
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

/* old sol.
function squareOrDouble(n) {
  if (n%2 === 0)
  return (n*2);
  return (n*n); }
  
  squareOrDouble(15);
  */

// *new sol.
const squareOrDouble = (n) => {
 if(isOdd(n)) return n*n
 return n*2
}

console.log(squareOrDouble(3)); 
console.log(squareOrDouble(4)); 



module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };

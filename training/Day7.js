/*const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);                   // apple
console.log(fruits[2]);                   // mango
console.log(fruits.length);               // 3
console.log(fruits[fruits.length - 1]);   // mango (last)

// Modify an element
fruits[1] = "cherry";
console.log(fruits);                      // ["apple", "cherry", "mango"]

// Negative index? No — undefined
console.log(fruits[-1]);                  // undefined  (use .at(-1) instead)
console.log(fruits.at(-1)); */

//=======================================================================================================================================================================================================================================

// Mutating MethodsChange 
// VISUAL REFERENCE

// Method	                        Action
// push(item)	               Add to END
// pop()	                   Remove from END
// unshift(item)	           Add to START
// shift()	                   Remove from START
// splice(i, n)	               Remove n items at i
// splice(i, 0, x)	           Insert x at i

// "p" methods work at the END (push, pop). "shift" methods work at the START.

/*const cart = ["apple", "banana"];

cart.push("mango");        // ["apple", "banana", "mango"]
cart.pop();                // ["apple", "banana"], returns "mango"
cart.unshift("orange");    // ["orange", "apple", "banana"]
cart.shift();              // ["apple", "banana"], returns "orange"

// splice(start, deleteCount, ...itemsToInsert)
const items = ["a", "b", "c", "d"];
items.splice(1, 2);        // remove 2 items starting at index 1
console.log(items);        // ["a", "d"]

const more = ["a", "b", "c"];
more.splice(1, 0, "X", "Y");   // insert at 1, delete 0
console.log(more);*/

// Non-Mutating MethodsReturn

// Method	                    Returns
// slice(s, e)	          New array, partial copy
// concat(arr2)	      New combined array
// join("-")	          A STRING
// includes(x)	          true / false
// indexOf(x)	          Index or -1

const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));      // [2, 3]   ← new array, original untouched
console.log(arr.concat([6, 7]));   // [1, 2, 3, 4, 5, 6, 7]
console.log(arr.join("-"));        // "1-2-3-4-5"   ← string!
console.log(arr.includes(3));      // true
console.log(arr.indexOf(4));       // 3 (index)
console.log(arr);                  // [1, 2, 3, 4, 5]   ← original 
//TASK 1
const cart = ["bread", "milk", "eggs"];
cart.push("butter");
cart.unshift("orange");
console.log(cart);

cart.pop();
console.log(cart);

cart.splice(1,1);
console.log(cart);

//========================================================================================================================================

//TASK 2
console.log("\n");
const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const passing = scores.filter(s => s >= 60);
console.log(passing);                     
const firstFail = scores.find(s => s < 60);
console.log("FIRST failing score : ",firstFail);                    
console.log("ALL scores are passing : ",scores.every(s => s >= 60)); 
console.log("ANY score is above 90 : ",scores.some(s => s > 90));  //Bonus in task 2   

//======================================================================================================================================================

//TASK 3
console.log("\n");
const prices = [100, 250, 500, 1200, 80];
const withGst = prices.map(p => p * 1.18);
console.log("Orignal Array : ",prices);  
console.log("New Array with 18% GST : ",withGst);  

const fixed=prices.map(p => Number((p * 1.18).toFixed(2))); //Bonus in task 3
console.log("fixed 2 decimal array: ",fixed);

//=======================================================================================================================================================================

//Bonus Task 
console.log("\n");
const expenses = [250, 800, 120, 50, 1500, 75];
const total = expenses.reduce((acc, n) => acc + n, 0);
console.log(total);
const max = expenses.reduce((a, n) => n > a ? n : a, -Infinity);
console.log(max);
const combine = expenses.filter(s => s >100);
const combineTotal = combine.reduce((acc, n) => acc + n, 0);
console.log(combineTotal);



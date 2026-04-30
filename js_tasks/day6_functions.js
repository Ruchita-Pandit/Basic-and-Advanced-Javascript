//TASK 1
function area(len,width){
    return 2*(len+width);
}
const rec1_area=area(2,3);
console.log("Rectangle 1 Area : ",rec1_area);
const rec2_area=area(5,10);
console.log("Rectangle 2 Area : ",rec2_area);
const rec3_area=area(1,9);
console.log("Rectangle 3 Area : ",rec3_area);
//Bonus in task 1
const recArea=(a,b)=>{return 2*(a+b)};
console.log(recArea(2,3))

//===============================================================================================================================================================================================================================

//TASK 2
function greet(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet("Priya"));
console.log(greet("Aarav"));
console.log(greet());
console.log(greet(null)); //Bonus in task 2
//does it use the default? 
// Default works only for undefined, NOT for null, 0, false, or ""

//===============================================================================================================================================================================================================================

//TASK 3
const cToF = (celsius) => celsius * 9/5 + 32;
console.log(cToF(0)," F");   
console.log(cToF(100)," F");  
console.log("Body Temperature : ",cToF(37)," F");   
console.log("Jaipur : ",cToF(45)," F");   

//===============================================================================================================================================================================================================================

//BONUS
const double = (n) => n * 2;
console.log(double(5));  
console.log(double(5));  
console.log(double(5));  

let total = 0;
function addToTotal(n) {
  total += n;      // modifies outer variable (side effect)
  return total;
}
console.log(addToTotal(5));  
console.log(addToTotal(5)); 
console.log(addToTotal(5));  
// Pure functions are easier to reason about because their output
// depends only on the input and they don’t change anything outside.
// Impure functions are harder to track since their result depends
// on previous state and side effects.
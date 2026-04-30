//TASK 1
for(let i=1;i<=10;i++){
    console.log(`7 X ${i} = ${i*7}`);
}
//Bonus in task 1
console.log("\nonly the EVEN multiples of 7")
for(let i=1;i<=10;i++){
    if(i%2===0)
        console.log(`7 X ${i} = ${i*7}`);
    else
        continue;
}

//==============================================================================================================================================================================================================

//TASK 2
let sum =0;
let i=1;
while(i<=100){
    sum+=i;
    i++;
}
console.log("\nSum Of All Number from 1 to 100 : ",sum);
//Bonus in task 2
sum =0;
i=1;
while(i<=100){
    if(i%2!==0){
    sum+=i;
    }
    i++;
}
console.log("Sum Of Only Odd Number from 1 to 100 : ",sum);

//================================================================================================================================================================================================================

//TASK 3
console.log("\n");
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
for (const firstName of names) {
    console.log(firstName);
}
names_longerThan_Four=0
for (const firstName of names) {
    if(firstName.length>4){
        names_longerThan_Four+=1;
    }
}
console.log("\nNo. Of names having length greater than 4 : ",names_longerThan_Four);
//Bonus in task 3
const str="Jaipur";
for (const ch of str){
    console.log(ch);
}

//================================================================================================================================================================================================================

//BONUS TASK 
console.log("\n");
const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
let propertiesCount=0;
for (const k in student) {
    console.log(`${k} : ${student[k]}`);
    propertiesCount+=1;
}
console.log("Total properties:",propertiesCount);

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Priya");
greet("Aarav");

//==============================================================================================================================================================================================================================

//HOMEWORK
// Print numbers 1 to 50, but for multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".
console.log("\n");
for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else{
    console.log(i);
    }
}

// Use a while loop to find the smallest number n where n * n > 1000.
console.log("\n");
let n =1
while(n*n<=1000){
    n++
}
console.log(n);

// Print a triangle of stars (5 rows): *, **, ***, ****, ***** — use nested for loops.
console.log("\n");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Given const scores = [88, 72, 95, 60, 41];, use for...of to find and log the highest score.
console.log("\n");
const scores = [88, 72, 95, 60, 41];
let highestScore=0
for (const i of scores) {
    if(highestScore<i){
        highestScore=i;
    }
}
console.log("Highest Score : ",highestScore);


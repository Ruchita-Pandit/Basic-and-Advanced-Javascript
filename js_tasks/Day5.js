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
//TASK 1
function Grades(marks){

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} 
else if (marks >= 90) {
  console.log("Grade is A");
} 
else if (marks >= 75) {
  console.log("Grade is B");
} 
else if (marks >= 60) {
  console.log("Grade is C");
} 
else {
  console.log("Grade is F");
}

}

Grades(75);
Grades(95);
Grades(50);
// 95 -> You received Grade A
// 50 -> You received Grade F
// 75 -> You received Grade B

//TASK 2
const day="Sunday";
switch(day){
    case "Monday":
    case "Tueday":
    case "Wednesday":
    case "Thursday":
    case "Friday":console.log("Weekday");
                    break;
    case "Satday":
    case "Sunday": console.log("Weekend");
                    break;
    default: console.log("Invalid Day")
}

//TASK 3
if (0) { 
    console.log("is a truthy value")
 }

if ("0") {
    console.log("string with 0 as value is a truthy value")
}

if ([]) {
    console.log("empty array is a truthy value")
}

if (null) {
    console.log("is a truthy value")
}

if (NaN) {
    console.log("is a truthy value")
}

if ("false") {
    console.log("string with false as value is a truthy value")
}

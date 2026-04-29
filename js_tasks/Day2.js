//TASK 1
const str="hey";
const age=21;
const bol=true;
const assignNull=null;
let Name;
console.log("VALUE : ",str,"TYPE : ",typeof(str));
console.log("VALUE : ",age,"TYPE : ",typeof(age));
console.log("VALUE : ",bol,"TYPE : ",typeof(bol));
console.log("VALUE : ",assignNull,"TYPE : ",typeof(assignNull));
console.log("VALUE : ",Name,"TYPE : ",typeof(Name));

//TASK 2
console.log("10" + 5);     
console.log("10" - 5);    
console.log(true + true);  
console.log("" + false);   
console.log(null + 1);

const fullName = "   Ruchita Pandit   ";

const trimmed = fullName.trim();
console.log(trimmed);
console.log(trimmed.toUpperCase());
console.log(trimmed.length);
console.log(trimmed.includes("Ruchita"));

//Bonus
const firstName = trimmed.slice(0,8);
console.log(firstName);
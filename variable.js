let password = "ABC1234"
let score = 0;

if (password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || 
    password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("10")) {
    score = score + 1;
}

if (password.length >= 8) { score = score + 1; }

let strength = "";
if (score == 0) { strength = "Weak"; } 
else if (score == 1) { strength = "Medium"; } 
else { strength = "Strong"; }
console.log(strength)


// let num = 2;
// console.log(num % 2 == 0 ? "Even" : "Odd");


// let age = 20;
// let stat = "";
// if (age >= 18) {
//     stat = "adult";
// } else {
//     stat = "minor";
// }
// console.log(stat);

// // Shorthand
// let stat = age >= 18 ? "adult" : "minor";


// let day = "Saturday";

// switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log("It's a weekday");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's weekend.");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }


// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log("It's weekend!");
// } else {
//     console.log("It's a weekday.");
// }





// console.log((true && false) && (true || false))

// a = 
// b = 
// c = 
// console.log(a && b && !c) //true


// console.log(5 == "5")  //true
// console.log(5 === "5") //false
// console.log(5 === 5) //true



// let x = 0.1
// let y = 0.2
// console.log((x + y).toFixed(1)) //0.30000000000000004
// console.log((0.1 + 0.2).toFixed(1));  // "0.3" (as string)
// console.log(Math.round((0.1 + 0.2) * 10) / 10);  // 0.3
// console.log(Number((0.1 + 0.2).toFixed(10)));  // 0.3




// let x = 1
// let y = 2
// console.log(x + y)
// console.log(++x, x)
// console.log(x)





// let x = 10
// // let x = 15
// const y = 20
// // y = 50
// console.log(x, y)
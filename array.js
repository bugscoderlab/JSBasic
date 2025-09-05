// exercise: convert // function say(name, age) {
//     console.log(`My name is ${name}. I'm ${age} this year`)
// }
//  to arrow function

// const say = (name, age) => {
//     return `My name is ${name}. I'm ${age} this year`
// }
// console.log(say("bond", 42))


// const sayBob = () => (
//     "Bob"
// )

// console.log(sayBob());

// exercise: loop an array and call a function, pass value into parameter from array value

// function say(name, age) {
//     console.log(`My name is ${name}. I'm ${age} this year`)
// }
// say("Tat", 42)


// function sayBob() {
//     console.log("Bob");
// }




// exercise: loop an array


// for (let x=0; x<=10; x++) {
//     if (x == 2) { continue; }
//     if (x == 5) { break; }

//     console.log(x);
// }




// let students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 }
// ]
// for (let x=0; x<students.length; x++) {
//     console.log(x, students[x].name, students[x].grade)
// }
// students.forEach((val, key) => {
//     console.log(key, val.name, val.grade)
// })
// console.log(students)
// console.log(students[0].name);
// console.log(students[2].name);
// console.log(students[3]?.grade);



// let person = {
//     name: "GAIA",
//     age: 42
// }
// console.log(person)
// console.log(person.name, person['name'])

// person.name = "GAYA"
// console.log(person)






// let empty = []
// let fruits = ['apple', 'banana', 'orange']
// let count = ['a', 'b', 10]
// console.log(count)
// console.log(fruits[1]) //banana
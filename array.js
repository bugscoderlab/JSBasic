let students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 }
]
students.forEach((val, key) => {
    console.log(key, val.name, val.grade)
})


// const say = (name, age) => (
//     `My name is ${name}. This year I'm turning ${age}.`
// )
// console.log(say("bond", 42))



// ((name, age) => {
//     console.log(name, age)
//     console.log(`My name is ${name}. This year I'm turning ${age}.`)
// })('GAIA', 42)









// const say = (name, age) => {
//     return `My name is ${name}. This year I'm turning ${age}.`
// }
// console.log(say("bond", 42))


// function say(name, age = 0) {
//     console.log(`My name is ${name}. I'm ${age} this year`)
// }
// say("GAIA")

// let duduk = 'Perlis'
// function say(name, age) {
//     duduk = 'KL'
//     console.log(duduk)
//     return (`My name is ${name}. This year I'm turning ${age}.`)
// }

// console.log(duduk)
// console.log(say("GAIA", 1))







// let str = "The quick brown fox jumps over the lazy dog"
// let arr = [...str]
// let obj = {
//     // 'a': 0,
//     // 'e': 0,
//     // 'i': 0,
//     // 'o': 0,
//     // 'u': 0
// }
// let count = 0
// for(let x in arr) {
//     if (arr[x] == 'a' || arr[x] == 'e' || arr[x] == 'i' || arr[x] == 'o' || arr[x] == 'u') {
//         if (!(arr[x] in obj)) { obj[arr[x]] = 0; continue; }

//         obj[arr[x]] += 1
//         count += 1
//     }
// }
// console.log("Total vowel: ", count, obj)
// let count = 0;
// arr.forEach((val, key) => (
//     val
// ))


// for (let x=0; x<=10; x++) {
//     // if (x == 2) { continue; }
//     // if (x == 5) { break; }

//     console.log(x);
// }

// let arr1 = ['a', 'b', 'c']
// let arr2 = arr1
// arr2.push('d')
// console.log(arr1, arr2)


// let str = "password"
// console.log([str])


// exercise: 
// 1. create a todo list object consist of following key:
// - task
// - state (pending, wip, done)
// 2. create a function to add task into the todo list objects
// 3. create a function to delete from todo list
// 4. display only pending only/wip only/done only in seperate group


// exercise: convert // function say(name, age) {
//     console.log(`My name is ${name}. I'm ${age} this year`)
// }
//  to arrow function


// const sayBob = () => (
//     "Bob"
// )

// console.log(sayBob());

// exercise: loop an array and call a function, pass value into parameter from array value



// function sayBob() {
//     console.log("Bob");
// }



// exercise: convert a string to Array, and search for any integer inside the string
// count vowel (a,e,i,o,u)







// let students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 }
// ]
// students.forEach((val, key) => {
//     console.log(key, val.name, val.grade)
// })
// for (let x=0; x<students.length; x++) {
//     console.log(x, students[x].name, students[x].grade)
// }
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
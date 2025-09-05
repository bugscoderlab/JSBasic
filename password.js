let password = "abcd1234"
let length = password.length;
let result = password.match(/\d/g);///[0-9]/
console.log("result: ", result);

if (length >= 8 && result == true){
 console.log("Pass");
} else {
 console.log("Fail");
}
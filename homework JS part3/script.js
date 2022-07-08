
//EX.1 Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.


// function multiplyFive (number) {
//   return number * 5;
// };
// let x = multiplyFive(7);
// console.log(x);

// EX.2 Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.
// let divideByTwo = x => x / 2;
// let z = divideByTwo(90);
// console.log(z);

//Ex.3 Create a function addS that accepts one input and adds an "s" to it.
// let addS = (str) => { return str + "s" };
// let a = addS("lesson");
// console.log(a);

// Ex.5 Write an arrow function that expects an array of integers and returns the sum of the elements of the array. Use the built-in method reduce on the array argument.

// let Sum = (array) => { return array.reduce((a, b) => a + b, 0);}
// let arr = [1,6,9,10];
// let x = Sum(arr);
// console.log(x);
 
// Ex.4 Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map') Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Ex. console.log(map([1, 2, 3], addTwo)); should output [ 3, 4, 5 ] (create function addTwo and test pass it as a callback)

// let addTwo = (n) => n + 2;
// const map = (nums, callback) => {
//   const newArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     newArray.push(callback(nums[i]));
//   }
//   return newArray;
// };

// let result = map([1, 6, 3, 5, 7, 9], addTwo);
// console.log(result);



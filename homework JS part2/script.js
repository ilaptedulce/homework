//Ex1
/* let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabetLength() {
  console.log(myAlphabet.length);
  if (myAlphabet.length < 4) {
    console.log("True-the number of items within the array is less than 4");
  } else {
    console.log("False-the number of items within the array is bigger than 4");
  }
}
myAlphabetLength(); */

//Ex2
/*let planets = ["Mercury ", "Venus ", "Earth ", "Mars ", "Jupiter"];
for ( i = 0; i < planets.length; i++ ) {
    console.log(planets[i]);
}
planets.forEach(function(element, index) {
  console.log(element, index);
}); */

//Ex.3
/*let nums = [1, 2, 3, 4, 5];
function arraySum() {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += nums[i];
    console.log(sum);
  }
}
arraySum(); */

//Ex.4
/*let data = [1, 2, 3, ["first", "second", "third"]];
console.log(data);
let copydata = JSON.parse(JSON.stringify(data));
console.log(copydata); */

//Ex.5

/*let programing = {
  languages: ["Javascript", "Phyton", "Ruby"],
  isChallanging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

programing.difficulty = 7;
let difficulty = programing.difficulty;
console.log(difficulty);
delete programing.jokes;
console.log(programing);

for (let i = 0; i < programing["languages"].length; i++) {
  console.log(programing.languages[i]);
}

let keys = Object.keys(programing);
console.log("keys ", keys);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

let values = Object.values(programing);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
} */

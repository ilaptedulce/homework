//Ex.1
let element = document.getElementById("second");
element.textContent = "New text";

//Ex.2
let items = document.getElementsByClassName("red");
// console.log(blue);

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "blue";
}

//EX.3
let button = document.getElementById("button");
button.onclick = function () {
  const name = document.getElementById("inputData").value;
  if (name.length > 0) {
    document.getElementById("valueHolder").innerHTML =
      "Welcome to the site " + name;
  }
};

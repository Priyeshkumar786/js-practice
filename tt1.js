// ======simple calculator======

//  let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }


//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }

//     function calculate() {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }
//     }

let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }
let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }
let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }
let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }
let display = document.getElementById("display");

//     function append(value) {
//       display.value += value;
//     }

//     function clearDisplay() {
//       display.value = "";
//     }

//     function deleteChar() {
//       display.value = display.value.slice(0, -1);
//     }

let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y);


let person = {
  name: "Priyesh",
  age: 22,
  city: "Delhi"
};


//callback

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function done() {
  console.log("Greeting done!");
}
greet("Priyesh", done);


const person = {
  name: "Priyesh",
  sayHi() {
    console.log(this.name);
  }
};
person.sayHi(); // Priyesh



function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

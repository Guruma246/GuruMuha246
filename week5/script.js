// PART 1: Variables and Conditionals

let name = ("Halimat");
let age = prompt("22");
age = Number(age); // Convert from string to number

let message;

if (age <= 18) {
  message = name + ", you are old enough to married!";
} else if (age === 17) {
  message = name + ", almost there! Just one more year.";
} else {
  message = name + ", you are too young to married.";
}

document.getElementById("output").textContent = message;

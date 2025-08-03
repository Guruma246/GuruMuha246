// PART 2: Functions

function greetUser(name) {
  return "Hello, " + name + "!";
}

function checkDrivingAge(age) {
  if (age >= 18) {
    return "You are old enough to drive.";
  } else if (age === 17) {
    return "Almost there! Just one more year.";
  } else {
    return "You are too young to drive.";
  }
}

// Get user input
let name = prompt("guruman");
let age = Number(prompt("23"));

// Call the functions
let greeting = greetUser(name);
let ageMessage = checkDrivingAge(age);

// Show result on the page
document.getElementById("output").textContent = greeting + " " + ageMessage;

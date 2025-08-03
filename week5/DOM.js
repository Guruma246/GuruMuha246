function runCheck() {
  let name = prompt("What's your name?");
  let age = Number(prompt("How old are you?"));

  let greeting = greetUser(name);
  let ageMessage = checkDrivingAge(age);
  let yearsLeft = yearsUntilDriving(age);
  let countdownMessage = startCountdown();
  let colorList = listColors();

  document.getElementById("output").textContent =
    greeting + " " + ageMessage + " " + yearsLeft + "\n" +
    countdownMessage + "\n" +
    colorList;
}

// DOM Interaction #1: Click to trigger logic
document.getElementById("checkBtn").addEventListener("click", runCheck);

// DOM Interaction #2: Toggle dark/light mode
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// DOM Interaction #3: Create new message element
let newMsg = document.createElement("p");
newMsg.textContent = "Check complete!";
document.body.appendChild(newMsg);

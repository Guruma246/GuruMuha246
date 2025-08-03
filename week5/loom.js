// PART 3 - Example 1: Countdown from 5
function startCountdown() {
  let count = 5;
  let message = "Countdown: ";
  
  while (count > 0) {
    message += count + "... ";
    count--;
  }

  message += "Go!";
  return message;
}
let countdownMessage = startCountdown();
document.getElementById("output").textContent += "\n" + countdownMessage;

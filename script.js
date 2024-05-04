// Set the date we're counting down to
var countDownDate = new Date("May 16, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById("days").innerHTML = days + " Days";
  document.getElementById("hours").innerHTML = hours + " Hours";
  document.getElementById("minutes").innerHTML = minutes + " Minutes";
  document.getElementById("seconds").innerHTML = seconds + " Seconds";
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("redirectBtn").disabled = false;
  }
}, 1000);

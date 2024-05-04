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
  
  // Change button text during the last 24 hours of the countdown
  if (distance < 86400000 && distance > 72000000) { // Between 24 and 20 hours 
    document.getElementById("redirectBtn").innerHTML = "Getting the list of materials";
  } else if (distance < 72000000 && distance > 57600000) { // Between 20 and 16 hours remaining
    document.getElementById("redirectBtn").innerHTML = "On my way to the store";
  } else if (distance < 57600000 && distance > 43200000) { // Between 16 and 12 hours remaining
    document.getElementById("redirectBtn").innerHTML = "Matching the Goods with the list";
  } else if (distance < 57600000 && distance > 28800000) { // Between 12 and 8 hours remaining
    document.getElementById("redirectBtn").innerHTML = "Packing the Goods";
  } else if (distance < 28800000 && distance > 14400000) { // Between 8 and 4 hours remaining
    document.getElementById("redirectBtn").innerHTML = "Almost Done";
  }

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "XYZ";
    document.getElementById("redirectBtn").disabled = false;
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
   // Get the modal and button elements
   var modal = document.getElementById("imageModal");
   var openModalBtn = document.getElementById("openModalBtn");

   // When the user clicks the button, open the modal
   openModalBtn.addEventListener("click", function() {
       modal.style.display = "block";
   });

   // When the user clicks on <span> (x), close the modal
   modal.getElementsByClassName("close")[0].addEventListener("click", function() {
       modal.style.display = "none";
   });

   // When the user clicks anywhere outside of the modal, close it
   window.addEventListener("click", function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   });

   var countDownDate = new Date("May 16, 2024 00:00:00").getTime();
   openModalBtn.disabled = true;
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
           openModalBtn.innerHTML = "Getting the list of materials";
       } else if (distance < 72000000 && distance > 57600000) { // Between 20 and 16 hours remaining
           openModalBtn.innerHTML = "On my way to the store";
       } else if (distance < 57600000 && distance > 43200000) { // Between 16 and 12 hours remaining
           openModalBtn.innerHTML = "Matching the Goods with the list";
       } else if (distance < 57600000 && distance > 28800000) { // Between 12 and 8 hours remaining
           openModalBtn.innerHTML = "Packing the Goods";
       } else if (distance < 28800000 && distance > 14400000) { // Between 8 and 4 hours remaining
           openModalBtn.innerHTML = "Almost Done";
       }

       // If the countdown is over, display a message
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("countdown").innerHTML = "Happy Birthday Prapti !!!";

           // Start falling emojis animation
           startFallingEmojis();

           openModalBtn.disabled = false;
       }
   }, 1000);
});

// Emoji function
function startFallingEmojis() {
   var emojisContainer = document.getElementById("emojis");

   // Create falling emojis
   for (var i = 0; i < 20; i++) { // Generate 20 emojis
       // Emoji types
       var emojis = ["&#127873;", "&#127874;", "&#127880;"]; // Add more emojis here

       // Randomly select an emoji type
       var emojiType = emojis[Math.floor(Math.random() * emojis.length)];

       var emoji = document.createElement("div");
       emoji.innerHTML = emojiType; // Emoji code
       emoji.classList.add("falling-emoji");

       // Randomize starting position
       var posX = Math.random() * window.innerWidth;
       var posY = Math.random() * window.innerHeight;

       // Randomize initial animation delay
       var delay = Math.random() * 5 + 1; // Random delay between 1 and 6 seconds

       // Apply styles
       emoji.style.top = posY + "px";
       emoji.style.left = posX + "px";
       emoji.style.animationDelay = delay + "s";

       emojisContainer.appendChild(emoji);
   }
}




//Particle effect
particlesJS("particles-js", {
  "particles": {
     "number": {
        "value": 80,
        "density": {
           "enable": true,
           "value_area": 800
        }
     },
     "color": {
        "value": "#ffffff"
     },
     "shape": {
        "type": "circle",
        "stroke": {
           "width": 0,
           "color": "#000000"
        },
        "polygon": {
           "nb_sides": 5
        },
        "image": {
           "src": "img/github.svg",
           "width": 100,
           "height": 100
        }
     },
     "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
           "enable": false,
           "speed": 1,
           "opacity_min": 0.1,
           "sync": false
        }
     },
     "size": {
        "value": 10,
        "random": true,
        "anim": {
           "enable": false,
           "speed": 40,
           "size_min": 0.1,
           "sync": false
        }
     },
     "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
     },
     "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
           "enable": false,
           "rotateX": 600,
           "rotateY": 1200
        }
     }
  },
  "interactivity": {
     "detect_on": "canvas",
     "events": {
        "onhover": {
           "enable": true,
           "mode": "repulse"
        },
        "onclick": {
           "enable": true,
           "mode": "push"
        },
        "resize": true
     },
     "modes": {
        "grab": {
           "distance": 400,
           "line_linked": {
              "opacity": 1
           }
        },
        "bubble": {
           "distance": 400,
           "size": 40,
           "duration": 2,
           "opacity": 8,
           "speed": 3
        },
        "repulse": {
           "distance": 200,
           "duration": 0.4
        },
        "push": {
           "particles_nb": 4
        },
        "remove": {
           "particles_nb": 2
        }
     }
  },
  "retina_detect": true
});

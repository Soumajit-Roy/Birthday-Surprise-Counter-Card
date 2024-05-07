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

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("mousemove", function(e) {
      var cursorAnimation = document.getElementById("cursorAnimation");
      cursorAnimation.style.left = (e.pageX - 50) + "px"; // Adjust for circle center
      cursorAnimation.style.top = (e.pageY - 50) + "px"; // Adjust for circle center
  });
});

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
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);;
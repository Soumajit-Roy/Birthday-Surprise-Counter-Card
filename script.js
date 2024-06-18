document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("May 16, 2024 00:00:00").getTime();
  buttonneon.style.pointerEvents = "none";
  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
    document.getElementById("seconds").innerHTML = seconds + " Seconds";
   
    var buttonneon = document.querySelector('a');

    // Change button text during the last 24 hours of the countdown
    if (distance < 86400000 && distance > 14400000) {
      // Between 24 and 4 hours
      buttonneon.lastChild.nodeValue = "Getting closer!!"
    } else if (distance < 14400000 && distance > 0) {
      // Between 4 and 0 hours remaining
      buttonneon.lastChild.nodeValue = "Almost there!"
    }  else if (distance < 0 ) {
      // After time expires
      buttonneon.lastChild.nodeValue = "It's here!"
    }

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Happy Birthday XYZ !!!";
      buttonneon.style.pointerEvents = "auto";
    }
  }, 1000);
});

// JavaScript Functionality for Preloader
document.addEventListener("DOMContentLoaded", function() {
   const preloader = document.getElementById("preloader");
   const buttonneon = document.getElementById("buttonneon");

   buttonneon.addEventListener("click", function() {
       // Show the preloader
       preloader.style.display = "flex";

       // Simulate content loading with a timeout (e.g., 3 seconds)
       setTimeout(function() {
           // Hide the preloader
           preloader.style.display = "none";
           // Redirect to another page
           window.location.href = "page2.html"; // Replace with your target URL
       }, 3000);
   });
});

//Particle effect
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 35);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.1,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", {
    // display: none,
  });

  tl.from("#nav", {
    opacity: 0,
    stagger: 0.1,
  });

  tl.from("#banner1 h1, #banner2 h1, #banner3 h2, #banner3 h3, #banner4 h1", {
    y: 120,
    stagger: 0.2,
  });
}

loadingAnimation();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
    // stagger: 0,
  });
});

function cursorAnimation() {
  Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();

TweenLite.defaultEase = Linear.easeNone;
let controller = new ScrollMagic.Controller();
let tl = new TimelineMax();
let letPercent = 110
let manyslider = 9
for (let i = 0; i < manyslider; i++) {
  if (i < 10) {
    tl.from(`section.panel.left.a0${i}`, 1, { xPercent: letPercent });
  } else {
    tl.from(`section.panel.left.a${i}`, 1, { xPercent: letPercent });
  }
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: `${manyslider * 100}%`
})
  .setPin("#pinMaster")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 0
  })
  .addTo(controller);

let tl2 = new TimelineMax();
for (let i = 0; i < manyslider; i++) {
  if (i < 10) {
    tl2.from(`section.panel.right.a0${i}`, 1, { xPercent: -letPercent });
  } else {
    tl2.from(`section.panel.right.a${i}`, 1, { xPercent: -letPercent });
  }
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster2",
  triggerHook: "onLeave",
  duration: `${manyslider * 100}%`
})
  .setPin("#pinMaster2")
  .setTween(tl2)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 0
  })
  .addTo(controller);
/*window.onresize = function (event) {
  location.reload();
};*/
let activated = []
let currentSlider = 0
let realSlider = 0
let direction = 1
let prevScroll = 0
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > prevScroll) {
    direction = 1
  } else if (scroll < prevScroll) {
    direction = -1
  }
  prevScroll = scroll
  currentSlider = Math.floor(scroll / window.innerHeight + 1);
  realSlider = scroll / window.innerHeight + 1

  setActiveDesc(realSlider.toFixed(1))
});
function setActiveDesc(num) {
  let elements = 0
  console.log(direction)
  if (num < 10) {
    if (direction == 1) {
      elements = document.getElementsByClassName("a0" + (num - 0.5))
    } else {
      elements = document.getElementsByClassName("a0" + (num - 1))
    }
  } else {
    if (direction == 1) {
      elements = document.getElementsByClassName("a" + (num - 0.5))
    } else {
      elements = document.getElementsByClassName("a" + (num - 1))
    }
  }
  if (elements.length != 0) torles()
  for (let e = 0; e < elements.length; e++) {
    let children = elements[e].children
    for (let o = 0; o < children.length; o++) {
      if (children[o].classList.contains("desc")) {
        children[o].classList.add("active")
        activated.push(children[o])
        console.log("hozzáad")
      }
    }
  }
}
function torles() {
  for (let b = 0; b < activated.length; b++) {
    activated[b].classList.remove("active")
    console.log("elvesz")
  }
}
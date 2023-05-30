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
window.onresize = function (event) {
  location.reload();
};
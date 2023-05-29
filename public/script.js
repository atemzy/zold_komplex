TweenLite.defaultEase = Linear.easeNone;
let controller = new ScrollMagic.Controller();
let tl = new TimelineMax();
let letPercent = 110
tl.from("section.panel.left.first", 1, { xPercent: letPercent });
tl.from("section.panel.left.sec", 1, { xPercent: letPercent });
tl.from("section.panel.left.third", 1, { xPercent: letPercent });


new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "300%"
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
tl2.from("section.panel.right.first", 1, { xPercent: -letPercent });
tl2.from("section.panel.right.sec", 1, { xPercent: -letPercent });
tl2.from("section.panel.right.third", 1, { xPercent: -letPercent });


new ScrollMagic.Scene({
  triggerElement: "#pinMaster2",
  triggerHook: "onLeave",
  duration: "300%"
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
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});



function imageconAnimation() {
  var imageon = document.querySelector("#image-container")
  var playbtn = document.querySelector("#play")
  
  imageon.addEventListener("mouseenter", function() {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1
    })
  })
  
  imageon.addEventListener("mouseleave", function() {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0
    })
  })
  
  imageon.addEventListener("mousemove", function(dets) {
    gsap.to(playbtn, {
      left: dets.x,
      top: dets.y
    })
  })
  
}

imageconAnimation()

gsap.from("#page1 h1", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
   stagger:0.4
})


gsap.from("#page1 #image-container", {
  scale:0.9,
  opacity:0,
  delay:1.3,
  duration:0.5,
  
})
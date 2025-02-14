gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main", // ✅ Fix: Use #main instead of #nav
        start: "top top",
        end: "+=100px",
        scrub: 1,
        markers: false
    }
});

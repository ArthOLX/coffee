const animation = gsap.timeline();

animation.to(".menu", {
    y: 0,
    opacity: 1,
    duration: 1,
})

animation.to(".titulo-principal", {
    x: 0,
    opacity: 1,
    duration: 0.4,
})

animation.to(".principal p", {
    x: 0,
    opacity: 1,
    duration: 0.5,

})

animation.to(".principal button", {
    x: 0,
    opacity: 1,
    duration: 0.1,
    delay: 0
})

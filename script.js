gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

gsap.from(".hero", {
        opacity: 0,
        duration: 1,
    })

    gsap.from("picture", {
    y: -200,
    duration: 1
    })

    //Animação Card
    gsap.from(".cards", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.2,
    scrollTrigger: {  //Retardando a animação para quando o elemento estiver visível na tela.
        trigger: ".card",
        markers: false, //Marcação para ajuste (Coloque true)
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
})